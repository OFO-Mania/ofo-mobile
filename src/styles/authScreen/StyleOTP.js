import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        alignItems:"center",
    },
    headerJoin: {
        height:60,
        backgroundColor:"#4D2A86",
        flexDirection:"row",
        alignItems:"center" 
    },
    textHeader: {
        fontSize:17, 
        color:"white", 
        marginLeft:30
    },  
    borderStyleBase: {
        width: 30,
        height: 45
    },
    borderStyleHighLighted: {
        borderColor: "#06B3BA",
    },
    underlineStyleBase: {
        width: 50,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
        fontSize:20
    },
    underlineStyleBase2:{
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 2,
        fontSize:20
    },
    underlineStyleHighLighted: {
        borderColor: "#06B3BA",
    },
    inputCodeText: {
        marginTop:50, 
        fontSize: 20, 
        fontWeight:"bold", 
        color:"#4D2A86"
    },
    inputCodeDescription: {
        marginTop:10, 
        fontSize: 18
    },
    inputCodeOTPType: {
        marginTop:1, 
        fontSize: 18, 
        fontWeight:"bold"
    },
    buttonSendAgain: {
        marginTop:50,
        fontWeight:"bold", 
        fontSize:18,
        color:"#06B3BA"
    },
    timerColor: {
        color:"black"
    },
    inputOTP: {
        width: '80%', 
        height: 100
    }
})

export default styles;