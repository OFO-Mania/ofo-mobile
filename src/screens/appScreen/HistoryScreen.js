import React from 'react';
import { Platform,Text, View, ScrollView, } from 'react-native';
import { Divider } from 'react-native-elements';
import styles from '../../styles/appScreen/StyleHeader';

const TopUpScreen = () => {
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
                <View>
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
                            21 NOV 2019
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
                        }}>Transfer To BELLA SINTYA DEWI</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginRight: 20,
                            marginTop:3
                        }}>
                            <Text style={{color:'#7D7E81'}}>Transfer In</Text>
                            <Text style={{color:'#9BC062'}}>
                                +Rp10.000
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
                    {/* =========== */}
                    <View style={{
                             marginLeft: 20
                        }}>
                        <Text style={{
                            fontSize: 16,
                            marginTop:12,
                            fontWeight:'bold',
                            color:'#1F1B1B'
                        }}>Transfer To BELLA SINTYA DEWI</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginRight: 20,
                            marginTop:3
                        }}>
                            <Text style={{color:'#7D7E81'}}>Transfer In</Text>
                            <Text style={{color:'#9BC062'}}>
                                +Rp10.000
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
            </ScrollView>


        </>
    )
}

export default TopUpScreen;
