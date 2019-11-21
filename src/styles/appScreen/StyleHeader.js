import {Platform, StyleSheet} from 'react-native';

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
        fontFamily: Platform.OS === "ios" ? "Choplin-Medium-DEMO" : "Choplin_Medium_DEMO",
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
})

export default styles;
