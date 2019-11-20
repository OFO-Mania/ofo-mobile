import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';

const FinanceScreen = () => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerSmallText}>
                    Finance
                </Text>
            </View>
            <View>
                <Text style={{textAlign:"center",fontWeight:"bold", fontSize:35, paddingTop:"50%"}}>
                    SCREEN FINANCE
                </Text>
            </View>
        </>
    )
}

export default FinanceScreen;