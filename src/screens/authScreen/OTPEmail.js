import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/authScreen/StyleOTP';

const OTPEmail = (props) => {

    const [verifyCode, setVerifyCode] = useState("");
    const [email, setEmail] = useState("aldoignatachandra@gmail.com");
    const [timer, setTimer] = useState(21)

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
                <Text style={styles.inputCodeText}>Input Code</Text>
                <Text style={styles.inputCodeDescription}>We have sent the code to</Text>
                <Text style={styles.inputCodeOTPType}>{email}</Text>
                <OTPInputView
                    style={styles.inputOTP}
                    pinCount={4}
                    code={verifyCode}
                    onCodeChanged = {code => setVerifyCode(code)}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code => {
                        console.log(`Code is ${code}, you are good to go!`);
                        props.navigation.navigate("SuccessJoin");
                    })}
                />
                <TouchableOpacity>
                    <Text style={styles.buttonSendAgain}>SEND AGAIN 
                        <Text style={styles.timerColor}> ({timer})</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default OTPEmail; 