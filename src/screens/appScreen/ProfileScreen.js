import React, { useState } from 'react';
import {
    Platform,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ImageBackground,
    ActivityIndicator,
} from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import stylesProfile from '../../styles/appScreen/StyleProfile';
import { ListItem } from 'react-native-elements'
import {useDispatch, useSelector} from 'react-redux';
import {deauthenticate} from '../../actions/user';
import {setAccessToken} from '../../actions';
import AsyncStorage from '@react-native-community/async-storage';
import {signOut} from '../../services/AuthenticationAPI';
import Toast from 'react-native-simple-toast';
import {useLoading} from '../../core/hook';

const ProfileScreen = ({navigation}) => {
    const accessToken = useSelector(state => state.root.accessToken);
    const user = useSelector(state => state.user.authenticatedUser);
    const [loading, showLoading, hideLoading] = useLoading();
    const dispatch = useDispatch();

    const onSignOut = async () => {
        try {
            showLoading();
            if (accessToken !== null) {
                const deviceID = await AsyncStorage.getItem('openSignalDeviceID');
                const response = await signOut(accessToken, deviceID, Platform.OS.toUpperCase());
                Toast.showWithGravity(response.message, Toast.LONG, Toast.TOP);
            }
            dispatch(setAccessToken(null));
            dispatch(deauthenticate());
            navigation.navigate('SignIn');
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    const listMenuAccount = [
        {
            menu: 'Change Profile',
            icon: require('../../assets/images/imagesProfile/IconChangeProfil.png')
        },
        {
            menu: 'My Cards',
            icon: require('../../assets/images/imagesProfile/IconMyCards.png')
        },
        {
            menu: 'Promo Code',
            icon: require('../../assets/images/imagesProfile/IconPromo.png')
        },
    ]

    const listMenuAbout = [
        {
            menu: 'Benefits of using OFO',
            icon: require('../../assets/images/imagesProfile/IconBenefitOFO.png')
        },
        {
            menu: 'OFO Guide',
            icon: require('../../assets/images/imagesProfile/IconGuideOFO.png')
        },
        {
            menu: 'Privacy Policy',
            icon: require('../../assets/images/imagesProfile/IconPrivacyPolicy.png')
        },
        {
            menu: 'Help Center',
            icon: require('../../assets/images/imagesProfile/IconHelpCenter.png')
        },
    ]

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
                }]}>
                    Profile
                </Text>
            </View>
            <ScrollView>
                <View style={stylesProfile.containerHeaderProfile}>
                    <View style={stylesProfile.containerDataProfile}>
                        <View style={stylesProfile.containerFullname}>
                            <Image
                                source={user.image ? { uri: user.image } : require('../../assets/images/imagesTabNav/IconProfile.png')}
                                style={stylesProfile.imageProfile}/>
                        </View>
                        <View style={stylesProfile.containerPhoneNumber}>
                            <Text style={stylesProfile.fullname}>
                                {user.full_name}
                            </Text>
                            <Text style={stylesProfile.phoneNumber}>
                                {user.phone_number}
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <ListItem
                        containerStyle={{backgroundColor:"#4D2A86"}}
                        leftAvatar={{ source: require('../../assets/images/imagesProfile/IconOFOPremier.png'), width:30, height:30}}
                        title="OFO Premier"
                        rightSubtitle="Details"
                        rightSubtitleStyle={{color:"white", fontWeight:"bold"}}
                        titleStyle={{fontSize:15, color:"white", fontWeight:"bold"}}
                        topDivider
                        chevron={{ color: 'white', size:20}}
                    />
                </TouchableOpacity>
                <View style={stylesProfile.containerHeaderSection}>
                    <Text style={stylesProfile.textHeaderSection}>
                        OFO ID
                    </Text>
                </View>
                <View style={stylesProfile.containerCodeOFO}>
                    <TouchableOpacity style={stylesProfile.containerButtonCode}>
                        <ImageBackground
                            source={require('../../assets/images/imagesProfile/QRCode.png')}
                            style={stylesProfile.imageCode}
                            >
                            <Text style={stylesProfile.textCode}>QR Code</Text>
                            <Text style={stylesProfile.textSubCode}>To transfer to fellow OFO</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={stylesProfile.containerButtonCode}>
                        <ImageBackground
                            source={require('../../assets/images/imagesProfile/Barcode.png')}
                            style={stylesProfile.imageCode}
                            >
                            <Text style={stylesProfile.textCode}>Barcode</Text>
                            <Text style={stylesProfile.textSubCode}>To trade at OFO merchants</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={stylesProfile.containerHeaderSection}>
                    <Text style={stylesProfile.textHeaderSection}>
                        Account
                    </Text>
                </View>
                <View>
                {
                    listMenuAccount.map((l, i) => (
                        <TouchableOpacity key={i} onPress={() => l.menu === "Change Profile" ? navigation.navigate("EditProfile") : navigation.navigate("")}>
                            <ListItem
                                containerStyle={{height:55}}
                                leftAvatar={<Image source={l.icon} style={{width:25, height:25}}></Image>}
                                title={l.menu}
                                bottomDivider
                                chevron={{ color: 'black', size:20}}
                            />
                        </TouchableOpacity>
                    ))
                }
                </View>
                <View style={stylesProfile.containerHeaderSection}>
                    <Text style={stylesProfile.textHeaderSection}>
                        Security
                    </Text>
                </View>
                <TouchableOpacity>
                    <ListItem
                        containerStyle={{height:55}}
                        leftAvatar={<Image source={require('../../assets/images/imagesProfile/IconChangeSecurityCode.png')} style={{width:25, height:25}}></Image>}
                        title="Change Security Code"
                        bottomDivider
                        chevron={{ color: 'black', size:20}}
                        />
                </TouchableOpacity>
                <View style={stylesProfile.containerHeaderSection}>
                    <Text style={stylesProfile.textHeaderSection}>
                        About
                    </Text>
                </View>
                <View>
                {
                    listMenuAbout.map((l, i) => (
                        <TouchableOpacity key={i}>
                            <ListItem
                                containerStyle={{height:55}}
                                leftAvatar={<Image source={l.icon} style={{width:25, height:25}}></Image>}
                                title={l.menu}
                                bottomDivider
                                chevron={{ color: 'black', size:20}}
                            />
                        </TouchableOpacity>
                    ))
                }
                </View>
                <View style={[stylesProfile.containerHeaderSection,{height:150}]}>
                    <Text style={stylesProfile.footerText}>Version 3.0.0 (245)</Text>
                    <Text style={stylesProfile.footerText}>#DontUseDANAIN</Text>
                    <Text style={stylesProfile.footerText}>#DontUseLinkWae</Text>
                    <Text style={[stylesProfile.footerText, {marginBottom:20}]}>#JustUseOFO!</Text>
                    <TouchableOpacity style={stylesProfile.buttonSignOut} onPress={onSignOut}>
                        {
                            loading ? <ActivityIndicator color="#06B3BA" /> : <Text style={stylesProfile.textSignOut}>
                                Sign Out
                            </Text>
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* Sign Out Modal */}
            <View style={{ flex: 1 }}>
                <Modal isVisible={SignOutModal}>
                <View style={[StylePLN.containerModal,{height:250}]}>
                    <Text style={{marginHorizontal:20 ,color:"#4D2A86", fontWeight:"bold", fontSize:20, marginTop:20}}>Sign Out?</Text>
                    <Text style={{marginHorizontal:20 ,color:"black", fontSize:16, marginTop:15}}>Are you sure want to Sign Out?</Text>
                    <View style={{flexDirection:'column', justifyContent:"center", marginTop:-10}}>
                        <TouchableOpacity style={[StylePLN.buttonConfirm,{marginTop:50, width:"90%",height:45, borderRadius:30}]} onPress={() => props.navigation.navigate('Auth')}>
                            <Text style={StylePLN.textConfirm}>
                                OKE
                            </Text>
                        </TouchableOpacity>  
                        <TouchableOpacity style={[StylePLN.buttonCancel,{marginTop:20, width:"90%", height:45, borderRadius:30,borderColor:'white'}]} onPress={() => setSignOutModal(false)}>
                            <Text style={StylePLN.textCancel}>
                                CANCEL
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default ProfileScreen;
