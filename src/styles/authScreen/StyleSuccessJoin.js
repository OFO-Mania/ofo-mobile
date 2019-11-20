import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor:"#4D2A86",
        alignItems:"center",
    },
    container2: {
        flex: 1,
        backgroundColor:"white",
        alignItems:"center",
    },
    headerText1: {
        marginTop:120, 
        fontSize:20, 
        color:"white",
        textAlign:"center",
        fontWeight: 'bold',
    },
    headerText2: {
        marginTop:10, 
        fontSize:20, 
        color:"white",
        textAlign:"center",
        fontWeight: 'bold',
    },
    subHeaderText: {
        marginTop:10,
        textAlign:"center",
        fontSize:14,
        color:"white",
        marginHorizontal:30
    },
    button: {
        marginTop:170,
        backgroundColor:"#06B3BA",
        height:45,
        width:275, 
        alignItems:"center", 
        justifyContent:"center",
        borderColor:"#266C9C", 
        borderRadius: 20,
    },
    textButton: {
        color:"white",
        fontSize:18
    }
})

export default styles;