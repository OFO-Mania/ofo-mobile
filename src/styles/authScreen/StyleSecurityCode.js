import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center"
    },
    textTitle: {
        color:"white", 
        fontSize:18, 
        marginTop:40
    },
    keyboardSection: {
        flex:1,
        flexDirection: 'row',
    },
    keyboardButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyboardButtonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color:"white"
    },
    keyboardButtonIcon: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonChangeAccount: {
        backgroundColor:"#06B3BA",
        width:"100%",
        height:45,
        justifyContent:"center",
        alignItems:"center"
    },
    textButtonChangeAccount: {
        fontSize:15, 
        color:"white"
    },
    codeTransition: {
        height:10, 
        width:10, 
        marginHorizontal:15,
        borderRadius:10,
        borderWidth:1,
        borderColor:"white",
    }
})

export default styles;