import React, { useState, useEffect } from 'react';
import {View, Text, Image, ScrollView, Picker, TouchableOpacity, Button, ActivityIndicator} from 'react-native';
import { Input } from 'react-native-elements';
import styles from '../../styles/appScreen/StyleHeader';
import StylePLN from '../../styles/appScreen/StylePLN';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import { Divider } from 'react-native-elements';
import Toast from 'react-native-simple-toast';
import {
    confirmTransferToBank,
    confirmTransferToUser,
    inquiryTransferToBank,
    inquiryTransferToUser,
} from '../../services/TransactionAPI';
import {authenticate} from '../../actions/user';
import {useDispatch, useSelector} from 'react-redux';
import {useLoading} from '../../core/hook';

const TransferToBankAccountScreen = (props) => {
    const accessToken = useSelector(state => state.root.accessToken);
    const user = useSelector(state => state.user.authenticatedUser);
    const [loading, setLoading, hideLoading] = useLoading();
    const dispatch = useDispatch();

    const [checkButton, setCheckButton] = useState(true);
    const [accountNumber, setAccountNumber] = useState("");
    const [message, setMessage] = useState("");
    const [balance, setBalance] = useState("");
    const [transferModal, setTransferModal] = useState(false);
    const [totalTransfer, setTotalTransfer] = useState("");

    //Receiver Transfer
    const [receiverName, setReceiverName] = useState("");
    const [receiverBank, setReceiverBank] = useState('');
    const [receiverAccount, setReceiverAccount] = useState("");
    const [bankAccountID, setBankAccountID] = useState('');

    const doInquiryTransfer = async () => {
        if (parseInt(balance) < 10000) {
            Toast.showWithGravity('Minimal transfer amount is Rp 10.000.', Toast.LONG, Toast.TOP);
            return;
        }
        try {
            setLoading();
            const { data } = await inquiryTransferToBank(accessToken, accountNumber);
            setReceiverName(data.bankAccount.name);
            setReceiverAccount(data.bankAccount.account_number);
            setReceiverBank(data.bankAccount.bank);
            setBankAccountID(data.bankAccount.bank_account_id);
            setTransferModal(true);
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    const doConfirmTransfer = async () => {
        try {
            setLoading();
            const { data } = await confirmTransferToBank(accessToken, bankAccountID, totalTransfer, message);
            setTransferModal(false);
            Toast.showWithGravity('Transfer successful.', Toast.LONG, Toast.TOP);
            dispatch(authenticate(data.user));
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    useEffect(() => {
        setTotalTransfer(parseInt(balance) + 2000);

        if (accountNumber !== "" && balance !== "") {
            setCheckButton(false);
        } else {
            setCheckButton(true);
        }

    },[balance, accountNumber]);

    return(
        <>
            <View style={{
                    height:56,
                    width:"100%",
                    backgroundColor:"#4D2A86",
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                <Icon
                    style={{marginLeft:20}}
                    name='chevron-left'
                    size={24}
                    color='white'
                    onPress={() => props.navigation.navigate("TransferNavigation")}
                />
                <Text style={styles.headerSmallText}>
                    TO BANK ACCOUNT
                </Text>
            </View>
            <ScrollView>
                {/* =============== */}
                <View style={{
                    height:100,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <Input
                        editable={!loading}
                        label={accountNumber === "" ? "" : "Enter Account Number"}
                        labelStyle={{marginLeft:15,color:"black", marginTop:10, fontWeight:"100", fontSize:14}}
                        inputStyle={{width:10, marginBottom:-10}}
                        inputContainerStyle={{width:'87%', alignSelf:'center', marginTop:-10}}
                        placeholderTextColor="grey"
                        placeholder='Enter Account Number'
                        keyboardType="number-pad"
                        maxLength={40}
                        onChangeText={number => setAccountNumber(number)}
                        value={accountNumber}
                    />
                </View>
                {/* ===================== */}
                <View style={{
                        backgroundColor: 'white',
                        width: '100%',
                        height: 150
                    }}>
                        <Text style={{
                            fontSize: 14,
                            marginLeft: 27,
                            marginTop: 20
                        }}>
                            Wallet Type
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            width: '87%',
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
                                marginLeft:15,
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
                                <Text style={{ fontSize: 14 }}>Balance Rp {user.current_cash}</Text>
                            </View>
                        </View>
                    </View>
                    {/* ==================== */}
                    <View>
                        <View style={{
                            width:'87%',
                            height:140,
                            backgroundColor:'#F8F8F8',
                            alignSelf:'center',
                            borderRadius:5
                        }}>
                            <Text style={{
                                color:'#9BA27A',
                                marginHorizontal:15,
                                marginTop:25,
                            }}>
                                Transfer Balance
                            </Text>
                            <View style={{flexDirection:"row", marginTop:10}}>
                                <Text style={{fontSize:30, marginLeft:15, marginRight:-20,}}>
                                    Rp
                                </Text>
                                <Input
                                    editable={!loading}
                                    inputStyle={{marginBottom:-10, fontSize:25, marginTop:-5}}
                                    inputContainerStyle={{width:'70%', alignSelf:'center', marginLeft:-50, borderBottomColor:"#F8F8F8"}}
                                    placeholderTextColor="black"
                                    placeholder='0'
                                    keyboardType="number-pad"
                                    maxLength={12}
                                    onChangeText={balance => setBalance(balance)}
                                    value={balance}
                                />
                            </View>
                        </View>
                    </View>
                    {/* ================ */}
                    <View style={{
                            height:100,
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                    <Input
                        label={message === "" ? "" : "Message (Optional)"}
                        labelStyle={{marginLeft:15,color:"black", marginTop:10, fontWeight:"100", fontSize:14}}
                        inputStyle={{width:10, marginBottom:-10}}
                        inputContainerStyle={{width:'87%', alignSelf:'center', marginTop:-10}}
                        placeholderTextColor="grey"
                        placeholder='Message (Optional)'
                        onChangeText={message => setMessage(message)}
                        value={message}
                    />
                </View>
                {/* ================= */}
                <View style={{opacity: checkButton ? 0.3 : 1 }}>
                    <TouchableOpacity
                        disabled={loading}
                    onPress={doInquiryTransfer}
                    style={{
                        backgroundColor:'#06B3BA',
                        borderRadius:25,
                        width:'87%',
                        alignSelf:'center',
                        height:45,
                        justifyContent:'center',
                        marginTop:30
                    }}>
                        {
                            loading ? <ActivityIndicator color='white' /> : <Text style={{
                                color:'white',
                                alignSelf:'center',
                                fontWeight:'bold',
                                fontSize:20
                            }}>
                                NEXT
                            </Text>
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Modal Confirm Transfer */}
            <View style={{ flex: 1 }}>
                <Modal isVisible={transferModal}>
                    <View style={StylePLN.containerModal}>
                    <Text style={{marginLeft:20 ,color:"#4D2A86", fontWeight:"bold", fontSize:20, marginTop:10}}>Transfer Confirmation</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Receiver Name</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>{receiverName}</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Receiver Bank</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>{receiverBank}</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Receiver Bank Account</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>{receiverAccount}</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Payment Method</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>OFO Cash</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:14, opacity:0.5, marginTop:10}}>Message (Optional)</Text>
                    <Text style={{marginLeft:20 ,color:"black", fontWeight:"100", fontSize:17}}>
                        {message === "" ? "-" : message}
                    </Text>
                        <View style={{width:"85%", height:180,alignSelf:"center", marginTop:20}}>
                            <Text style={{fontWeight:"bold", fontSize:18, marginBottom:2}}>Detail</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{opacity:0.4}}>Transfer Balance</Text>
                                <Text style={{opacity:0.4}}>Rp.{balance}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{opacity:0.4}}>Transfer Fee</Text>
                                <Text style={{opacity:0.4}}>Rp.2000</Text>
                            </View>
                            <Divider style={{ backgroundColor: 'black', borderBottomWidth:1, opacity:0.1}} />
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={{fontWeight:"bold"}}>Total</Text>
                                <Text style={{fontWeight:"bold"}}>Rp.{totalTransfer}</Text>
                            </View>
                        </View>
                        <TouchableOpacity disabled={loading} style={StylePLN.buttonConfirm} onPress={doConfirmTransfer}>
                            {
                                loading ? <ActivityIndicator color="white" /> : <Text style={StylePLN.textConfirm}>
                                    Confirm
                                </Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity disabled={loading} style={StylePLN.buttonCancel} onPress={() => setTransferModal(false)} >
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

export default TransferToBankAccountScreen;
