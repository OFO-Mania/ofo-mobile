import React from 'react';
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

const JoinScreen = (props) => {
    return(
        <>
            <StatusBar backgroundColor="#422575" barStyle="light-content" />
            <View style={styles.container}>
                <ImageBackground 
                    source={require("../../assets/images/bg-signin.png")} 
                    style={{width:"100%", height:"100%"}}
                >
                    <ScrollView>
                        <Text style={styles.title}>OFO</Text>
                        <View style={styles.containerPhoneNumber}>
                            <Image source={require("../../assets/images/IconUserSignIn.png")} style={styles.iconUser} />
                            <Input
                                inputStyle={styles.inputPhoneNumber}    
                                inputContainerStyle={styles.borderInput}
                                placeholderTextColor="white"
                                placeholder='Phone Number'
                                keyboardType="numeric"
                                maxLength={13}
                            />
                        </View>
                        <View style={styles.containerSignIn}>
                            <TouchableOpacity style={styles.buttonSignIn}>
                                <Text style={styles.textButton}>SIGN IN</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <Divider borderColor="#BCB2CC" color="#BCB2CC" orientation="center">OR</Divider>
                            <Text></Text>
                            <TouchableOpacity style={styles.buttonJoinNow} onPress={() => props.navigation.navigate("Join")}>
                                <Text style={styles.textButtonJoin}>JOIN NOW</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.containerHelp}>
                                <Image source={require("../../assets/images/IconHelpSignIn.png")} style={styles.iconUser} />
                                <Text style={{marginTop:10, color:"#19AABB"}}> Need Help ?</Text>
                            </TouchableOpacity>
                        </View>   
                    </ScrollView>
                </ImageBackground>
            </View>
        </>
    )
}

export default JoinScreen;