import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    separator: {
        width:"100%",
        height:10,
        backgroundColor:"#F8F8F8"
    },
    containerBanner: {
        marginTop:-45,
        borderRadius:10,
        alignSelf:"center",
        width:"90%", 
        height:90, 
        backgroundColor:"white", 
        borderWidth:0.3, 
        borderColor:"grey",
        justifyContent:"center",
    },
    textPromoTitle: {
        marginLeft:20, 
        fontSize:20
    },
    divider: {
        height:1, 
        width:"90%", 
        borderBottomWidth:2, 
        borderBottomColor:"grey", 
        alignSelf:"center", 
        marginVertical:15
    },
    imageMerchant: {
        height:50,
        width:50,
        borderRadius:10
    },
    textMerchant: {
        marginLeft:15, 
        fontSize:17
    },
    containerPromoLocation: {
        flex:1, 
        flexDirection:"row", 
        alignItems:"center", 
        width:"90%",
        height:70, 
        marginHorizontal:20
    },
    textPromoLocation: {
        marginLeft:20, 
        marginTop:20, 
        fontSize:16
    },
    textTermsAndCondition: {
        marginLeft:20, 
        marginTop:20, 
        fontSize:16
    },
    containerPromoStatus: {
        flexDirection:"row", 
        justifyContent:"space-between",
        marginHorizontal:20,
        marginTop:-10
    },
    textDescription: {
        fontSize:16, 
        marginHorizontal:20, 
        marginTop:10, 
        opacity:0.5
    }
})

export default styles;
