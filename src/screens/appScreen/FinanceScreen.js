import React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import stylesFinance from '../../styles/appScreen/StyleFinance';

const FinanceScreen = () => {
    return (
        <>
            <View style={[styles.headerContainer, Platform.OS === 'ios' ? {
                alignItems: 'center'
            } : {
                alignItems: "flex-start"
            }]}>
                <Text style={[styles.headerSmallText, Platform.OS === 'ios' ? {
                    marginLeft: 0,
                } : {
                    marginLeft: 20
                }]}>
                    Finance
                </Text>
            </View>
            <View style={stylesFinance.container}>
                <View style={stylesFinance.investContainer}>
                    <ImageBackground
                        source={require('../../assets/images/imageFinance/ImageOFOInvest.png')}
                        style={stylesFinance.imageInvest}
                        imageStyle={{borderRadius:5}}
                    >
                        <View>
                            <Text style={stylesFinance.textOFO}>
                                OFO Invest (Beta)
                            </Text>
                        </View>
                        <View style={stylesFinance.textDiscription}>
                            <Text style={{
                                color:'white',
                                fontSize:14
                            }}>
                                Get more than 7% ppa.{'     '}
                                Minimum investment of Rp 10.000.
                                Withdraw anytime, {'       '}free of charge!
                            </Text>
                            <TouchableOpacity style={stylesFinance.buttonStart}>
                                <Text style={stylesFinance.textButton}>
                                    START
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={stylesFinance.budgetContainer}>
                    <ImageBackground
                        source={require('../../assets/images/imageFinance/ImageBudget.png')}
                        style={stylesFinance.imageBudget}
                        imageStyle={{borderRadius:5}}
                    >
                        <View style={stylesFinance.textDiscriptionBudget}>
                            <Text style={stylesFinance.yourText}>
                                Your Budget Category
                            </Text>
                            <Text style={stylesFinance.duaBelas}>
                                <Text style={stylesFinance.satu}>1</Text>
                                    /12
                                </Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={stylesFinance.bigest}>
                                Biggest Expense {' '}
                            </Text>
                            <Image
                                    source={require('../../assets/images/imageFinance/IconBigestExpense.png')}
                                    style={stylesFinance.imageBigest}
                                />
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </>
    )
}

export default FinanceScreen;
