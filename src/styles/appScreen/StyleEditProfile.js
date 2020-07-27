import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    containerEditProfile: {
        flex:1, 
        alignItems:"center"
    },  
    headerText: {
        fontSize:17, 
        color:"white", 
        marginLeft:30
    },
    containerChangeImage: {
        width:"85%", 
        height:120,
        flexDirection:"row",
        alignContent:"center"
    },
    imageProfile: {
        marginTop:30,
        height:70, 
        width:70, 
        borderRadius:50
    },
    buttonChangeImage: {
        marginTop:55, 
        marginLeft:15,
        height:"20%"
    },
    textChangeImage: {
        fontSize:17, 
        fontWeight:"bold", 
        color:"#06B3BA"
    },
    dataProfile: {
        width:"85%", 
        height:200
    },
    textFieldData: {
        fontSize:15, 
        opacity:0.5,
         marginTop:15
    },
    textSizeData: {
        fontSize:18
    }
})

export default styles;
