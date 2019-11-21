import React, { useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import StyleDealsDetail from '../../styles/appScreen/StyleDealsDetail';
import Icon from 'react-native-vector-icons/FontAwesome';

const DealsDetailsScreen = (props) => {

    const [banner, setBanner] = useState(require('../../assets/images/imagesDeals/Cashback1.jpg'));
    const [promoTitle, setPromoTitle] = useState("Maxx Out Your Weekend");
    const [promoPeriod, setPromoPeriod]= useState("30 Nov 2019");
    const [description, setDescription] = useState("Maximize your weekend moments by ordering a favorite menu or try a new one at Maxx Coffe. Use OFO 20% cashback for all food and drinks, every Saturday and Sunday during the promo period");
    const [merchantImage, setMerchantImage] = useState(require('../../assets/images/imagesProfile/IconOFOPremier.png'));
    const [merchant, setMerchant]= useState("Maxx Coffee");
    const [terms, setTerms] = useState("Terms & Condition");

    return(
        <>
            <View style={{flex:1}}>
                <TouchableOpacity style={{position:"absolute", top:0, zIndex:1, marginLeft:10, marginTop:10}}>
                    <Icon 
                        name='chevron-left' 
                        size={30} 
                        color='white' 
                        onPress={() => props.navigation.navigate("TabNavigation")}
                    />
                </TouchableOpacity>
                <ScrollView>
                    <View style={{width:"100%", height:370}}>
                        <ImageBackground 
                            source={banner}
                            style={{width:"100%", height:200}}
                        />
                        <View style={StyleDealsDetail.containerBanner}>
                            <Text style={StyleDealsDetail.textPromoTitle}>
                                {promoTitle}
                            </Text>
                            <Text style={StyleDealsDetail.divider}>
                                ---------------------------
                            </Text>
                            <View style={StyleDealsDetail.containerPromoStatus}>
                                <Text style={{fontSize:14}}>Valid until</Text>
                                <Text style={{fontSize:14}}>{promoPeriod}</Text>
                            </View>
                        </View>
                        <Text style={StyleDealsDetail.textDescription}>
                            {description}
                        </Text>
                    </View>
                    <View style={StyleDealsDetail.separator} />
                        <Text style={StyleDealsDetail.textPromoLocation}>Promo Location</Text>
                        <View style={StyleDealsDetail.containerPromoLocation}>
                            <Image 
                                source={merchantImage}
                                style={StyleDealsDetail.imageMerchant}
                            />
                            <Text style={StyleDealsDetail.textMerchant}>{merchant}</Text>
                        </View>
                    <View style={StyleDealsDetail.separator} />
                        <Text style={StyleDealsDetail.textTermsAndCondition}>Terms & Condition</Text>
                        <Text style={{marginTop:10, marginLeft:20}}>{terms}</Text>
                        <Text style={{marginTop:10, marginLeft:20}}>{terms}</Text>
                        <Text style={{marginTop:10, marginLeft:20}}>{terms}</Text>
                        <Text style={{marginTop:10, marginLeft:20}}>{terms}</Text>
                        <Text style={{marginTop:10, marginLeft:20}}>{terms}</Text>
                        <Text style={{marginTop:10, marginLeft:20}}>{terms}</Text>
                        <Text style={{marginTop:10, marginLeft:20}}>{terms}</Text>
                </ScrollView>
            </View>
        </>
    )
}

export default DealsDetailsScreen;