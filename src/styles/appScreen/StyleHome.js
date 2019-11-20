import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
    containerBoxMenu: {
        flex:1,
        flexDirection:"row",
        alignSelf:"center",
        backgroundColor:"white", 
        width:"88%", 
        height:70,
        borderRadius:13,
        marginTop:-70,
        borderWidth: 0.2,
        borderColor: "grey",
        justifyContent:"space-around",
        alignItems:"center",
    },
    containerBoxSubMenu: {
        flex:1,
        flexDirection:"row",
        width:"90%",
        height:120,
        justifyContent:"space-around",
        alignItems:"center",
        alignSelf:"center",
        marginTop:5
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
    imageBanner: {
        height:"100%", 
        width:"100%", 
        borderRadius:15
    },
    buttonImageMenu: {
        alignSelf:"center",
        width:50, 
        height:50
    },
    dotStyles: {
        width: 13,
        height: 8,
        borderRadius: 5,
        marginHorizontal: -5,
        backgroundColor: '#06B3BA'
    },
    dotInactiveStyles: {
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: -5,
        backgroundColor: 'black'
    },
    separator: {
        width:"100%", 
        height:10, 
        backgroundColor:"#F8F8F8"
    },
    containerTextCashback: {
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center",
        marginHorizontal:15, 
        marginTop:10, 
        marginBottom:10
    },
    textCashback: {
        fontSize:20, 
        fontWeight:"bold"
    },
    textSeeAll: {
        fontSize:17, 
        fontWeight:"bold", 
        color:"#06B3BA"
    },
    titleSubMenu: {
        textAlign:"center", 
        marginTop:10
    },  
    titleBottomSection: {
        fontWeight:"bold", 
        fontSize:20, 
        marginTop:15, 
        marginLeft:15
    },
    descriptionBottomSection: {
        fontSize:15,
        marginHorizontal:15, 
        opacity:0.3
    },    
    containerCard: {
        flex:1, 
        flexDirection:"row", 
        justifyContent:"center", 
        marginTop:10, 
        marginBottom:30
    },
    card: {
        width:"44%", 
        height:220, 
        marginHorizontal:5, 
        borderRadius:12, 
        borderWidth:0.1
    },
    imageCard: {
        width:"100%", 
        height:80,
        borderTopLeftRadius:12, 
        borderTopRightRadius:12
    },
    titleCard: {
        fontWeight:"bold", 
        marginHorizontal:15, 
        marginTop:10, 
        fontSize:15
    },
    descriptionCard: {
        marginHorizontal:15, 
        marginTop:10, 
        fontSize:12
    },
    textBottomCard: {
        alignSelf:"center", 
        color:"#06B3BA", 
        fontWeight:"bold"
    }
})

export default styles;