import React, { useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import StyleDealsDetail from '../../styles/appScreen/StyleDealsDetail';
import Icon from 'react-native-vector-icons/FontAwesome';

const DealsDetailsScreen = (props) => {

    const deal = props.navigation.getParam('deal', {});
    deal.end_at = new Date(deal.end_at);

    const [banner, setBanner] = useState({
        uri: deal.image
    });
    const [promoTitle, setPromoTitle] = useState(deal.name);
    const [promoPeriod, setPromoPeriod]= useState(deal.end_at.getDate() + ' ' + deal.end_at.getMonth() + ' ' + deal.end_at.getFullYear());
    const [description, setDescription] = useState(deal.description);
    const [merchantImage, setMerchantImage] = useState(deal.merchant_image ? {
        uri: deal.merchant_image
    } : require('../../assets/images/imagesTabNav/IconProfile.png'));
    const [merchant, setMerchant]= useState(deal.merchant);
    const [terms, setTerms] = useState(deal.terms);

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
                            <View style={StyleDealsDetail.divider} />
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
