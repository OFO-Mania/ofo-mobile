import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    Dimensions,
    Platform,
    RefreshControl,
} from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import stylesDeals from '../../styles/appScreen/StyleDeals';
import stylesHome from '../../styles/appScreen/StyleHome';
import Carousel from 'react-native-snap-carousel';

const DealsScreen = (props) => {

    const [carousel, setCarousel] = useState(null);
    const [bannerList, setBannerList] = useState([
        { deals: require('../../assets/images/imagesDeals/Cashback1.jpg') , ID: 1},
        { deals: require('../../assets/images/imagesDeals/Cashback2.jpg') , ID: 2},
        { deals: require('../../assets/images/imagesDeals/Cashback3.jpg') , ID: 3},
        { deals: require('../../assets/images/imagesDeals/Cashback4.jpg') , ID: 4},
        { deals: require('../../assets/images/imagesDeals/Cashback5.jpg') , ID: 5},
    ]);
    const [happinessList, sethappinessList] = useState([
        { deals: require('../../assets/images/imagesDeals/Happiness1.jpg'), title:"A Placefull Place to Relax!", desc:"Pondok Sari Hotel", voucher:"5", price:"Rp 500.000" },
        { deals: require('../../assets/images/imagesDeals/Happiness2.jpg'), title:"Chew Chew Boba!", desc:"Fook Yew", voucher:"344", price:"Rp 30.000" },
        { deals: require('../../assets/images/imagesDeals/Happiness3.jpg'), title:"Donate for education", desc:"YPH Papua", voucher:"1871", price:"Rp 25.000" },
        { deals: require('../../assets/images/imagesDeals/Happiness4.jpg'), title:"Save Meong & Guguk", desc:"YAYASAN BENIH BAIK INDO", voucher:"44867", price:"Rp 10.000" },
        { deals: require('../../assets/images/imagesDeals/Happiness5.jpg'), title:"What's Your Color?", desc:"iEye", voucher:"232", price:"Rp 350.000" },
        { deals: require('../../assets/images/imagesDeals/Happiness6.jpg'), title:"Triple Yummy", desc:"Yoshinoya", voucher:"8818", price:"Rp 100.000" }
    ]);
    const [favoriteList, setFavoriteList] = useState([
        { deals: require('../../assets/images/imagesDeals/Favorite1.jpg'), title:"Ice Cream Value Scoop", desc:"Baskin Robbins", voucher:"197", price:"Rp 70.000" },
        { deals: require('../../assets/images/imagesDeals/Favorite2.jpg'), title:"Voucher Rp100.000", desc:"Imperial Kitchen & Dimsum", voucher:"172", price:"Rp 85.000" },
        { deals: require('../../assets/images/imagesDeals/Favorite3.jpg'), title:"1 Ebi Mentai Mayo Udon + 1oc Tea", desc:"Marugame Udon", voucher:"254", price:"Rp 39.000" },
        { deals: require('../../assets/images/imagesDeals/Favorite4.jpg'), title:"Ice milk boba palm sugar", desc:"Kopi Kenangan", voucher:"134", price:"Rp 58.000" },
        { deals: require('../../assets/images/imagesDeals/Favorite5.jpg'), title:"Wendy's Beef Burger + Waffle", desc:"Wendy's", voucher:"113", price:"Rp 45.000" },
        { deals: require('../../assets/images/imagesDeals/Favorite6.jpg'), title:"Three breads of various kinds", desc:"BreadLife", voucher:"166", price:"Rp 29.000" },
        { deals: require('../../assets/images/imagesDeals/Favorite7.jpg'), title:"Buy 1 Get 1 Soft Serve", desc:"Godiva", voucher:"200", price:"Rp 84.000" },
        { deals: require('../../assets/images/imagesDeals/Favorite8.jpg'), title:"Buy 1 Get 1 Dreamy Matcha", desc:"Shu Shu", voucher:"192", price:"Rp 29.000" }
    ]);
    const [activeDealsSlide, setActiveDealsSlide] = useState(0);
    const [activeHappinessSlide, setActiveHappinessSlide] = useState(0);
    const [activeFavoriteSlide, setActiveFavoriteSlide] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        const timeout = setTimeout(() => {
            setRefreshing(false);
            clearTimeout(timeout);
        }, 3000);
    };

    //Banner Deals
    const renderBannerDeals = ({item, index}) => {
        return (
            <View style={stylesDeals.containerBannerDeals}>
                <TouchableOpacity onPress={() => props.navigation.navigate("DealsDetails")}>
                    <Image source={item.deals} style={stylesDeals.imageBannerDeals}/>
                </TouchableOpacity>
            </View>
        );
    }

    // Banner Happiness & Favorite
    const renderBannerHappiness = ({item, index}) => {
        return (
            <View style={stylesDeals.containerBannerHappiness}>
                <View style={{height:"50%"}}>
                    <TouchableOpacity>
                        <Image source={item.deals} style={stylesDeals.imageBannerHappiness}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginLeft:10,marginTop:10,height:"50%"}}>
                    <Text style={{fontSize:15, marginBottom:2}}>{item.title}</Text>
                    <Text style={{fontSize:13, marginBottom:6}}>{item.desc}</Text>
                    <Text style={{fontSize:11, opacity:0.3, marginBottom:6}}>
                        Available {item.voucher} vouchers
                    </Text>
                    <Text style={{fontSize:15, color:"#4D2A86", marginBottom:4}}>{item.price}</Text>
                </View>
            </View>
        );
    }

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
                    Deals
                </Text>
            </View>
            <View style={stylesDeals.containerSearchMerchant}>
                <TouchableOpacity style={stylesDeals.buttonFindMerchant}>
                    <Text style={stylesDeals.textFindMerchant}>
                        Find Merchants
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesDeals.buttonVoucher}>
                    <Image
                        source={require('../../assets/images/imagesDeals/IconPromo.png')}
                        style={{height:"80%", width:"60%"}}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="green"
                        style={{ backgroundColor: "#F8F8F8" }}
                    />
                }
            >
                <View style={stylesDeals.containerButtonDealsWah}>
                    <TouchableOpacity style={{width:"90%", height:"70%"}}>
                        <ImageBackground source={require('../../assets/images/imagesDeals/Icon1Move.png')}
                            style={stylesDeals.imageBGDealsWah}
                            imageStyle={{borderRadius:10}}
                        >
                            <Text style={stylesDeals.textDealsWah}>1 step to</Text>
                            <Text style={stylesDeals.textDealsWah}>deals WAH!</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={stylesDeals.containerTextCashback}>
                    <Text style={stylesDeals.textCashback}>Cashback Again and Again</Text>
                    <TouchableOpacity>
                        <Text style={stylesDeals.textSeeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                <Text style={stylesDeals.subTitle}>Get OFO recent promo</Text>
                <Carousel
                    ref={setCarousel}
                    data={bannerList}
                    renderItem={renderBannerDeals}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width - 45}
                    onSnapToItem={setActiveDealsSlide}
                    inactiveSlideScale={1}
                    activeSlideAlignment={"center"}
                    containerCustomStyle={{ marginBottom: 20 }}
                />
                <View style={stylesDeals.separator} />
                <View style={stylesDeals.containerTextCashback}>
                    <Text style={stylesDeals.textCashback}>Column of Happiness</Text>
                    <TouchableOpacity>
                        <Text style={stylesDeals.textSeeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                <Carousel
                    ref={setCarousel}
                    data={happinessList}
                    renderItem={renderBannerHappiness}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width - 45}
                    onSnapToItem={setActiveHappinessSlide}
                    inactiveSlideScale={1}
                    activeSlideAlignment={"center"}
                    containerCustomStyle={{ marginTop: 10, marginBottom: 20 }}
                />
                <View style={stylesDeals.separator} />
                <View style={stylesDeals.containerTextCashback}>
                    <Text style={stylesDeals.textCashback}>The Favorite and Economical</Text>
                    <TouchableOpacity>
                        <Text style={stylesDeals.textSeeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                <Carousel
                    ref={setCarousel}
                    data={favoriteList}
                    renderItem={renderBannerHappiness}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width - 45}
                    onSnapToItem={setActiveFavoriteSlide}
                    inactiveSlideScale={1}
                    activeSlideAlignment={"center"}
                    containerCustomStyle={{ marginTop: 10, marginBottom: 20 }}
                />
                <View style={stylesDeals.separator} />
                <View style={stylesDeals.containerTextCashback}>
                    <Text style={stylesDeals.textCashback}>Enjoy the other world</Text>
                </View>
                <Text style={stylesDeals.subTitle}>Please take a look brother</Text>
                <View style={[stylesHome.containerBoxSubMenu,{marginTop:-25, marginBottom: 20}]}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconFood.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconShoping.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Shopping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconTransport.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Transport</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconEducation.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Education</Text>
                    </TouchableOpacity>
                </View>
                <View style={[stylesHome.containerBoxSubMenu,{marginTop:-25}]}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconGift.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Gift</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconTravel.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Travel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconPersonal.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Personal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconSport.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Sport</Text>
                    </TouchableOpacity>
                </View>
                <View style={[stylesHome.containerBoxSubMenu,{marginTop:-25}]}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconFashion.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Fashion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconHealth.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Health</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconEntertainment.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Ent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesDeals/IconAutomotive.png')}
                            style={stylesHome.buttonImageMenu}
                        />
                        <Text style={stylesHome.titleSubMenu}>Auto</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default DealsScreen;
