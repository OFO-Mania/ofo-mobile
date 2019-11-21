import React, { useState } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StyleEditProfile from '../../styles/appScreen/StyleEditProfile';
import styles from '../../styles/authScreen/StyleJoin';

const EditProfileScreen = (props) => {

    const [fullname, setFullname] = useState("Aldo Ignata Chandra");
    const [phoneNumber, setPhoneNumber] = useState("081331994242");
    const [email, setEmail] = useState("aldoignatachandra@gmail.com");

    return(
        <>
            <View style={styles.headerJoin}>
                <Icon 
                    style={{marginLeft:20}} 
                    name='chevron-left' 
                    size={24} 
                    color='white' 
                    onPress={() => props.navigation.navigate("TabNavigation")}
                />
                <Text style={StyleEditProfile.headerText}>EDIT PROFILE</Text>
            </View>
            <View style={StyleEditProfile.containerEditProfile}>
                <View style={StyleEditProfile.containerChangeImage}>
                    <Image 
                        source={require('../../assets/images/imagesProfile/IconOFOPremier.png')}
                        style={StyleEditProfile.imageProfile}
                        />
                    <TouchableOpacity style={StyleEditProfile.buttonChangeImage}>
                        <Text style={StyleEditProfile.textChangeImage}>Change Profile Image</Text>
                    </TouchableOpacity>
                </View>
                <View style={StyleEditProfile.dataProfile}>
                    <Text style={StyleEditProfile.textFieldData}>
                        Full Name
                    </Text>
                    <Text style={StyleEditProfile.textSizeData}>
                        {fullname}
                    </Text>
                    <Text style={StyleEditProfile.textFieldData}>
                        Phone Number
                    </Text>
                    <Text style={StyleEditProfile.textSizeData}>
                        {phoneNumber}
                    </Text>
                    <Text style={StyleEditProfile.textFieldData}>
                        Email
                    </Text>
                    <Text style={StyleEditProfile.textSizeData}>
                        {email}
                    </Text>
                </View>
            </View>
        </>
    )
}

export default EditProfileScreen;