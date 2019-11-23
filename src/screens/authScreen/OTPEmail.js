import React, {useEffect, useState} from 'react';
import {View, StatusBar, Text, TouchableOpacity, BackHandler, ActivityIndicator} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/authScreen/StyleOTP';
import {
    sendEmailVerification,
    verifyEmailVerification,
    verifyPhoneVerification,
} from '../../services/AuthenticationAPI';
import Toast from 'react-native-simple-toast';
import {useLoading} from '../../core/hook';

const OTPEmail = ({navigation}) => {


    const fullName = navigation.getParam('fullName', '');
    const phoneNumber = navigation.getParam('phoneNumber', '');
    const emailAddress = navigation.getParam('emailAddress', '');
    const referralCode = navigation.getParam('referralCode', '');
    const policyChecked = navigation.getParam('policyChecked', false);

    const [verifyCode, setVerifyCode] = useState('');
    const [timer, setTimer] = useState(30);
    const [loading, showLoading, hideLoading] = useLoading();

    const onBackPressed = () => {
        navigation.navigate('Join', {
            fullName, phoneNumber, emailAddress, referralCode, policyChecked
        });
        return true;
    };

    const sendEmailVerificationCode = async () => {
        try {
            showLoading();
            const response = await sendEmailVerification(phoneNumber);
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
            const response = await verifyEmailVerification(emailAddress, code);
            navigation.navigate('CreateSecurityCode', {
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
        BackHandler.addEventListener('hardwareBackPress', onBackPressed);
        return () => {
            clearInterval(interval);
            BackHandler.removeEventListener('hardwareBackPress', onBackPressed);
        }
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
                    onPress={onBackPressed}
                />
                <Text style={styles.textHeader}>JOIN OFO</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.inputCodeText}>Input Code</Text>
                <Text style={styles.inputCodeDescription}>We have sent the code to</Text>
                <Text style={styles.inputCodeOTPType}>{emailAddress}</Text>
                <OTPInputView
                    style={styles.inputOTP}
                    pinCount={4}
                    code={verifyCode}
                    onCodeChanged = {code => setVerifyCode(code)}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {onCodeFullfiled}
                />
                <TouchableOpacity disabled={timer > 0} onPress={sendEmailVerificationCode} >
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

export default OTPEmail;
