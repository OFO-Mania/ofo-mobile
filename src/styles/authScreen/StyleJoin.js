import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:35
    },
    headerJoin: {
        flex: 0.1,
        backgroundColor:"#4D2A86",
        flexDirection:"row",
        alignItems:"center" 
    },
    borderInput: {
        borderBottomColor:"black",
        height:30
    },
    input: {
        color:"black",
        fontSize:15,
    },
    buttonNextNow: {
        marginTop:70,
        backgroundColor:"#06B3BA",
        height:40,
        alignItems:"center", 
        justifyContent:"center",
        borderColor:"#266C9C", 
        borderRadius: 20,
    },
    textButtonNext: {
        color:"white",
        fontSize:15
    },
})

export default styles;