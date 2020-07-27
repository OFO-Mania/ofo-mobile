import React, { useState, useEffect } from 'react';
import {
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    BackHandler, Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../styles/authScreen/StyleSecurityCode';
import Icon from 'react-native-vector-icons/Ionicons';
import {enterGate, signIn, signOut} from '../../services/AuthenticationAPI';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import {setAccessToken, setNeedAuth} from '../../actions';
import {authenticate, deauthenticate} from '../../actions/user';
import {useLoading} from '../../core/hook';

const SecurityCodeScreen = ({navigation}) => {

    const oneTimeToken = navigation.getParam('oneTimeToken', null);
    const phoneNumber = navigation.getParam('phoneNumber', null);
    const [securityCode, setSecurityCode] = useState('');
    const [loading, showLoading, hideLoading] = useLoading();
    const accessToken = useSelector(state => state.root.accessToken);
    const user = useSelector(state => state.user.authenticatedUser);
    const dispatch = useDispatch();

    const handleButtonPress = button => {
        if (button === "backspace") {
            if (securityCode.length > 0)
            setSecurityCode(securityCode.substr(0, securityCode.length - 1))
        } else {
            if (securityCode.length < 6)
            setSecurityCode(securityCode + button);
        }
    };

    const doSignIn = async () => {
        try {
            showLoading();
            const deviceID = await AsyncStorage.getItem('openSignalDeviceID');
            const response = accessToken !== null
                ? await enterGate(accessToken, securityCode)
                : await signIn(oneTimeToken, securityCode, deviceID, Platform.OS.toUpperCase());
            dispatch(setNeedAuth(false));
            dispatch(authenticate(response.data.user));
            dispatch(setAccessToken(response.data.token));
            navigation.navigate('App');
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    const onSignOut = async () => {
        try {
            showLoading();
            if (accessToken !== null) {
                const deviceID = await AsyncStorage.getItem('openSignalDeviceID');
                const response = await signOut(accessToken, deviceID, Platform.OS.toUpperCase());
                Toast.showWithGravity(response.message, Toast.LONG, Toast.TOP);
            }
            dispatch(setAccessToken(null));
            dispatch(deauthenticate());
            navigation.navigate('SignIn');
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

    useEffect(() => {
        if (securityCode.length === 6) {
            doSignIn().then();
        }
    },[securityCode]);

    return(
        <ImageBackground
            source={require("../../assets/images/imagesAuth/bg-securitycode.png")}
            style={{width:"100%", height:"100%"}}
        >
        {console.log(securityCode)}
            <View style={styles.container}>
                <Text style={styles.textTitle}>Insert Security Code</Text>
                <View style={{flex:1, flexDirection:"row", marginTop:50}}>
                    {[0,0,0,0,0,0].map((code, index) => {
                        return(
                            <View
                                key={index}
                                style={[ styles.codeTransition,
                                    {backgroundColor: securityCode.length < index +1 ? "transparent" : "white"}
                                    ]}>
                            </View>
                        )
                    })}
                </View>
                <TouchableOpacity disabled={loading} style={{marginTop:-50}} onPress={() => navigation.navigate('OTPForgetSecurityCode', {
                    phoneNumber: phoneNumber !== null ? phoneNumber : user.phone_number
                })}>
                    {
                        loading ? <ActivityIndicator color="white" size={24} /> : <Text
                            style={{color:"#06B3BA", fontWeight:"bold", fontSize:15}}>
                            Forget Security Code ?
                        </Text>
                    }
                </TouchableOpacity>
                {/* Keyboard Section */}
                <View style={styles.keyboardSection}>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("1")}>
                        <Text style={styles.keyboardButtonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("2")}>
                        <Text style={styles.keyboardButtonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("3")}>
                        <Text style={styles.keyboardButtonText}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboardSection}>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("4")}>
                    <Text style={styles.keyboardButtonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("5")}>
                    <Text style={styles.keyboardButtonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("6")}>
                    <Text style={styles.keyboardButtonText}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboardSection}>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("7")}>
                    <Text style={styles.keyboardButtonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("8")}>
                    <Text style={styles.keyboardButtonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("9")}>
                    <Text style={styles.keyboardButtonText}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboardSection}>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton}>
                        <Text style={styles.keyboardButtonText}></Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("0")}>
                        <Text style={styles.keyboardButtonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={loading}  style={styles.keyboardButton} onPress={()=>handleButtonPress("backspace")}>
                        <Icon name='md-backspace' color='white' style={styles.keyboardButtonIcon}></Icon>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity disabled={loading}  style={styles.buttonChangeAccount} onPress={onSignOut}>
                    {
                        loading ? <ActivityIndicator color="white" /> : <Text style={styles.textButtonChangeAccount}>
                            CHANGE ANOTHER ACCOUNT
                        </Text>
                    }
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default SecurityCodeScreen;
