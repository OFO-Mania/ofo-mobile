import React  from 'react';
import {View, Image, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';

import StyleEditProfile from '../../styles/appScreen/StyleEditProfile';
import styles from '../../styles/authScreen/StyleJoin';
import {useDispatch, useSelector} from 'react-redux';
import {useLoading} from '../../core/hook';
import {modifyProfile} from '../../services/Profile';
import {authenticate} from '../../actions/user';

const EditProfileScreen = (props) => {
    const accessToken = useSelector(state => state.root.accessToken);
    const user = useSelector(state => state.user.authenticatedUser);
    const [loading, showLoading, hideLoading] = useLoading();
    const dispatch = useDispatch();

    const doModifyProfile = async (name: string, type: string, uri: string) => {
        try {
            showLoading();
            const response = await modifyProfile(accessToken, {
                name, type, uri
            });
            dispatch(authenticate(response.data.user));
            Toast.showWithGravity('Profile picture successfully changed.', Toast.LONG, Toast.TOP);
        } catch (error) {
            Toast.showWithGravity(error.message, Toast.LONG, Toast.TOP);
        } finally {
            hideLoading();
        }
    };

    const onPickImage = () => {
        const options = {
            title: 'Select Profile Picture',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        showLoading();
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                // Nothing
            } else if (response.error) {
                Toast.showWithGravity(response.error, Toast.LONG, Toast.TOP);
            } else {
                doModifyProfile(
                    response.fileName,
                    response.type,
                    Platform.OS === "android" ? response.uri : response.uri.replace("file://", "")
                ).then();
            }
            hideLoading();
        });
    };

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
                        source={user.image ? { uri: user.image } : require('../../assets/images/imagesTabNav/IconProfile.png')}
                        style={StyleEditProfile.imageProfile}
                        />
                    <TouchableOpacity disabled={loading} style={StyleEditProfile.buttonChangeImage} onPress={onPickImage}>
                        {
                            loading ? <ActivityIndicator color="#06B3BA" /> : <Text style={StyleEditProfile.textChangeImage}>Change Profile Image</Text>
                        }
                    </TouchableOpacity>
                </View>
                <View style={StyleEditProfile.dataProfile}>
                    <Text style={StyleEditProfile.textFieldData}>
                        Full Name
                    </Text>
                    <Text style={StyleEditProfile.textSizeData}>
                        {user.full_name}
                    </Text>
                    <Text style={StyleEditProfile.textFieldData}>
                        Phone Number
                    </Text>
                    <Text style={StyleEditProfile.textSizeData}>
                        {user.phone_number}
                    </Text>
                    <Text style={StyleEditProfile.textFieldData}>
                        Email Address
                    </Text>
                    <Text style={StyleEditProfile.textSizeData}>
                        {user.email_address}
                    </Text>
                </View>
            </View>
        </>
    )
}

export default EditProfileScreen;
