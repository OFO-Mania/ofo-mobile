import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1, 
        flexDirection:"column"
    },  
    headerContainer: {
        height:56,
        width:"100%", 
        backgroundColor:"#4D2A86", 
        justifyContent:"center"
    },
    headerText: {
        color:"white",
        fontWeight:"bold",
        fontSize:25, 
        marginLeft:20
    },
    headerSmallText: {
        color:"white",
        fontWeight:"bold",
        fontSize:20, 
        marginLeft:20
    },
    textOFO: {
        marginLeft:20,
        color:"white",
        fontWeight:"bold", 
        fontSize:14
    },
    textRp: {
        marginTop:-5,
        marginLeft:20, 
        color:"white",
        fontWeight:"bold"
    },
    textCash:{
        textAlign:"center",
        fontSize:30
    },
    textOFOPoint: {
        marginTop:10,
        marginLeft:20,
        color:"white",
        fontWeight:"bold", 
        fontSize:14
    },
})

export default styles;