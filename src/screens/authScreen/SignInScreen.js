import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import styles from '../../styles/authScreen/StyleSignIn';
import Divider from 'react-native-divider';
import { Input } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {sendPhoneVerification} from '../../services/AuthenticationAPI';
import {useLoading} from '../../core/hook';

const SignInScreen = ({navigation}) => {

    const [phoneNumber, setPhoneNumber] = useState(navigation.getParam('phoneNumber', ''));
    const [buttonSignIn, setButtonSignIn] = useState(true);
    const [loading, showLoading, hideLoading] = useLoading();

    const sendVerificationCode = async () => {
        try {
            showLoading();
            const response = await sendPhoneVerification(phoneNumber);
            navigation.navigate("OTPSignIn", { phoneNumber });
            Toast.showWithGravity(response.message, Toast.LONG, Toast.TOP);
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    const handleSignIn = async () => {
        console.log(phoneNumber);
        if (!phoneNumber) {
            Toast.showWithGravity('Phone Number cannot be empty!', Toast.LONG, Toast.TOP);
            return;
        }
        if (phoneNumber.length < 10) {
	        Toast.showWithGravity('Phone Number should be minimum of 10 digit', Toast.LONG, Toast.TOP);
	        return;
        }
        await sendVerificationCode();
    };

    useEffect(() => {
        !phoneNumber ? setButtonSignIn(true) : setButtonSignIn(false);
    },[phoneNumber]);

    return(
        <>
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../assets/images/imagesAuth/bg-signin.png")}
                    style={{width:"100%", height:"100%"}}
                >
                    <ScrollView>
                        <Text style={styles.title}>OFO</Text>
                        <View style={styles.containerPhoneNumber}>
                            <Image source={require("../../assets/images/imagesAuth/IconUserSignIn.png")} style={styles.iconUser} />
                            <Input
                                inputStyle={styles.inputPhoneNumber}
                                inputContainerStyle={styles.borderInput}
                                placeholderTextColor="white"
                                placeholder='Phone Number'
                                keyboardType="numeric"
                                onChangeText={number => setPhoneNumber(number)}
                                value={phoneNumber}
                                maxLength={13}
                            />
                        </View>
                        <View style={styles.containerSignIn}>
                            <TouchableOpacity disabled={buttonSignIn} style={[styles.buttonSignIn,{
                                borderColor: phoneNumber === ""  ? "#9A7AC4" : "white"
                                }]} onPress={handleSignIn}>
                                {
                                    loading ? <ActivityIndicator color="white" /> : <Text style={[styles.textButton,{
                                        color: phoneNumber === ""  ? "#9A7AC4" : "white"
                                    }]}>SIGN IN
                                    </Text>
                                }
                            </TouchableOpacity>
                            <Text></Text>
                            <Divider borderColor="#BCB2CC" color="#BCB2CC" orientation="center">OR</Divider>
                            <Text></Text>
                            <TouchableOpacity style={styles.buttonJoinNow} onPress={() => navigation.navigate("Join")}>
                                <Text style={styles.textButtonJoin}>JOIN NOW</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.containerHelp} onPress={() => navigation.navigate("HelpCenter")}>
                                <Image source={require("../../assets/images/imagesAuth/IconHelpSignIn.png")} style={styles.iconUser} />
                                <Text style={{marginTop:10, color:"#19AABB"}}> Need Help ?</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </>
    )
}

export default SignInScreen;
