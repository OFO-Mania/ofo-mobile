import React from 'react';
import { Platform, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import { ListItem, Divider } from 'react-native-elements';


const TransferNew = () => {
    const listMethod = [
        {
            name: 'Debit Card',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/DebitCard.png'),
            bank: 'OFO - 123456789'
        },
        {
            name: 'ATM',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/x.png'),
            bank: 'OFO - 123456789'

        },
        {
            name: 'Internet/Mobile Banking',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/InternetBanking.png'),
            bank: 'OFO - 123456789'

        },
        {
            name: 'Merchant',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/Merchant.png'),
            bank: 'OFO - 123456789'

        },
        {
            name: 'OFO Booth',
            icon: require('../../assets/images/imagesHome/TopUp/AnotherMethod/OFOBooth.png'),
            bank: 'OFO - 123456789'

        },
    ]
    return (
        <>
            <ScrollView>
                <View style={{
                    flex:1,
                    backgroundColor: "#F8F8F8"
                }}>
                    <ListItem
                        containerStyle={{
                            height: 80,
                            width: '90%',
                            marginTop: 30,
                            alignSelf: 'center',
                        }}
                        leftAvatar={<Image source={require('../../assets/images/imagesHome/Transfer/IconToOFO.png')} style={{ width: 25, height: 25 }}></Image>}
                        title='OFO to OFO'
                        chevron={{ color: '#8A8F92', size: 20 }}
                    />
                    <ListItem
                        containerStyle={{
                            height: 80,
                            width: '90%',
                            marginTop: 15,
                            alignSelf: 'center',
                            marginBottom:30,
                        }}
                        leftAvatar={<Image source={require('../../assets/images/imagesHome/Transfer/IconToBank.png')} style={{ width: 25, height: 25 }}></Image>}
                        title='To Bank Account'
                        chevron={{ color: '#8A8F92', size: 20 }}
                    />
                </View>
                <View>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'bold',
                        marginLeft:30,
                        marginTop:30
                    }}>
                        Last Transaction
                    </Text>
                    {
                            listMethod.map((l, i) => (
                                <TouchableOpacity key={i}>
                                    <ListItem
                                        containerStyle={{
                                            height:70,
                                            width:'90%',
                                            marginTop:7,
                                            alignSelf:'center',
                                        }}
                                        leftAvatar={<Image source={l.icon} style={{width:25, height:25}}></Image>}
                                        title={l.name}
                                        subtitle={l.bank}
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

export default TransferNew;
