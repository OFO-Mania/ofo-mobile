import React, { useState, useEffect } from 'react';
import { Platform, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import StylePLN from '../../styles/appScreen/StylePLN';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";

const TopUpScreen = (props) => {

    const [amount, setAmount] = useState("");
    const [checkButton, setCheckButton] = useState(true);
    const [topUpConfirmModal, setTopUpConfirmModal] = useState(false);
    const [topUpModal, setTopUpModal] = useState(false);

    const [status, setStatus] = useState(true)
    const [noRef, setNoRef] = useState("21000-20191122105123-315694-00000CIM-00000");
    const [message, setMessage] = useState("Top Up Success")

    useEffect(() => {
        if (amount === "") {
            setCheckButton(true);
        } else {
            setCheckButton(false);
        }

    },[amount]);

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
                        borderWidth: 0.2,
                        borderColor: 'grey',
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
                        <TouchableOpacity 
                        onPress={() => setAmount("100000")}
                        style={{
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
                        <TouchableOpacity 
                        onPress={() => setAmount("200000")}
                        style={{
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
                        <TouchableOpacity 
                        onPress={() => setAmount("500000")}
                        style={{
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
                            onChangeText={amount => setAmount(amount)}
                            value={amount}
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
                    <ScrollView horizontal > 
                    <TouchableOpacity style={{
                        flexDirection: 'column',
                        width: 300,
                        height: 150,
                        borderRadius: 12,
                        marginTop: 10,
                        marginLeft: 15,
                    }} >
                        <Image
                            source={require('../../assets/images/imagesHome/TopUp/DebitBCA.png')}
                            style={{ width: '100%', height:'100%'}}
                        />
                    </TouchableOpacity>
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
                    </ScrollView>
                    
                </View>
                <View style={{height:100}}/>
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
                <TouchableOpacity 
                onPress={() => setTopUpConfirmModal(true)}
                disabled={checkButton}
                style={{
                    width:'90%',
                    backgroundColor: amount === "" ? '#DEE0E2' : '#06B3BA',
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
            
            {/* Modal Confirm Top Up */}
            <View style={{ flex: 1 }}>
                <Modal isVisible={topUpConfirmModal}>
                <View style={[StylePLN.containerModal,{height:300}]}>
                    <Text style={{marginHorizontal:20 ,color:"#4D2A86", fontWeight:"bold", fontSize:20, marginTop:10}}>Top Up Confirmation</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Top Up From</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:17}}>BCA - One Click</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>To</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:17}}>OFO Cash</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Top Up Balance</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:17}}>{amount}</Text>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>  
                        <TouchableOpacity style={[StylePLN.buttonCancel,{marginTop:50, width:"45%"}]} onPress={() => setTopUpConfirmModal(false)}>
                            <Text style={StylePLN.textCancel}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[StylePLN.buttonConfirm,{marginTop:50, width:"45%", marginLeft:10}]} onPress={() => (setTopUpModal(true),setTopUpConfirmModal(false))}>
                            <Text style={StylePLN.textConfirm}>
                                Confirm
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
            </View>

            {/* Modal Result Top Up */}
            <View style={{ flex: 1 }}>
                <Modal isVisible={topUpModal}>
                    <View style={[StylePLN.containerModal,{height:400}]}>
                    <Text style={{marginHorizontal:20 ,color:"#4D2A86", fontWeight:"bold", fontSize:20, marginTop:10}}>Top Up Status</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Top Up Status</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:17, fontWeight:"bold", 
                        color: status ? "green" : "red" }}>
                        {status ? "Success" : "Failed"}
                    </Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Top Up From</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:17}}>Transfer From BANK BCA</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>No. Ref</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:17}}>
                        {status ? noRef : "-"}
                    </Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>To</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:17}}>OFO Cash</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Message</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontWeight:"100", fontSize:17}}>{message}</Text>
                        <TouchableOpacity style={[StylePLN.buttonConfirm,{marginTop:25}]} onPress={() => setTopUpModal(false)}>
                            <Text style={StylePLN.textConfirm}>
                                Okay
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default TopUpScreen;
