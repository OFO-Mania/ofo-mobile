import React, {useEffect, useState} from 'react';
import {
    Dimensions,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Platform,
    RefreshControl,
} from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import stylesHome from '../../styles/appScreen/StyleHome';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../../services/Profile';
import {acc} from 'react-native-reanimated';
import {authenticate} from '../../actions/user';
import Toast from 'react-native-simple-toast';
import {getDeals} from '../../services/DealAPI';

const HomeScreen = (props) => {

    const accessToken = useSelector(state => state.root.accessToken);
    const user = useSelector(state => state.user.authenticatedUser);
    const dispatch = useDispatch();

    const [carousel, setCarousel] = useState(null);
    const [deals, setDeals] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const refreshDeals = async () => {
        try {
            const { data } = await getDeals(accessToken);
            setDeals(data.deals);
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        }
    };

    const refreshProfile = async () => {
        try {
            const { data } = await getProfile(accessToken);
            dispatch(authenticate(data));
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await refreshProfile();
        await refreshDeals();
        setRefreshing(false);
    };

    const renderBanner = ({item, index}) => {
        return (
            <View style={{
                    alignSelf:"center",
                    height:140,
                    width:300,
                }}>
                <TouchableOpacity>
                    <Image
                        source={{ uri: item.image }}
                        style={stylesHome.imageBanner}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            <View style={[styles.headerContainer, Platform.OS === 'ios' ? {
                alignItems: 'center'
            } : {
                alignItems: 'flex-start'
            }]}>
                <Text style={[styles.headerText, Platform.OS === 'ios' ? {
                    marginLeft: 0,
                } : {
                    marginLeft: 20
                }]}>
                    OFO
                </Text>
            </View>
            <ScrollView
                style={stylesHome.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        style={{ backgroundColor: "#4D2A88" }}
                    />
                }
            >
                <ImageBackground
                    source={require('../../assets/images/imagesHome/bg-dashboard.png')}
                    style={{width:"100%", height:160}}
                >
                    <Text style={stylesHome.textOFO}>OFO Cash</Text>
                    <Text style={stylesHome.textRp}>Rp
                        <Text style={stylesHome.textCash}> {user.current_cash}</Text>
                    </Text>
                    <Text style={stylesHome.textOFOPoint}>
                        OFO Points <Text style={{color:"#FFB819"}}>{user.current_point}</Text>
                    </Text>
                </ImageBackground>
                <View style={stylesHome.containerBoxMenu}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('TopUpNavigation')}
                    >
                        <Image
                            source={require('../../assets/images/imagesHome/IconTopUp.png')}
                            style={stylesHome.buttonImageMenu}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('TransferNavigation')}
                    >
                        <Image
                            source={require('../../assets/images/imagesHome/IconTransfer.png')}
                            style={stylesHome.buttonImageMenu}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('History')}
                    >
                        <Image
                            source={require('../../assets/images/imagesHome/IconHistory.png')}
                            style={stylesHome.buttonImageMenu}
                            />
                    </TouchableOpacity>
                </View>
                <View style={stylesHome.containerBoxSubMenu}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("PLNScreen")}>
                        <Image
                            source={require('../../assets/images/imagesHome/IconPLN.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>PLN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesHome/IconPulsa.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Pulsa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesHome/IconPaketData.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesHome/IconPascaBayar.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Postpaid</Text>
                    </TouchableOpacity>
                </View>
                <View style={[stylesHome.containerBoxSubMenu,{marginTop:5}]}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesHome/IconBPJS.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>BPJS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesHome/IconTVKabel.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>TV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesHome/IconStreaming.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>HOOQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesHome/IconLainnya.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Other</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesHome.separator} />
                <View style={stylesHome.containerTextCashback}>
                    <Text style={stylesHome.textCashback}>Cashback News</Text>
                    <TouchableOpacity>
                        <Text style={stylesHome.textSeeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                <Carousel
                    ref={setCarousel}
                    data={deals}
                    renderItem={renderBanner}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width * 0.85}
                    onSnapToItem={setActiveSlide}
                    inactiveSlideScale={1}
                />
                <Pagination
                    dotsLength={deals.length}
                    activeDotIndex={activeSlide}
                    dotStyle={stylesHome.dotStyles}
                    inactiveDotStyle={stylesHome.dotInactiveStyles}
                    inactiveDotOpacity={0.2}
                    inactiveDotScale={1}
                />
                <View style={stylesHome.separator} />
                <Text style={stylesHome.titleBottomSection}>Interesting Things in OFO</Text>
                <Text style={stylesHome.descriptionBottomSection}>Update the app but haven't try these yet?</Text>
                <View style={stylesHome.containerCard}>
                    <View style={stylesHome.card}>
                        <Image source={require('../../assets/images/imagesHome/ImageHelp.png')}
                               style={stylesHome.imageCard}
                        />
                        <Text style={stylesHome.titleCard}>Help Center</Text>
                        <Text style={stylesHome.descriptionCard}>
                            Have any problems or questions related to OFO? You can send it here
                        </Text>
                        <Text style={[stylesHome.textBottomCard,{marginTop:10}]}>
                            OFO Help
                        </Text>
                    </View>
                    <View style={stylesHome.card}>
                        <Image source={require('../../assets/images/imagesHome/ImageInvest.png')}
                               style={stylesHome.imageCard}
                        />
                        <Text style={stylesHome.titleCard}>OFO Invest</Text>
                        <Text style={stylesHome.descriptionCard}>
                            It's time to start early investment, for a better future
                        </Text>
                        <Text style={[stylesHome.textBottomCard,{marginTop:24}]}>
                            Start Invest
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen;
