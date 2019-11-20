import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/authScreen/StyleOTP';

const CreateSecurityCodeScreen = (props) => {

    const [securityCode, setSecurityCode] = useState("");

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
                    code={securityCode}
                    onCodeChanged = {code => setSecurityCode(code)}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase2}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code => {
                        console.log(`Code is ${code}, you are good to go!`);
                        // props.navigation.navigate("SuccessJoin");   //NewUser
                        props.navigation.navigate("SecurityCode");  //ForgetPassword
                    })}
                />
            </View>
        </>
    )
}

export default CreateSecurityCodeScreen; 