import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';

const DealsScreen = () => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerSmallText}>
                    Deals
                </Text>
            </View>
            <View>
                <Text style={{textAlign:"center",fontWeight:"bold", fontSize:35, paddingTop:"50%"}}>
                    SCREEN DEALS
                </Text>
            </View>
        </>
    )
}

export default DealsScreen;