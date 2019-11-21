import React from 'react';
import { Platform, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';

const TransferFavorit = () => {
    return (
        <>
            <ScrollView>
                <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 900,
                }}>
                    <Image 
                        style={{
                            width:180,
                            height:180,
                            alignSelf:'center',
                            marginTop:30,
                        }}
                        source={require('../../assets/images/imagesHome/Transfer/Favourite.png')} />
                    <Text 
                        style={{
                            alignSelf:'center',
                            color:'grey'
                        }}>
                        You do not have favourite list yet
                    </Text>
                </View>
            </ScrollView>
        </>
    )
}

export default TransferFavorit;
