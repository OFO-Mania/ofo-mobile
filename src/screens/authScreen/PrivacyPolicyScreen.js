import React from 'react';
import { 
    View,
    Text,
} from 'react-native';
import styles from '../../styles/authScreen/StyleSignUp';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';

const PrivacyPolicyScreen = (props) => {
    return (
        <>
            <View style={styles.headerJoin}>
                <Icon 
                    style={{marginLeft:20}} 
                    name='chevron-left' size={24} 
                    color='white' 
                    onPress={() => props.navigation.navigate("Join")}
                />
                <Text style={{fontSize:17, color:"white", marginLeft:30}}>Privacy Policy</Text>
            </View>
            <WebView source={{ uri: 'https://www.ovo.id/privacy-policy-hooq' }} />
        </>
    )
}

export default PrivacyPolicyScreen;