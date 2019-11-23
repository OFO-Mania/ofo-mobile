import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    containerHeaderProfile: {
        width:"100%",
        height:100,
        flex:1,
        justifyContent:"center",
        backgroundColor:"#4D2A86"
    },
    imageProfile: {
        height:"100%",
        width:"55%",
        borderRadius:60,
        marginLeft:25
    },
    containerDataProfile: {
        width:"100%",
        height:"60%",
        flexDirection:"row"
    },
    containerFullname: {
        width:"30%",
        height:"100%",
        justifyContent:"center"
    },
    containerPhoneNumber: {
        width:"100%",
        height:"80%",
        justifyContent:"center",
        marginTop:5
    },
    fullname: {
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        marginBottom:5,
        marginLeft:-15
    },
    phoneNumber : {
        color:"white",
        fontSize:15,
        marginLeft:-15
    },
    containerHeaderSection : {
        width:"100%",
        height:55,
        backgroundColor:"#F8F8F8",
        justifyContent:"center"
    },
    textHeaderSection : {
        marginLeft:15,
        fontSize:17,
        fontWeight:"bold",
        color:"#4D2A86"
    },
    containerCodeOFO: {
        width:"100%",
        height:160,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#F8F8F8"
    },
    containerButtonCode: {
        height:"100%",
        width:"49%"
    },
    imageCode: {
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    textCode: {
        fontSize:13,
        fontWeight:"bold",
        marginTop:50
    },
    textSubCode: {
        fontSize:13,
        opacity:0.3,
        marginHorizontal:40,
        textAlign:"center"
    },
    footerText: {
        marginLeft:10,
        opacity:0.5,
        fontSize:12
    },
    buttonSignOut: {
        height:"30%",
        width:"90%",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center", 
        borderRadius:30,
        backgroundColor:"#DFF1F2",
        marginBottom:10
    },
    textSignOut: {
        color:"#06B3BA",
        fontWeight:"bold",
        fontSize:16
    }
})

export default styles;
