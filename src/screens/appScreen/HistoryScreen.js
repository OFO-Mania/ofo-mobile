import React, {useEffect, useState} from 'react';
import {Platform, Text, View, ScrollView, ActivityIndicator} from 'react-native';
import { Divider } from 'react-native-elements';
import styles from '../../styles/appScreen/StyleHeader';
import {useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {getTransactionHistory} from '../../services/TransactionAPI';
import {useLoading} from '../../core/hook';

const HistoryScreen = () => {
    const accessToken = useSelector(state => state.root.accessToken);
    const [transactions, setTransactions] = useState([]);
    const [loading, showLoading, hideLoading] = useLoading();

    const refreshTransactions = async () => {
        try {
            showLoading();
            const { data } = await getTransactionHistory(accessToken);
            setTransactions(data.transactions);
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    useEffect(() => {
        refreshTransactions().then();
    }, []);

    return (
        <>
            <View style={[styles.headerContainer, Platform.OS === 'ios' ? {
                alignItems: 'center'
            } : {
                alignItems: 'flex-start'
            }]}>
                <Text style={[styles.headerSmallText, Platform.OS === 'ios' ? {
                    marginLeft: 0,
                } : {
                    marginLeft: 20
                },{fontWeight:"100"}]}>
                    History
                </Text>
            </View>
            <ScrollView>
                {
                    loading ? <ActivityIndicator /> :
                        transactions.length === 0 ? <Text>You currently have no transactions.</Text> :
                    transactions.map((transaction, index) => (
                        <View key={index}>
                            <View style={{
                                width: "100%",
                                height: 25,
                                backgroundColor: "#EFF0F4",
                                justifyContent: 'center',
                            }}>
                                <Text
                                    style={{
                                        color: 'grey',
                                        marginLeft: 20,
                                    }}
                                >
                                    {new Date(transaction.created_at).getDate()
                                    + ' ' + new Date(transaction.created_at).getMonth()
                                    + ' ' + new Date(transaction.created_at).getFullYear()}
                                </Text>
                            </View>
                            <View style={{
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    marginTop:12,
                                    fontWeight:'bold',
                                    color:'#1F1B1B'
                                }}>{
                                    transaction.target_type === 'PAYMENT' ? 'Payment' : 'Transfer '
                                        // + (transaction.flow === 'INCOMING' ? 'from' : 'to')
                                }</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginRight: 20,
                                    marginTop:3
                                }}>
                                    <Text style={{color:'#7D7E81'}}>{
                                        transaction.target_type === 'PAYMENT' ? 'Payment' : 'Transfer '
                                        + (transaction.flow === 'INCOMING' ? 'In' : 'Out')
                                    }</Text>
                                    <Text style={{color:'#9BC062'}}>
                                        {(transaction.flow === 'INCOMING' ? '+' : '-') + 'Rp ' + transaction.amount}
                                    </Text>
                                </View>
                                <Divider style={{
                                    backgroundColor: '#E7E7E7',
                                    width: '95%',
                                    alignSelf: 'center',
                                    height:2,
                                    marginLeft:-20,
                                    marginTop:15
                                }} />
                            </View>
                        </View>
                    ))
                }
            </ScrollView>


        </>
    )
}

export default HistoryScreen;
