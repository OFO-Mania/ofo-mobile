import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    StatusBar, 
    ScrollView, 
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import styles from '../../styles/authScreen/StyleSignIn';
import Divider from 'react-native-divider';
import { Input } from 'react-native-elements';
import Toast from 'react-native-simple-toast';

const SignInScreen = (props) => {
    
    const [phoneNumber, setPhoneNumber] = useState("");
    const [buttonSignIn, setButtonSignIn] = useState(true)

    const handleLogin = () => {
        if (phoneNumber === "" || phoneNumber === null) {
            Toast.showWithGravity('Phone Number Cannot Be Empty', Toast.LONG, Toast.TOP)
        } else {
            props.navigation.navigate("OTPSignIn")
        }
    }
    
    useEffect(() => {
        if (phoneNumber === "" || phoneNumber === null) {
            setButtonSignIn(true)
        } else {
            setButtonSignIn(false)
        }
    },[phoneNumber]);

    return(
        <>
            <StatusBar backgroundColor="#422575" barStyle="light-content" />
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
                                }]} onPress={() => handleLogin()}>
                                <Text style={[styles.textButton,{
                                    color: phoneNumber === ""  ? "#9A7AC4" : "white"
                                    }]}>SIGN IN
                                </Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <Divider borderColor="#BCB2CC" color="#BCB2CC" orientation="center">OR</Divider>
                            <Text></Text>
                            <TouchableOpacity style={styles.buttonJoinNow} onPress={() => props.navigation.navigate("Join")}>
                                <Text style={styles.textButtonJoin}>JOIN NOW</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.containerHelp} onPress={() => props.navigation.navigate("HelpCenter")}>
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