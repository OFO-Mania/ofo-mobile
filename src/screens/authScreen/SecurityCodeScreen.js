import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import styles from '../../styles/authScreen/StyleSecurityCode';
import Icon from 'react-native-vector-icons/Ionicons';

const SecurityCodeScreen = (props) => {

    const [securityCode, setSecurityCode] = useState("");

    const handleButtonPress = button => {
        if (button === "backspace") {
            if (securityCode.length > 0)
            setSecurityCode(securityCode.substr(0, securityCode.length - 1))
        } else {
            if (securityCode.length < 6)
            setSecurityCode(securityCode + button);
        }
    }

    useEffect(() => {
        if (securityCode.length == 6) {
            props.navigation.navigate("TabNavigation");
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
                <TouchableOpacity style={{marginTop:-50}} onPress={() => props.navigation.navigate("OTPForgetSecurityCode")}>
                    <Text 
                        style={{color:"#06B3BA", fontWeight:"bold", fontSize:15}}>
                        Forget Security Code ?
                    </Text>
                </TouchableOpacity>
                {/* Keyboard Section */}
                <View style={styles.keyboardSection}>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("1")}>
                        <Text style={styles.keyboardButtonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("2")}>
                        <Text style={styles.keyboardButtonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("3")}>
                        <Text style={styles.keyboardButtonText}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboardSection}>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("4")}>
                    <Text style={styles.keyboardButtonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("5")}>
                    <Text style={styles.keyboardButtonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("6")}>
                    <Text style={styles.keyboardButtonText}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboardSection}>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("7")}>
                    <Text style={styles.keyboardButtonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("8")}>
                    <Text style={styles.keyboardButtonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("9")}>
                    <Text style={styles.keyboardButtonText}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboardSection}>
                    <TouchableOpacity style={styles.keyboardButton}>
                        <Text style={styles.keyboardButtonText}></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("0")}>
                        <Text style={styles.keyboardButtonText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboardButton} onPress={()=>handleButtonPress("backspace")}>
                        <Icon name='md-backspace' color='white' style={styles.keyboardButtonIcon}></Icon>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonChangeAccount} onPress={() => props.navigation.navigate("SignIn")}>
                    <Text style={styles.textButtonChangeAccount}>
                        CHANGE ANOTHER ACCOUNT
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default SecurityCodeScreen;