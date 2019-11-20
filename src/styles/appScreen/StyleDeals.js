import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    containerSearchMerchant: {
        flexDirection:"row",
        height:70, 
        width:"100%", 
        justifyContent:"center", 
        alignItems:"center"
    },
    containerButtonDealsWah: {
        backgroundColor:"#F8F8F8",
        flexDirection:"row",
        height:130, 
        width:"100%", 
        justifyContent:"center", 
        alignItems:"center"
    },
    imageBGDealsWah: {
        height:"100%", 
        width:"100%", 
        justifyContent:"center"
    },
    textDealsWah: {
        marginLeft:130, 
        color:"white", 
        fontSize:20
    }, 
    buttonFindMerchant: {
        backgroundColor:"#EEF0F3", 
        width:"75%", 
        height:"60%",
        marginLeft:20, 
        justifyContent:"center", 
        alignItems:"center", 
        borderRadius:5
    },
    textFindMerchant: {
        fontWeight:"500", 
        color:"#8C949B"
    },
    buttonVoucher: {
        width:"20%", 
        height:"60%",
        justifyContent:"center", 
        alignItems:"center"
    },
    imageBannerDeals: {
        height:"100%", 
        width:"100%", 
        borderRadius:5,
        borderWidth:0.2,
        borderColor:"grey"
    },
    imageBannerHappiness: {
        height:"100%", 
        width:"100%", 
        borderWidth:0.2,
        borderColor:"grey",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10 
    },
    containerBannerDeals: {
        alignSelf:"center",
        height:150,
        width:300, 
    },
    containerBannerHappiness: {
        alignSelf:"center",
        height:200,
        width:300,
        flex:1,
        flexDirection:"column",
        borderWidth:0.1,
        borderColor:"grey",
        borderRadius:10 
    },
    containerTextCashback: {
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center",
        marginHorizontal:15, 
        marginTop:10, 
        marginBottom:10
    },
    textCashback: {
        fontSize:15, 
        fontWeight:"bold"
    },
    textSeeAll: {
        fontSize:15, 
        fontWeight:"bold", 
        color:"#06B3BA"
    },
    separator: {
        marginVertical:10,
        width:"100%", 
        height:5, 
        backgroundColor:"#F8F8F8"
    },
    subTitle: {
        fontSize:14,
        opacity:0.5,
        marginLeft:15,
        marginBottom:15
    }
})

export default styles;