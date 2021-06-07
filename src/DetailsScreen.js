import React from 'react';
import { Text, View, Button, ImageBackground, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from './const/color';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {NavigationApps,actions,googleMapsTravelModes} from "react-native-navigation-apps";

const DetailsScreen = ({ navigation, route }) => {
    const { data, details } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                style={{ flex: 0.7 }}
                source={{ uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + details.photos[0].photo_reference + '&key=AIzaSyCF07uHM5hDpIi36VxlnyAm4ojeCJTxrMI' }}>
                <View style={styles.imageDetails}>
                    <Text
                        style={{
                            width: '70%',
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: COLORS.white,
                            marginBottom: 20
                        }}>
                        {details.name}
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="star" size={30} color={COLORS.orange} />
                        <Text
                            style={{
                                color: COLORS.white,
                                fontWeight: "bold",
                                fontSize: 20
                            }}>
                            {details.rating}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.detailsContainer}>
                <View style={styles.iconContainer}>
                    {(() => {
                        if (details.open_now == 'true') {
                            return (
                                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Open</Text>
                            )
                        }
                        else {
                            return (
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Closed</Text>
                            )
                        }
                    })()}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="place" size={28} color={COLORS.tertiary} />
                    <Text
                        style={{
                            width: 330,
                            marginLeft: 5,
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: COLORS.tertiary
                        }}>
                        {details.formatted_address}
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>
                    About the place
            </Text>
                <View style={{ flexDirection: 'row', width: 170 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', width: 170 }}>
                        <View style={{ flexDirection: 'row', marginVertical: 5, width: 170 }}>
                            <Icon name="language" size={20} color={COLORS.tertiary} />
                            <Text
                                style={{
                                    marginLeft: 5,
                                    width: 160,
                                    lineHeight: 22,
                                    color: COLORS.tertiary
                                }}>
                                {details.website}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 5, width: 170 }}>
                            <Icon name="phone" size={20} color={COLORS.tertiary} />
                            <Text
                                style={{
                                    marginLeft: 5,
                                    width: 160,
                                    lineHeight: 22,
                                    color: COLORS.tertiary
                                }}>
                                {details.international_phone_number}
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 5, width: 170 }}>
                    <Icon name="schedule" size={20} color={COLORS.tertiary} />
                        <Text
                            style={{
                                marginLeft: 5,
                                width: 180,
                                lineHeight: 22,
                                color: COLORS.tertiary
                            }}>
                            {details.opening_hours.weekday_text[0]} {"\n"}
                            {details.opening_hours.weekday_text[1]} {"\n"}
                            {details.opening_hours.weekday_text[2]} {"\n"}
                            {details.opening_hours.weekday_text[3]} {"\n"}
                            {details.opening_hours.weekday_text[4]} {"\n"}
                            {details.opening_hours.weekday_text[5]} {"\n"}
                            {details.opening_hours.weekday_text[6]} {"\n"}
                        </Text>
                    </View>
                    
                </View>

            </View>
            <View style={styles.footer}>
            <NavigationApps
                    iconSize={50}
                    row
                    address={details.formatted_address} // address to navigate by for all apps 
                    waze={{address: details.formatted_address, lat: details.geometry.location.lat, lon: details.geometry.location.lng ,action: actions.navigateByLatAndLon}} // specific settings for waze
                    // googleMaps={{search,lat: details.geometry.location.lat,lon: details.geometry.location.lon ,action: actions.navigateByAddress, travelMode:googleMapsTravelModes.driving}}
                />
                <TouchableOpacity style={styles.bookNowBtn} onPress={() => {
                    navigation.navigate('Direction', {
                        data,
                        details})
                    }}>
                    <Text style={{ color: COLORS.tertiary, fontSize: 16, fontWeight: 'bold' }}>Go by Public</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    imageDetails: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 30,
    },
    detailsContainer: {
        top: -50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        flex: 0.3,
    },
    iconContainer: {
        height: 40,
        width: 110,
        position: 'absolute',
        top: -20,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        right: 20,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: COLORS.tertiary,
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    bookNowBtn: {
        height: 50,
        width: 180,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default DetailsScreen;