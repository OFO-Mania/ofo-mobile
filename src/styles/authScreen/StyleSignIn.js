import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#4D2A86",
    },
    containerPhoneNumber: {
        flex:1, 
        flexDirection:"row", 
        marginHorizontal:50, 
        justifyContent:"center", 
        alignItems:"center",
        marginTop: 130
    },
    containerSignIn: {
        flex:1, 
        flexDirection:"column", 
        marginHorizontal:50, 
        justifyContent:"center", 
        alignItems:"center",
        marginTop: 25,
    },
    containerHelp: {
        flex:1, 
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center",
        marginTop: 25
    },
    title: {
        textAlign:"center",
        fontWeight:"bold",
        fontSize:65,
        color:"#FEFEFE",
        marginTop:130
    },
    inputPhoneNumber: {
        color:"white",
        fontSize:15,
    },
    borderInput: {
        borderBottomColor:"white",
        height:30
    },
    iconUser: {
        width:25, 
        height:25
    },
    buttonSignIn: {
        height:40,
        width:275, 
        alignItems:"center", 
        justifyContent:"center",
        borderColor:"#9A7AC4", 
        borderRadius: 20,
        borderWidth:1
    },
    buttonJoinNow: {
        backgroundColor:"#06B3BA",
        height:40,
        width:275, 
        alignItems:"center", 
        justifyContent:"center",
        borderColor:"#266C9C", 
        borderRadius: 20,
    },
    textButton: {
        color:"#9A7AC4",
        fontSize:15
    },
    textButtonJoin: {
        color:"white",
        fontSize:15
    },
})

export default styles;