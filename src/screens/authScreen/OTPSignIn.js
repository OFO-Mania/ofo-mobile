import React, {useEffect, useState} from 'react';
import {View, StatusBar, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/authScreen/StyleOTP';
import {sendPhoneVerification, verifyPhoneVerification} from '../../services/AuthenticationAPI';
import Toast from 'react-native-simple-toast';
import {useLoading} from '../../core/hook';

const OTPSignIn = ({ navigation }) => {

    const phoneNumber = navigation.getParam('phoneNumber', '');

    const [verifyCode, setVerifyCode] = useState('');
    const [timer, setTimer] = useState(30);
    const [loading, showLoading, hideLoading] = useLoading();

    const sendVerificationCode = async () => {
        try {
            showLoading();
            const response = await sendPhoneVerification(phoneNumber);
            setTimer(30);
            Toast.showWithGravity(response.message, Toast.LONG, Toast.TOP);
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    const onCodeFullfiled = async (code) => {
        try {
            showLoading();
            const response = await verifyPhoneVerification(phoneNumber, code);
            navigation.navigate(response.data.has_security_code ? 'SecurityCode' : 'CreateSecurityCode', {
                phoneNumber,
                oneTimeToken: response.data.one_time_token
            });
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
             hideLoading();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => { clearInterval(interval) };
    });

    return(
        <>
            <StatusBar backgroundColor="#422575" barStyle="light-content" />
            <View style={styles.headerJoin}>
                <Icon
                    style={{marginLeft:20}}
                    name='chevron-left'
                    size={24}
                    color='white'
                    onPress={() => navigation.navigate('SignIn', {phoneNumber})}
                />
                <Text style={styles.textHeader}>SIGN IN</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.inputCodeText}>Input Code</Text>
                <Text style={styles.inputCodeDescription}>We have sent the code to</Text>
                <Text style={styles.inputCodeOTPType}>{phoneNumber}</Text>
                <OTPInputView
                    style={styles.inputOTP}
                    pinCount={4}
                    code={verifyCode}
                    onCodeChanged={setVerifyCode}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {onCodeFullfiled}
                />
                <TouchableOpacity disabled={timer > 0} onPress={sendVerificationCode} >
                    {
                        loading ? <ActivityIndicator /> : <Text style={[styles.buttonSendAgain, {
                            color: timer > 0 ? 'grey' : '#06B3BA'
                        }]}>SEND AGAIN
                            <Text style={styles.timerColor}> ({timer})</Text>
                        </Text>
                    }
                </TouchableOpacity>
            </View>
        </>
    )
}

export default OTPSignIn;
