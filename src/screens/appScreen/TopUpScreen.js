import React from 'react';
import { Platform, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';


const TopUpScreen = () => {
    return (
        <>
            <ScrollView>
                <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 150
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginLeft: 15,
                        marginTop: 20
                    }}>
                        Top Up to
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        width: '93%',
                        alignSelf:'center',
                        height: 75,
                        borderRadius: 12,
                        marginTop: 10,
                        // marginLeft: 15,
                        borderWidth: 0.2,
                        borderColor: 'grey',
                        shadowColor: 'black',
                        shadowRadius: 20,
                        shadowOpacity: 1,
                        shadowOffset: 5,
                    }} >
                        <View style={{
                            backgroundColor:'#4D2A86',
                            width:45,
                            height:27,
                            borderRadius:5,
                            alignItems:'center',
                            justifyContent:'center',
                            alignSelf:'center',
                            marginLeft:10,
                        }}>
                            <Text style={{
                                color:'white',
                                fontSize:16,
                                fontWeight:'bold'
                            }}>
                                OFO
                            </Text>
                        </View>
                        <View style={{
                            marginLeft: 15,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                                marginBottom: 5
                            }}>
                                OFO Cash</Text>
                            <Text style={{ fontSize: 14 }}>Balance Rp0</Text>
                        </View>
                    </View>
                </View>
                {/* ======================== */}
                <View style={{
                    width: "100%",
                    height: 10,
                    backgroundColor: "#F8F8F8"
                }} />
                {/* ======================== */}
                <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 210
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginLeft: 15,
                        marginTop: 20
                    }}>
                        Choose Top Up Amount
                    </Text>
                    <ScrollView
                        horizontal
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            height: 50
                        }} >
                        <TouchableOpacity style={{
                            borderWidth: 0.2,
                            borderRadius: 30,
                            borderColor: 'grey',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // paddingVertical: 15,
                            paddingHorizontal: 20,
                            height:45,
                            marginLeft: 15
                        }}>
                            <Text >
                                Rp100.000
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderWidth: 0.2,
                            borderRadius: 30,
                            borderColor: 'grey',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // paddingVertical: 15,
                            paddingHorizontal: 20,
                            height:45,
                            marginLeft: 15
                        }}>
                            <Text >
                                Rp200.000
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderWidth: 0.2,
                            borderRadius: 30,
                            borderColor: 'grey',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // paddingVertical: 15,
                            paddingHorizontal: 20,
                            height:45,
                            marginLeft: 15

                        }}>
                            <Text >
                                Rp500.000
                                </Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <View>
                        <Text style={{
                            marginTop: -90,
                            marginLeft: 15,
                            color: 'grey'
                        }}>
                            Or enter your amount here
                        </Text>
                        <TextInput
                            placeholder='Minimum Rp10.000'
                            keyboardType='number-pad'
                            
                            style={{
                                backgroundColor: '#F4F4F4',
                                width: '93%',
                                height: 45,
                                borderRadius: 5,
                                alignSelf:'center',
                                marginTop:7,
                                paddingHorizontal:12
                            }}>
                        </TextInput>
                    </View>
                </View>
                {/* =============================== */}
                <View style={{
                    width: "100%",
                    height: 10,
                    backgroundColor: "#F8F8F8"
                }} />
                {/* =============================== */}
                <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 220
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginLeft: 15,
                        marginTop: 20
                    }}>
                        Debit Card
                    </Text>
                    <TouchableOpacity style={{
                        flexDirection: 'column',
                        width: 300,
                        height: 150,
                        borderRadius: 12,
                        marginTop: 10,
                        marginLeft: 15,
                        borderWidth: 2,
                        borderColor: '#06B3BA',
                        backgroundColor:'#F4F4F4',
                        alignItems:'center',
                        justifyContent:'center'
                    }} >
                        <Image
                            source={require('../../assets/images/imagesHome/TopUp/IconDebit.png')}
                            style={{ width: 30, height: 30, alignSelf: 'center'}}
                        />
                        <View style={{
                            alignSelf: 'center'
                        }}>
                            <Text style={{ fontSize: 14, color:'grey' }}>Add BCA Debit Card</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                </ScrollView>
                <View style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: 70,
                    justifyContent:'center',
                    position:'absolute',
                    bottom:0,
                    borderTopColor:'grey',
                    borderTopWidth:0.5,
                }}>
                    <TouchableOpacity style={{
                        width:'90%',
                        backgroundColor: '#DEE0E2',
                        alignItems:'center',
                        alignContent:'center',
                        height:45,
                        alignSelf:'center',
                        borderRadius:20,
                        justifyContent:'center'

                    }}>
                        <Text style={{
                            fontSize:20,
                            fontWeight:'bold',
                            color:'white'
                            
                        }}>
                            Top Up Now
                        </Text>
                    </TouchableOpacity>
                </View>
              
        </>
    )
}

export default TopUpScreen;
