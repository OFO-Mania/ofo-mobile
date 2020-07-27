import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({ 
    headerPLN: {
        height:60,
        backgroundColor:"#4D2A86",
        flexDirection:"row",
        alignItems:"center" 
    },  
    headerText: {
        fontSize:17, 
        color:"white", 
        marginLeft:30
    },
    textPln: {
        fontSize:17, 
        color:"white", 
        marginLeft:10,
        fontWeight:"bold", 
        fontSize:20
    },
    imagePLN: {
        height:"70%", 
        width:"11%", 
        borderRadius:100, 
        marginLeft:20
    },
    containerRadioButton: {
        width:"100%", 
        height:70, 
        alignItems:"center", 
        justifyContent:"center",
    },
    radioButton: {
        flexDirection:"row", 
        marginRight:80
    },  
    borderInput: {
        borderBottomWidth: 3,
        borderBottomColor:"#06B3BA",
        height:30,
    },
    input: {
        marginLeft:10,
        color:"black",
        fontSize:17,
    },
    containerModal: {
        width:"90%",
        height:550,
        backgroundColor:"white",
        alignSelf:"center",
        borderRadius:8,
        borderColor:"#4D2A86",
        borderWidth:2
    },
    buttonConfirm: {
        alignSelf:"center",
        width:"90%", 
        height:40, 
        backgroundColor:"#06B3BA",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop: -50
    },
    buttonCancel: {
        alignSelf:"center",
        marginTop:7,
        width:"90%", 
        height:40, 
        backgroundColor:"white",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"grey",
        borderWidth:1
    },
    textConfirm: {
        color:"white", 
        fontSize:17, 
        fontWeight:"bold"
    },
    textCancel: {
        color:"#06B3BA", 
        fontSize:17, 
        fontWeight:"bold"
    },
    prepaidView: {
        width:"90%", 
        alignSelf:"center"
    },
    labelMeterNumber: {
        color:"black", 
        fontWeight:"100", 
        fontSize:14, 
        opacity:0.5
    },
    pickerMenu: {
        borderBottomColor:"#06B3BA", 
        borderBottomWidth:3,
        alignSelf:"center",
        borderColor:"white", 
        width:"94%", 
    },
    labelPickerMenu: {
        color:"black", 
        fontWeight:"100", 
        fontSize:14, 
        opacity:0.5, 
        marginBottom:-40, 
        marginTop:20
    },
    pickerStyle: {
        marginLeft:5,
        marginTop:30, 
        marginBottom:-9
    },
    viewDetail: {
        width:"95%", 
        height:180, 
        marginTop:20, 
        alignSelf:"center", 
        marginTop:30
    }
})

export default styles;
