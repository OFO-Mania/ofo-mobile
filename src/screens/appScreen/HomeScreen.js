import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../styles/appScreen/StyleHeader';
import stylesHome from '../../styles/appScreen/StyleHome';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {

    const [cash, setash] = useState("0");
    const [points, setPoints] = useState("6.900")

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    OFO
                </Text>
            </View>
            <ScrollView style={styles.container}>
                <ImageBackground 
                    source={require('../../assets/images/imagesHome/bg-dashboard.png')}
                    style={{width:"100%", height:180}}
                >
                    <Text style={styles.textOFO}>OFO Cash</Text>
                    <Text style={styles.textRp}>Rp 
                        <Text style={styles.textCash}> {cash}</Text>
                    </Text>
                    <Text style={styles.textOFOPoint}>
                        OFO Points <Text style={{color:"#FFB819"}}>{points}</Text>
                    </Text>
                </ImageBackground>
                <View style={stylesHome.containerBoxMenu}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconTopUp.png')}
                            style={{width:50, height:50}}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconTransfer.png')}
                            style={{width:50, height:50}}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconHistory.png')}
                            style={{width:50, height:50}}
                            />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex:1,
                    flexDirection:"row",
                    width:"90%",
                    height:120,
                    justifyContent:"space-around",
                    alignItems:"center",
                    alignSelf:"center",
                    marginTop:5
                }}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconPLN.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>PLN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconPulsa.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>Pulsa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconPaketData.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconPascaBayar.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>Postpaid</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex:1,
                    flexDirection:"row",
                    width:"90%",
                    height:120,
                    justifyContent:"space-around",
                    alignItems:"center",
                    alignSelf:"center",
                }}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconBPJS.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>BPJS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconTVKabel.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>TV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconStreaming.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>HOOQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/images/imagesHome/IconLainnya.png')}
                            style={{width:55, height:55}}
                        />
                        <Text style={{textAlign:"center", marginTop:10}}>Other</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:"100%", height:10, backgroundColor:"#F8F8F8"}} />
                <Text>Cashback Bikin Melek</Text>
                <View style={{width:"100%", height:10, backgroundColor:"#F8F8F8"}} />
                <Text>Yang Menarik Di Ovo</Text>
            </ScrollView>
        </>
    )
}

export default HomeScreen;