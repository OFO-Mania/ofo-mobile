import React from 'react';
import { 
    View,
    Text,
} from 'react-native';
import styles from '../../styles/authScreen/StyleSignUp';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';

const TOSScreen = (props) => {
    return (
        <>
            <View style={styles.headerJoin}>
                <Icon 
                    style={{marginLeft:20}} 
                    name='chevron-left' size={24} 
                    color='white' 
                    onPress={() => props.navigation.navigate("Join")}
                />
                <Text style={{fontSize:17, color:"white", marginLeft:30}}>Terms & Conditions</Text>
            </View>
            <WebView source={{ uri: 'https://www.ovo.id/syarat-ketentuan' }} />
        </>
    )
}

export default TOSScreen;