navigator.geolocation = require('@react-native-community/geolocation');
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useWindowDimensions, View, } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BottomSheet from './const/BottomSheet';
// import {useSharedValue} from 'react-native-reanimated';

function tempMapScreen({ route, navigation }) {

    const { data, details, routeOverall, routeLeg } = route.params;

    const { width, height } = useWindowDimensions();

    // const y = useSharedValue(0);
    
    return (
        <View style={StyleSheet.container}>
            <StatusBar barStyle="dark-content" />

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ width, height }}
                initialRegion={{
                    latitude: routeOverall[0].start_lat,
                    longitude: routeOverall[0].start_lng,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}>
                {/* <BottomSheet panY={y}/>
                <SafeAreaView
                    style={StyleSheetList.absoluteFill}
                    pointerEvents="none">

                </SafeAreaView> */}
            </MapView>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default tempMapScreen;