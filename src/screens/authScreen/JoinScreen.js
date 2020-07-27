import React,{ useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableOpacity, ActivityIndicator,
} from 'react-native';
import styles from '../../styles/authScreen/StyleJoin';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, CheckBox } from 'react-native-elements';
import {useLoading} from '../../core/hook';
import Toast from 'react-native-simple-toast';
import {join, sendPhoneVerification} from '../../services/AuthenticationAPI';

const JoinScreen = ({navigation}) => {

    const [fullName, setFullName] = useState(navigation.getParam('fullName', ''));
    const [phoneNumber, setPhoneNumber] = useState(navigation.getParam('phoneNumber', ''));
    const [emailAddress, setEmailAddress] = useState(navigation.getParam('emailAddress', ''));
    const [referralCode, setReferralCode] = useState(navigation.getParam('referralCode', ''));
    const [policyChecked, setPolicyChecked] = useState(navigation.getParam('policyChecked', false));
    const nextable = fullName !== '' && phoneNumber !== '' && emailAddress !== '' && policyChecked;
    const [loading, showLoading, hideLoading] = useLoading();

    const onJoin = async () => {
        try {
            showLoading();
            await join(fullName, phoneNumber, emailAddress, referralCode);
            await sendVerificationCode();
            navigation.navigate('OTPPhone', { fullName, phoneNumber, emailAddress, referralCode, policyChecked });
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    const sendVerificationCode = async () => {
        try {
            showLoading();
            const response = await sendPhoneVerification(phoneNumber);
            Toast.showWithGravity(response.message, Toast.LONG, Toast.TOP);
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    return(
        <>
            <StatusBar backgroundColor="#422575" barStyle="light-content" />
            <View style={styles.headerJoin}>
                <Icon
                    style={{marginLeft:20}}
                    name='chevron-left'
                    size={24}
                    color='white'
                    onPress={() => navigation.navigate("SignIn")}
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
                        disabled={loading}
                        label={fullName === "" ? "" : "Full Name"}
                        labelStyle={{color:"black", marginTop:10, fontWeight:"100", fontSize:14}}
                        inputStyle={styles.input}
                        inputContainerStyle={styles.borderInput}
                        placeholderTextColor="grey"
                        placeholder='Full Name'
                        maxLength={20}
                        onChangeText={name => setFullName(name)}
                        value={fullName}
                    />
                    <Input
                        disabled={loading}
                        label={phoneNumber === "" ? "" : "Phone Number"}
                        labelStyle={{color:"black", marginTop:10, fontWeight:"100", fontSize:14}}
                        inputStyle={styles.input}
                        inputContainerStyle={styles.borderInput}
                        placeholderTextColor="grey"
                        placeholder='Phone Number'
                        keyboardType="number-pad"
                        maxLength={13}
                        onChangeText={phone => setPhoneNumber(phone)}
                        value={phoneNumber}
                    />
                    <Input
                        disabled={loading}
                        label={emailAddress === "" ? "" : "Email"}
                        labelStyle={{color:"black", marginTop:10, fontWeight:"100", fontSize:14}}
                        inputStyle={styles.input}
                        inputContainerStyle={styles.borderInput}
                        placeholderTextColor="grey"
                        placeholder='Email'
                        keyboardType="email-address"
                        maxLength={40}
                        onChangeText={email => setEmailAddress(email)}
                        value={emailAddress}
                    />
                    <Input
                        disabled={loading}
                        label={referralCode === "" ? "" : "Referral Code"}
                        labelStyle={{color:"black", marginTop:10, fontWeight:"100", fontSize:14}}
                        inputStyle={styles.input}
                        inputContainerStyle={styles.borderInput}
                        placeholderTextColor="grey"
                        placeholder='Referral Code'
                        keyboardType="number-pad"
                        maxLength={40}
                        onChangeText={code => setReferralCode(code)}
                        value={referralCode}
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
                            onPress={() => setPolicyChecked(!policyChecked)}
                            checked={policyChecked}
                        />
                        <Text>
                            I agree to the
                            <Text
                                style={{color:"#06B3BA"}}
                                onPress={() => navigation.navigate("TOS")}
                            > terms & conditions </Text>
                            and
                            <Text
                                style={{color:"#06B3BA"}}
                                onPress={() => navigation.navigate("Policy")}
                            > privacy policy </Text>
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.buttonNextNow, { backgroundColor: nextable && !loading ? '#06B3BA' : 'grey' }]}
                        disabled={!nextable || loading}
                        onPress={onJoin}
                    >
                        {
                            loading ? <ActivityIndicator color="white" /> : <Text style={styles.textButtonNext}>NEXT</Text>
                        }
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}

export default JoinScreen;
