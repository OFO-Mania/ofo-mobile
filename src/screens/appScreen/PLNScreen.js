import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Picker, TouchableOpacity, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import StylePLN from '../../styles/appScreen/StylePLN';
import RadioForm from 'react-native-simple-radio-button';
import { Input } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import Modal from "react-native-modal";

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
    const [prepaidPaymentType, setPrepaidPaymentType] = useState("CASH");
    const [totalPrepaid, setTotalPrepaid] = useState("0");
    const [showPrepaidModal, setShowPrepaidModal] = useState(false);

    //Postpaid
    const [customerID, setCustomerID] = useState("");
    const [postpaidPaymentType, setPostpaidPaymentType] = useState("CASH");
    const [totalPostpaid, setTotalPostpaid] = useState("0");
    const [bill, setBill] = useState ("32000")
    const [showPostpaidModal, setShowPostpaidModal] = useState(false);

    useEffect(() => {
        setTotalPrepaid(parseInt(amount) + 2000);
        setTotalPostpaid(parseInt(bill) + 2000);

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
                    style={StylePLN.imagePLN}
                    />
                <Text style={StylePLN.textPln}>PLN</Text>
            </View>
            <View style={StylePLN.containerRadioButton}>
                <RadioForm
                    style={StylePLN.radioButton}
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
                    <View style={StylePLN.prepaidView}>
                        <Input
                            label={meterNumber === "" ? "" : "Meter Number"}
                            labelStyle={StylePLN.labelMeterNumber} 
                            inputStyle={StylePLN.input}    
                            inputContainerStyle={StylePLN.borderInput}
                            placeholderTextColor="grey"
                            placeholder='Meter Number'
                            keyboardType="number-pad"
                            maxLength={20}
                            onChangeText={meter => setMeterNumber(meter)}
                            value={meterNumber}
                        />
                        <View style={StylePLN.pickerMenu}>
                            <Text style={StylePLN.labelPickerMenu}>Amount</Text>
                            <Picker
                                selectedValue={amount}
                                style={StylePLN.pickerStyle}
                                onValueChange={(itemValue, itemIndex) => setAmount(itemValue)
                                }>
                                <Picker.Item label="Rp 20.000" value="20000" />
                                <Picker.Item label="Rp 50.000" value="50000" />
                                <Picker.Item label="Rp 100.000" value="100000" />
                                <Picker.Item label="Rp 200.000" value="200000" />
                                <Picker.Item label="Rp 500.000" value="500000" />
                                <Picker.Item label="Rp 1.000.000" value="1000000" />
                                <Picker.Item label="Rp 5.000.000" value="5000000" />
                            </Picker>
                        </View>
                        <View style={StylePLN.pickerMenu}>
                            <Text style={StylePLN.labelPickerMenu}>Payment Method</Text>
                            <Picker
                                selectedValue={prepaidPaymentType}
                                itemStyle={{fontWeight:"bold", fontSize:10}}
                                style={StylePLN.pickerStyle}
                                onValueChange={(itemValue, itemIndex) => setPrepaidPaymentType(itemValue)
                                }>
                                <Picker.Item label="OFO Cash" value="CASH" />
                                <Picker.Item label="OFO Point" value="POINT" />
                            </Picker>
                        </View>
                        <View style={StylePLN.viewDetail}>
                            <Text style={{fontWeight:"bold", fontSize:18, marginBottom:2}}>Detail</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{opacity:0.4}}>PLN Voucher</Text>
                                <Text style={{opacity:0.4}}>Rp {amount}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{opacity:0.4}}>Transfer Fee</Text>
                                <Text style={{opacity:0.4}}>Rp 2000</Text>
                            </View>
                            <Divider style={{ backgroundColor: 'black', borderBottomWidth:1, opacity:0.1}} />
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{fontWeight:"bold"}}>Total</Text>
                                <Text style={{fontWeight:"bold"}}>Rp {totalPrepaid}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity 
                    onPress={() => setShowPrepaidModal(true)}
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
                                selectedValue={postpaidPaymentType}
                                itemStyle={{fontWeight:"bold", fontSize:10}}
                                style={{marginLeft:5,marginTop:30, marginBottom:-9}}
                                onValueChange={(itemValue, itemIndex) => setPostpaidPaymentType(itemValue)
                                }>
                                <Picker.Item label="OFO Cash" value="CASH" />
                                <Picker.Item label="OFO Point" value="POINT" />
                            </Picker>
                        </View>
                        <TouchableOpacity 
                        onPress={() => setShowPostpaidModal(true)}
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

            {/* Prepaid Modal PLN */}
            <View style={{ flex: 1 }}>
                <Modal isVisible={showPrepaidModal}>
                    <View style={StylePLN.containerModal}>
                    <Text style={{marginLeft:20 ,color:"#4D2A86", fontWeight:"bold", fontSize:20, marginTop:10}}>Payment Confirmation</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Customer ID</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>535515350238</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Meter Number</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>{meterNumber}</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Customer Name</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>PT MENTARI AGUNG MANDIRI</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Tariff / Power</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>R1/1300VA</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Payment Method</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>OFO Cash</Text>
                        <View style={{width:"85%", height:180,alignSelf:"center", marginTop:20}}>
                            <Text style={{fontWeight:"bold", fontSize:18, marginBottom:2}}>Detail</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{opacity:0.4}}>PLN Voucher</Text>
                                <Text style={{opacity:0.4}}>Rp {amount}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{opacity:0.4}}>Transfer Fee</Text>
                                <Text style={{opacity:0.4}}>Rp 2000</Text>
                            </View>
                            <Divider style={{ backgroundColor: 'black', borderBottomWidth:1, opacity:0.1}} />
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{fontWeight:"bold"}}>Total</Text>
                                <Text style={{fontWeight:"bold"}}>Rp {totalPrepaid}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={StylePLN.buttonConfirm}>
                            <Text style={StylePLN.textConfirm}>
                                Confirm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StylePLN.buttonCancel} onPress={() => setShowPrepaidModal(false)} >
                            <Text style={StylePLN.textCancel}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>

            {/* Postpaid Modal PLN */}
            <View style={{ flex: 1 }}>
                <Modal isVisible={showPostpaidModal}>
                    <View style={StylePLN.containerModal}>
                    <Text style={{marginLeft:20 ,color:"#4D2A86", fontWeight:"bold", fontSize:20, marginTop:10}}>Payment Confirmation</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Customer ID</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>535515350238</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Customer Name</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>PT MENTARI AGUNG MANDIRI</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Payment Period</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>November 2019</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Payment Method</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>OFO Cash</Text>
                        <View style={{width:"85%", height:180,alignSelf:"center", marginTop:20}}>
                            <Text style={{fontWeight:"bold", fontSize:18, marginBottom:2}}>Detail</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{opacity:0.4}}>Bill</Text>
                                <Text style={{opacity:0.4}}>Rp {bill}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{opacity:0.4}}>Transfer Fee</Text>
                                <Text style={{opacity:0.4}}>Rp 2000</Text>
                            </View>
                            <Divider style={{ backgroundColor: 'black', borderBottomWidth:1, opacity:0.1}} />
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{fontWeight:"bold"}}>Total</Text>
                                <Text style={{fontWeight:"bold"}}>Rp {totalPostpaid}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={StylePLN.buttonConfirm}>
                            <Text style={StylePLN.textConfirm}>
                                Confirm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StylePLN.buttonCancel} onPress={() => setShowPostpaidModal(false)} >
                            <Text style={StylePLN.textCancel}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default PLNScreen