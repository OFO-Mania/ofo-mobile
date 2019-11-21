import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Picker, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import StylePLN from '../../styles/appScreen/StylePLN';
import RadioForm from 'react-native-simple-radio-button';
import { Input } from 'react-native-elements';
import { Divider } from 'react-native-elements';

var radio_props = [
    {label: 'Prepaid             ', value: 0 },
    {label: 'Postpaid', value: 1 }
];

const PLNScreen = (props) => {

    const [value, setValue] = useState(0);
    const [buttonPrepaid, setButtonPrepaid] = useState(true);
    const [buttonPostpaid, setButtonPostpaid] = useState(true);
    
    //Prepaid
    const [meterNumber, setMeterNumber] = useState("");
    const [amount, setAmount] = useState("20000");
    const [paymentType, setPaymentType] = useState("CASH");
    const [total, setTotal] = useState("0");

    //Postpaid
    const [customerID, setCustomerID] = useState("");

    useEffect(() => {
        setTotal(parseInt(amount) + 2000);
        console.log(meterNumber.length);
        if (meterNumber.length > 9) {
            setButtonPrepaid(false);
        } else {
            setButtonPrepaid(true);
        }

        if (customerID.length > 9) {
            setButtonPostpaid(false);
        } else {
            setButtonPostpaid(true);
        }

    },[amount, meterNumber, customerID]);

    return(
        <>
            <View style={StylePLN.headerPLN}>
                <Icon 
                    style={{marginLeft:20}} 
                    name='chevron-left' 
                    size={24} 
                    color='white' 
                    onPress={() => props.navigation.navigate("TabNavigation")}
                />
                <Text style={StylePLN.headerText}>PLN</Text>
            </View>
            <View style={StylePLN.headerPLN}>
                <Image 
                    source={require('../../assets/images/imagesPLN/PLN.png')}
                    style={{height:"70%", width:"11%", borderRadius:100, marginLeft:20}}
                    />
                <Text style={StylePLN.textPln}>PLN</Text>
            </View>
            <View style={StylePLN.containerRadioButton}>
                <RadioForm
                    style={{flexDirection:"row", marginRight:80}}
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {setValue(value)}}
                    buttonColor={'#06B3BA'}
                    animation={true}
                />
            </View>
            
            { value === 0 
            ? 
                /* PREPAID VIEW */
                <ScrollView>
                    <View style={{width:"90%", alignSelf:"center"}}>
                        <Input
                            label={meterNumber === "" ? "" : "Meter Number"}
                            labelStyle={{color:"black", fontWeight:"100", fontSize:14, opacity:0.5}} 
                            inputStyle={StylePLN.input}    
                            inputContainerStyle={StylePLN.borderInput}
                            placeholderTextColor="grey"
                            placeholder='Meter Number'
                            keyboardType="number-pad"
                            maxLength={20}
                            onChangeText={meter => setMeterNumber(meter)}
                            value={meterNumber}
                        />
                        <View style={{borderBottomColor:"#06B3BA", borderBottomWidth:3, borderColor:"white", width:"94%", alignSelf:"center"}}>
                            <Text style={{color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginBottom:-40, marginTop:20}}>Amount</Text>
                            <Picker
                                selectedValue={amount}
                                style={{marginLeft:5,marginTop:30, marginBottom:-9}}
                                onValueChange={(itemValue, itemIndex) => setAmount(itemValue)
                                }>
                                <Picker.Item label="Rp20.000" value="20000" />
                                <Picker.Item label="Rp50.000" value="50000" />
                                <Picker.Item label="Rp100.000" value="100000" />
                                <Picker.Item label="Rp200.000" value="200000" />
                                <Picker.Item label="Rp500.000" value="500000" />
                                <Picker.Item label="Rp1.000.000" value="1000000" />
                                <Picker.Item label="Rp5.000.000" value="5000000" />
                            </Picker>
                        </View>
                        <View style={{borderBottomColor:"#06B3BA", borderBottomWidth:3, borderColor:"white", width:"94%", alignSelf:"center"}}>
                            <Text style={{color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginBottom:-40, marginTop:20}}>Payment Method</Text>
                            <Picker
                                selectedValue={paymentType}
                                itemStyle={{fontWeight:"bold", fontSize:10}}
                                style={{marginLeft:5,marginTop:30, marginBottom:-9}}
                                onValueChange={(itemValue, itemIndex) => setPaymentType(itemValue)
                                }>
                                <Picker.Item label="OFO Cash" value="CASH" />
                                <Picker.Item label="OFO Point" value="POINT" />
                            </Picker>
                        </View>
                        <View style={{width:"95%", height:180, marginTop:20, alignSelf:"center", marginTop:30}}>
                            <Text style={{fontWeight:"bold", fontSize:18, marginBottom:2}}>Detail</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{opacity:0.4}}>PLN Voucher</Text>
                                <Text style={{opacity:0.4}}>Rp.{amount}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{opacity:0.4}}>Transfer Fee</Text>
                                <Text style={{opacity:0.4}}>Rp.2000</Text>
                            </View>
                            <Divider style={{ backgroundColor: 'black', borderBottomWidth:1, opacity:0.1}} />
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{fontWeight:"bold"}}>Total</Text>
                                <Text style={{fontWeight:"bold"}}>Rp.{total}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity 
                    disabled={buttonPrepaid}
                    style={{
                        alignSelf:"center",
                        width:"80%", 
                        height:40, 
                        backgroundColor:"#06B3BA", 
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:20,
                        marginTop:-10,
                        opacity: buttonPrepaid === true ? 0.3 : 1
                        }}>
                        <Text style={{color:"white", fontWeight:"bold", fontSize:18}}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            :
                /* POSTPAID VIEW */
                <ScrollView>
                    <View style={{width:"90%", alignSelf:"center"}}>
                        <Input
                            label={customerID === "" ? "" : "Customer ID"}
                            labelStyle={{color:"black", fontWeight:"100", fontSize:14, opacity:0.5}} 
                            inputStyle={StylePLN.input}    
                            inputContainerStyle={StylePLN.borderInput}
                            placeholderTextColor="grey"
                            placeholder='Customer ID'
                            keyboardType="number-pad"
                            maxLength={20}
                            onChangeText={ID => setCustomerID(ID)}
                            value={customerID}
                        />
                        <View style={{borderBottomColor:"#06B3BA", borderBottomWidth:3, borderColor:"white", width:"94%", alignSelf:"center"}}>
                            <Text style={{color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginBottom:-40, marginTop:20}}>Payment Method</Text>
                            <Picker
                                selectedValue={paymentType}
                                itemStyle={{fontWeight:"bold", fontSize:10}}
                                style={{marginLeft:5,marginTop:30, marginBottom:-9}}
                                onValueChange={(itemValue, itemIndex) => setPaymentType(itemValue)
                                }>
                                <Picker.Item label="OFO Cash" value="CASH" />
                                <Picker.Item label="OFO Point" value="POINT" />
                            </Picker>
                        </View>
                        <TouchableOpacity 
                        disabled={buttonPostpaid}
                        style={{
                            alignSelf:"center",
                            width:"90%", 
                            height:40, 
                            backgroundColor:"#06B3BA", 
                            alignItems:"center",
                            justifyContent:"center",
                            borderRadius:20,
                            marginTop:273,
                            opacity: buttonPostpaid === true ? 0.3 : 1
                        }}>
                        <Text style={{color:"white", fontWeight:"bold", fontSize:18}}>
                            Next
                        </Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            }
        </>
    )
}

export default PLNScreen