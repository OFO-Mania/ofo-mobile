import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/authScreen/StyleJoin';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';

const HelpCenterScreen = (props) => {
    return (
        <>
            <View style={styles.headerJoin}>
                <Icon 
                    style={{marginLeft:20}} 
                    name='chevron-left' size={24} 
                    color='white' 
                    onPress={() => props.navigation.navigate("SignIn")}
                />
                <Text style={{fontSize:17, color:"white", marginLeft:30}}>Help Center</Text>
            </View>
            <WebView source={{ uri: 'https://www.ovo.id/helpcenter' }} />
        </>
    )
}

export default HelpCenterScreen;