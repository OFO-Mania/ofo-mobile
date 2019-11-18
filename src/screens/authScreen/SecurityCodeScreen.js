import React from 'react';
import { ImageBackground } from 'react-native';

const SecurityCodeScreen = () => {
    return(
        <ImageBackground 
            source={require("../../assets/images/bg-securitycode.png")} 
            style={{width:"100%", height:"100%"}}
        />
    )
}

export default SecurityCodeScreen;