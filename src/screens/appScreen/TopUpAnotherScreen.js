import React from 'react';
import { Platform, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import { ListItem, Divider } from 'react-native-elements';



const TopUpAnotherScreen = () => {
    const listMethod = [
        {
            name: 'Debit Card',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/DebitCard.png')
        },
        {
            name: 'ATM',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/x.png')
        },
        {
            name: 'Internet/Mobile Banking',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/InternetBanking.png')
        },
        {
            name: 'Merchant',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/Merchant.png')
        },
        {
            name: 'OFO Booth',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/OFOBooth.png')
        },
    ]
    return (
        <>
            <ScrollView>
                <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 230
                }}>
                    <Text style={{
                        fontSize: 13,
                        marginLeft: 30,
                        marginTop: 30
                    }}>
                        Top Up Balance To
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        marginLeft: 30,
                    }}>
                        OFO Cash
                    </Text>

                    <Divider style={{ 
                        backgroundColor: '#E7E7E7',
                        width:'85%',
                        alignSelf:'center',
                        height:1.5    
                    }} />
                    <View style={{
                        flexDirection: 'column',
                        width: '85%',
                        height: 70,
                        backgroundColor:'#F8F8F8',
                        borderRadius: 12,
                        marginTop: 30,
                        alignSelf:'center',
                        borderWidth:3,
                        borderColor: '#E7E7E7',
                        justifyContent:'center',
                    }} >
                        
                  
                            <Text style={{
                                fontSize: 18,
                                alignSelf:'center',
                                color: '#8A8F92'
                            }}>
                                OFO CASH BALANCE</Text>
                            <Text style={{ 
                                fontSize: 18,
                                alignSelf:'center',
                                color: '#8A8F92',
                                fontWeight:'bold'
                            }}>
                                Rp 0
                            </Text>
                    </View>
                    <View >
                        <Text style={{
                            fontSize:13,
                            alignSelf:'center',
                            marginTop:5,
                            color:'#A1A0A4'
                        }}>
                            OFO Cash Max. Balance Rp.10.000.000
                        </Text>
                    </View>
                </View>
                {/* ======================== */}
                <View 
                style={{
                    width: "100%",
                    height:500,
                    backgroundColor: "#F8F8F8"
                }} >
                    <Text style={{
                            fontSize:13,
                            alignSelf:'center',
                            marginTop:20,
                            marginBottom:13,
                            color: '#8A8F92'
                        }}>
                            Easier top up with these methods:
                        </Text>
                        {
                            listMethod.map((l, i) => (
                                <TouchableOpacity key={i}>
                                    <ListItem
                                        containerStyle={{
                                            height:70,
                                            width:'85%',
                                            marginTop:7,
                                            alignSelf:'center',
                                        }}
                                        leftAvatar={<Image source={l.icon} style={{width:25, height:25}}></Image>}
                                        title={l.name}
                                        bottomDivider
                                        chevron={{ color: '#8A8F92', size:20}}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                </View>
            </ScrollView>
        </>
    )
}

export default TopUpAnotherScreen;
