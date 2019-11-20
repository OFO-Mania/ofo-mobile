import { StyleSheet } from  'react-native';

const styles = StyleSheet.create({
  container : {
    backgroundColor:"#F8F8F8",
    flex:1
  },
  investContainer :{
    height:'35%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
},
imageInvest :{
    width:360, 
    height:205
},
textOFO :{
    marginLeft:50,
    width:215,
    marginTop:20,
    fontSize:17,
    color: 'white',
    fontWeight:'bold'
},
textDiscription: {
    marginLeft:15,
    width:215,
    marginTop:5,
},
buttonStart:{
    backgroundColor:'white',
    width:150,
    borderRadius:20,
    height:30,
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
},
textButton:{
    fontSize:15,
    fontWeight:'bold',
    color:'#06B3BA'
},
budgetContainer:{
    height:'25%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
},
imageBudget:{
    width:360, 
    height:180
},
textDiscriptionBudget:{
    marginLeft:15,
    width:215,
    marginTop:50,
},
yourText:{
    color:'grey',
    fontSize:14
},
duaBelas : {
    fontSize:25,
    color:'grey'
},
satu:{
    fontSize:25, 
    color:'#06B3BA'
},
bigest:{
    color:'grey',
    fontSize:14,
    marginTop:25,
    marginLeft:15,
},
imageBigest:{
    width:32, 
    height:32, 
    marginTop: 17
}

})

export default styles;