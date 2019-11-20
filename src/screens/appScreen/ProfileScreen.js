import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';

const ProfileScreen = () => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerSmallText}>
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