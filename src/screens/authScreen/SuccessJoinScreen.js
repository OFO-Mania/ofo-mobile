import React, { useState } from 'react';
import { View, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/authScreen/StyleSuccessJoin';

const SuccessJoinScreen = (props) => {

    const [username, setUsername] = useState("Aldo Ignata Chandra")
    const [changeView, setChangeView] = useState(true);

    return(
        <>
        <StatusBar backgroundColor="#422575" barStyle="light-content" />
        {changeView ?
            <View style={styles.container1}>
                <Text style={styles.headerText1}>Congratulation {username},</Text>
                <Text style={styles.headerText2}>You are registered in OVO Club!</Text>
                <Text style={styles.subHeaderText}>
                    You can start using OFO in everyday life, get special offers and start collecting OFO Points
                </Text>
                <Image 
                    source={require("../../assets/images/succesjoin1.png")}
                    style={{marginTop:20,height:150, width:150}}
                />
                <TouchableOpacity style={styles.button} onPress={() => setChangeView(false)}>
                    <Text style={styles.textButton}>Awesome!</Text>
                </TouchableOpacity>
            </View>
        : 
            <View style={styles.container2} onPress={() => setChangeView(false)}>
                <Image 
                    source={require("../../assets/images/succesjoin2.png")}
                    style={{marginTop:40,height:250, width:250}}
                />  
                <Text style={{color:"#422575", fontWeight:"bold",fontSize:25}}>OFO's new look!</Text>
                <Text style={{fontSize:17, textAlign:"center", marginTop:30,marginHorizontal:40}}>Perform various transactions easily in one application</Text>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("SecurityCode")}>
                    <Text style={styles.textButton}>START</Text>
                </TouchableOpacity>
            </View>
        }
        </>
    )
}

export default SuccessJoinScreen;