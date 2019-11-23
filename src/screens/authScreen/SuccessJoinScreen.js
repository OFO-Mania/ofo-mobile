import React, {useEffect, useState} from 'react';
import { View, StatusBar, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles/authScreen/StyleSuccessJoin';
import {useDispatch, useSelector} from 'react-redux';
import {setIsNewUser} from '../../actions';

const SuccessJoinScreen = (props) => {

    const [changeView, setChangeView] = useState(true);
    const fullName = useSelector(state => state.user.authenticatedUser.fullName);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsNewUser(false));
    });

    return(
        <>
        <StatusBar backgroundColor="#422575" barStyle="light-content" />
        {changeView ?
            <View style={styles.container1}>
                <Text style={styles.headerText1}>Congratulation {fullName},</Text>
                <Text style={styles.headerText2}>You are registered in OFO Club!</Text>
                <Text style={styles.subHeaderText}>
                    You can start using OFO in everyday life, get special offers and start collecting OFO Points
                </Text>
                <Image
                    source={require("../../assets/images/imagesAuth/succesjoin1.png")}
                    style={{marginTop:20,height:150, width:150}}
                />
                <TouchableOpacity style={styles.button} onPress={() => setChangeView(false)}>
                    <Text style={styles.textButton}>Awesome!</Text>
                </TouchableOpacity>
            </View>
        :
            <View style={styles.container2} onPress={() => setChangeView(false)}>
                <Image
                    source={require("../../assets/images/imagesAuth/succesjoin2.png")}
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
