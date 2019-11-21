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
    containerRadioButton: {
        width:"100%", 
        height:70, 
        alignItems:"center", 
        justifyContent:"center",
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
})

export default styles;
