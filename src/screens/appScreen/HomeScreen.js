import React, { useState } from 'react';
import { Dimensions,Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import stylesHome from '../../styles/appScreen/StyleHome';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const HomeScreen = () => {

    const [cash, setash] = useState("0");
    const [points, setPoints] = useState("6.900");
    const [carousel, setCarousel] = useState(null);
    const [bannerList, setBannerList] = useState([
        { banner: require('../../assets/images/imagesHome/Deal1.jpg') },
        { banner: require('../../assets/images/imagesHome/Deal2.jpg') },
        { banner: require('../../assets/images/imagesHome/Deal3.jpg') },
        { banner: require('../../assets/images/imagesHome/Deal4.jpg') },
        { banner: require('../../assets/images/imagesHome/Deal5.jpg') },
        { banner: require('../../assets/images/imagesHome/Deal6.jpg') }
    ]);
    const [activeSlide, setActiveSlide] = useState(0);

    const renderBanner = ({item, index}) => {
        return (
            <View style={{
                    alignSelf:"center",
                    height:150,
                    width:320, 
                }}>
                <Image 
                    source={item.banner} 
                    style={{height:"100%", width:"100%", borderRadius:15}}
                />
            </View>
        );
    }

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    OFO
                </Text>
            </View>
            <ScrollView style={styles.container}>
                <ImageBackground 
                    source={require('../../assets/images/imagesHome/bg-dashboard.png')}
                    style={{width:"100%", height:180}}
                >
                    <Text style={styles.textOFO}>OFO Cash</Text>
                    <Text style={styles.textRp}>Rp 
                        <Text style={styles.textCash}> {cash}</Text>
                    </Text>
                    <Text style={styles.textOFOPoint}>
                        OFO Points <Text style={{color:"#FFB819"}}>{points}</Text>
                    </Text>
                </ImageBackground>
                <View style={stylesHome.containerBoxMenu}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconTopUp.png')}
                            style={{width:50, height:50}}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconTransfer.png')}
                            style={{width:50, height:50}}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconHistory.png')}
                            style={{width:50, height:50}}
                            />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex:1,
                    flexDirection:"row",
                    width:"90%",
                    height:120,
                    justifyContent:"space-around",
                    alignItems:"center",
                    alignSelf:"center",
                    marginTop:5
                }}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconPLN.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>PLN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconPulsa.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>Pulsa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconPaketData.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconPascaBayar.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>Postpaid</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex:1,
                    flexDirection:"row",
                    width:"90%",
                    height:120,
                    justifyContent:"space-around",
                    alignItems:"center",
                    alignSelf:"center",
                }}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconBPJS.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>BPJS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconTVKabel.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>TV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconStreaming.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>HOOQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconLainnya.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>Other</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"100%", height:10, backgroundColor:"#F8F8F8"}} />
                <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginHorizontal:15, marginTop:10, marginBottom:10}}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Cashback News</Text>
                    <Text style={{fontSize:17, fontWeight:"bold", color:"#06B3BA"}}>See All</Text>
                </View>
                <Carousel
                    ref={setCarousel}
                    data={bannerList}
                    renderItem={renderBanner}
                    sliderWidth={Dimensions.get("window").width}
                    itemWidth={Dimensions.get("window").width - 20}
                    onSnapToItem={setActiveSlide}
                />
                <Pagination
                    dotsLength={bannerList.length}
                    activeDotIndex={activeSlide}
                    // containerStyle={{}}
                    dotStyle={{
                        width: 13,
                        height: 8,
                        borderRadius: 5,
                        marginHorizontal: -5,
                        backgroundColor: '#06B3BA'
                    }}
                    inactiveDotStyle={{
                        width: 8,
                        height: 8,
                        borderRadius: 5,
                        marginHorizontal: -5,
                        backgroundColor: 'black'
                    }}
                    inactiveDotOpacity={0.2}
                    inactiveDotScale={1}
                />
                <View style={{width:"100%", height:10, backgroundColor:"#F8F8F8"}} />
                <Text style={{fontWeight:"bold", fontSize:20, marginTop:15, marginLeft:15}}>Interesting In OFO</Text>
                <Text style={{fontSize:15,marginHorizontal:15, opacity:0.3}}>Don't claim to update if you haven't tried this feature yet</Text>
                <View style={{flex:1, flexDirection:"row", justifyContent:"center", marginTop:10, marginBottom:30}}>
                    <View style={{width:"44%", height:220, marginHorizontal:5, borderRadius:12, borderWidth:0.1}}>
                        <Image source={require('../../assets/images/imagesHome/ImageHelp.png')}
                               style={{width:"100%", height:80, borderTopLeftRadius:12, borderTopRightRadius:12}}
                        />
                        <Text style={{fontWeight:"bold", marginHorizontal:15, marginTop:10, fontSize:15}}>Help Center</Text>
                        <Text style={{marginHorizontal:15, marginTop:10, fontSize:12}}>
                            Have any problems or questions related to OFO? You can send it here
                        </Text>
                        <Text style={{marginTop:10,alignSelf:"center", color:"#06B3BA", fontWeight:"bold"}}>OFO Help</Text>
                    </View>
                    <View style={{width:"44%", height:220, marginHorizontal:5, borderRadius:12, borderWidth:0.1}}>
                        <Image source={require('../../assets/images/imagesHome/ImageInvest.png')}
                               style={{width:"100%", height:80, borderTopLeftRadius:12, borderTopRightRadius:12}}
                        />
                        <Text style={{fontWeight:"bold", marginHorizontal:15, marginTop:10, fontSize:15}}>OFO Invest</Text>
                        <Text style={{marginHorizontal:15, marginTop:10, fontSize:12}}>
                            It's time to start investing early, for a better future
                        </Text>
                        <Text style={{marginTop:24,alignSelf:"center", color:"#06B3BA", fontWeight:"bold"}}>Start Invest</Text>
                    </View> 
                </View>
            </ScrollView>
        </>
    )
}

export default HomeScreen;