import React,{ useState } from 'react';
import { 
    View,
    Text,
    StatusBar, 
    ScrollView, 
    TouchableOpacity,
} from 'react-native';
import styles from '../../styles/authScreen/StyleJoin';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, CheckBox } from 'react-native-elements';

const JoinScreen = (props) => {

    const [fullName, setFullname] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setemail] = useState("");
    const [codePromo, setcodePromo] = useState("");
    const [policy, setPolicy] = useState(false);

    return(
        <>
            <StatusBar backgroundColor="#422575" barStyle="light-content" />
            <View style={styles.headerJoin}>
                <Icon 
                    style={{marginLeft:20}} 
                    name='chevron-left' 
                    size={24} 
                    color='white' 
                    onPress={() => props.navigation.navigate("SignIn")}
                />
                <Text style={{fontSize:17, color:"white", marginLeft:30}}>JOIN OFO</Text>
            </View>
            <View style={styles.container}> 
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{marginHorizontal:10,fontSize:15, textAlign:"left"}}>
                        Thank you for joining OFO! We will send the
                        <Text style={{fontWeight:"bold"}}> code </Text> 
                        via 
                        <Text style={{fontWeight:"bold"}}> SMS </Text> 
                        and 
                        <Text style={{fontWeight:"bold"}}> email </Text> 
                        to verify the registration process
                    </Text>
                    <Input
                        label={fullName === "" ? "" : "Fullname"}
                        labelStyle={{color:"black", marginTop:10, fontWeight:"100", fontSize:14}} 
                        inputStyle={styles.input}    
                        inputContainerStyle={styles.borderInput}
                        placeholderTextColor="grey"
                        placeholder='Fullname'
                        maxLength={20}
                        onChangeText={name => setFullname(name)}
                        value={fullName}
                    />
                    <Input
                        label={phoneNumber === "" ? "" : "Phone Number"}
                        labelStyle={{color:"black", marginTop:10, fontWeight:"100", fontSize:14}} 
                        inputStyle={styles.input}    
                        inputContainerStyle={styles.borderInput}
                        placeholderTextColor="grey"
                        placeholder='Phone Number'
                        keyboardType="number-pad"
                        maxLength={13}
                        onChangeText={phone => setphoneNumber(phone)}
                        value={phoneNumber}
                    />
                    <Input
                        label={email === "" ? "" : "Email"}
                        labelStyle={{color:"black", marginTop:10, fontWeight:"100", fontSize:14}} 
                        inputStyle={styles.input}    
                        inputContainerStyle={styles.borderInput}
                        placeholderTextColor="grey"
                        placeholder='Email'
                        keyboardType="email-address"
                        maxLength={40}
                        onChangeText={email => setemail(email)}
                        value={email}
                    />
                    <Input
                        label={codePromo === "" ? "" : "Referal Code"}
                        labelStyle={{color:"black", marginTop:10, fontWeight:"100", fontSize:14}} 
                        inputStyle={styles.input}    
                        inputContainerStyle={styles.borderInput}
                        placeholderTextColor="grey"
                        placeholder='Referal Code'
                        keyboardType="number-pad"
                        maxLength={40}
                        onChangeText={code => setcodePromo(code)}
                        value={codePromo}
                    />
                    <View style={{
                        flex:1, 
                        flexDirection:"row", 
                        marginTop:20, 
                        justifyContent:"center",
                        alignItems:"center",
                        marginHorizontal:20
                        }}>
                        <CheckBox
                            containerStyle={{width:30}}
                            checkedColor="green"
                            onPress={() => setPolicy(!policy)}
                            checked={policy}
                        />
                        <Text>
                            I agree to the 
                            <Text 
                                style={{color:"#06B3BA"}} 
                                onPress={() => props.navigation.navigate("TOS")}
                            > terms & conditions </Text> 
                            and 
                            <Text 
                                style={{color:"#06B3BA"}}
                                onPress={() => props.navigation.navigate("Policy")}
                            > privacy policy </Text> 
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.buttonNextNow}
                        onPress={() => props.navigation.navigate("OTPPhone")}
                    >
                        <Text style={styles.textButtonNext}>NEXT</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}

export default JoinScreen;