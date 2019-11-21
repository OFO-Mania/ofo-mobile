import React from 'react';
import {Platform, Text, View} from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';

const ProfileScreen = () => {
    return (
        <>
            <View style={[styles.headerContainer, Platform.OS === 'ios' ? {
                alignItems: 'center'
            } : {
                alignItems: 'flex-start'
            }]}>
                <Text style={[styles.headerSmallText, Platform.OS === 'ios' ? {
                    marginLeft: 0,
                } : {
                    marginLeft: 20
                }]}>
                    Profile
                </Text>
            </View>
            <View>
                <Text style={{textAlign:"center",fontWeight:"bold", fontSize:35, paddingTop:"50%"}}>
                    SCREEN PROFILE
                </Text>
            </View>
        </>
    )
}

export default ProfileScreen;
