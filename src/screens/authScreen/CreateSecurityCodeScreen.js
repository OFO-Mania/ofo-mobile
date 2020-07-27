import React, {useEffect, useState} from 'react';
import {View, StatusBar, Text, BackHandler, ActivityIndicator, Platform} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/authScreen/StyleOTP';
import AsyncStorage from '@react-native-community/async-storage';
import {setAccessToken, setIsNewUser} from '../../actions';
import {authenticate} from '../../actions/user';
import Toast from 'react-native-simple-toast';
import {useLoading} from '../../core/hook';
import {useDispatch} from 'react-redux';
import {setSecurityCode} from '../../services/AuthenticationAPI';

const CreateSecurityCodeScreen = ({navigation}) => {
    const fromForget = navigation.getParam('fromForget', false);
    const oneTimeToken = navigation.getParam('oneTimeToken', '');
    const [localSecurityCode, setLocalSecurityCode] = useState('');
    const [loading, showLoading, hideLoading] = useLoading();
    const dispatch = useDispatch();

    const onCodeFullfiled = async (securityCode) => {
        try {
            showLoading();
            const deviceID = await AsyncStorage.getItem('openSignalDeviceID');
            const response = await setSecurityCode(oneTimeToken, securityCode, deviceID, Platform.OS.toUpperCase());
            dispatch(setIsNewUser(!fromForget));
            dispatch(authenticate(response.data.user));
            dispatch(setAccessToken(response.data.token));
            Toast.showWithGravity(response.message, Toast.LONG, Toast.TOP);
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    useEffect(() => {
        const handler = () => {
            BackHandler.exitApp();
        };
        BackHandler.addEventListener('hardwareBackPress', handler);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handler);
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
                    color='#422575'
                />
                <Text style={styles.textHeader}>JOIN OFO</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.inputCodeText}>Make Your Security Code</Text>
                <Text style={[styles.inputCodeDescription,{textAlign:"center"}]}>
                    The security code is used to enter your account and make transactions
                </Text>
                <OTPInputView
                    style={styles.inputOTP}
                    pinCount={6}
                    code={localSecurityCode}
                    onCodeChanged = {setLocalSecurityCode}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase2}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {onCodeFullfiled}
                    secureTextEntry={true}
                />
                {
                    loading && <ActivityIndicator />
                }
            </View>
        </>
    )
};

export default CreateSecurityCodeScreen;
