import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity, FlatList } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import COLORS from './const/color';
import Icon from 'react-native-vector-icons/MaterialIcons';


function DirectionScreen({ route, navigation }) {

    const { data, details } = route.params;

    const origin = { latitude: currentLatitude, longitude: currentLongitude };
    const destination = { latitude: details.geometry.location.lat, longitude: details.geometry.location.lng };
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCF07uHM5hDpIi36VxlnyAm4ojeCJTxrMI';

    const [error, setMyError] = useState("");
    const [currentLatitude, setCurrentLatitude] = useState(3.123);
    const [currentLongitude, setCurrentLongitude] = useState(101.453);

    const [routeLeg, setRouteLeg] = useState([]);
    const [routeOverall, setRouteOverall] = useState([]);

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {

            var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log('Android: ' + response);

            if (response === 'granted') {
                locateCurrentPosition();
            }
        }
    }

    const locateCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                setCurrentLatitude(position.coords.latitude);
                console.log(currentLatitude);
                setCurrentLongitude(position.coords.longitude);
                console.log(currentLongitude);
                setMyError("")
            },
            error => setMyError(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000 }
        )
    }

    const routesAssign = () => {
        fetch("https://maps.googleapis.com/maps/api/directions/json?origin=" + currentLatitude + "," + currentLongitude + "&destination=" + details.geometry.location.lat + "," + details.geometry.location.lng + "&mode=transit&transit_mode=train|tram|subway|rail&key=" + GOOGLE_MAPS_APIKEY)
            .then(response => {
                return response.json();
            })
            .then(responseData => {
                var i;
                var tempArrA = [];
                var tempArrB = [];

                var travel_mode;
                var distance;
                var duration;
                var departure_stop;
                var arrival_stop;
                var line_name;
                var num_stops;

                var departure_time;
                var arrival_time;
                var total_distance;
                var total_duration;
                var start_lat;
                var start_lng;
                var end_lat;
                var end_lng;

                departure_time = responseData.routes[0].legs[0].departure_time.text;
                arrival_time = responseData.routes[0].legs[0].arrival_time.text;
                total_distance = responseData.routes[0].legs[0].distance.text;
                total_duration = responseData.routes[0].legs[0].duration.text;
                start_lat = responseData.routes[0].legs[0].start_location.lat;
                start_lng = responseData.routes[0].legs[0].start_location.lng;
                end_lat = responseData.routes[0].legs[0].end_location.lat;
                end_lng = responseData.routes[0].legs[0].end_location.lng;

                tempArrB.push({ departure_time, arrival_time, total_distance, total_duration, start_lat, start_lng, end_lat, end_lng })

                for (i = 0; i < (responseData.routes[0].legs[0].steps.length); i++) {
                    travel_mode = responseData.routes[0].legs[0].steps[i].travel_mode;
                    distance = responseData.routes[0].legs[0].steps[i].distance.text;
                    duration = responseData.routes[0].legs[0].steps[i].duration.text;

                    if (travel_mode == "TRANSIT") {
                        departure_stop = responseData.routes[0].legs[0].steps[i].transit_details.departure_stop.name;
                        arrival_stop = responseData.routes[0].legs[0].steps[i].transit_details.arrival_stop.name;
                        line_name = responseData.routes[0].legs[0].steps[i].transit_details.line.name;
                        num_stops = responseData.routes[0].legs[0].steps[i].transit_details.num_stops;
                    }
                    else {
                        departure_stop = null;
                        line_name = null;
                        if (i != ((responseData.routes[0].legs[0].steps.length) - 1)) {
                            if ((responseData.routes[0].legs[0].steps[i + 1].travel_mode == "TRANSIT")) {
                                arrival_stop = responseData.routes[0].legs[0].steps[i + 1].transit_details.departure_stop.name + " Station";
                            }
                            else {
                                arrival_stop = null;
                                num_stops = null;
                            }
                        }
                        else{
                            arrival_stop = details.name;
                            num_stops = null;
                        }
                    }
                    tempArrA.push({ travel_mode, distance, duration, departure_stop, arrival_stop, line_name, num_stops });
                }
                setRouteLeg(tempArrA)
                setRouteOverall(tempArrB)
            })
    }

    useEffect(() => {
        requestLocationPermission();
    }, [])

    useEffect(() => {
        routesAssign();
    }, [5000])

    const DirectionCard = ({ directionItem }) => {

        if (directionItem.travel_mode == "WALKING") {
            return (
                <TouchableOpacity onPress={() => console.log("cantek")}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.iconContainer}>
                            <Icon name="directions-walk" size={25} color={COLORS.white} />
                        </View>
                        <View style={styles.descContainer}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Walk to {directionItem.arrival_stop}</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey' }}>{directionItem.distance} | {directionItem.duration}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        else {
            return (
                <TouchableOpacity onPress={() => console.log("cantek")}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.iconContainer}>
                            <Icon name="train" size={25} color={COLORS.white} />
                            <Text style={{ fontSize: 15, textAlign: 'center', color: COLORS.white }}>{directionItem.line_name}</Text>
                        </View>
                        <View style={styles.descContainer}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Take a train to {directionItem.arrival_stop}</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey' }}>{directionItem.distance} | {directionItem.duration}</Text>
                            <Text style={{ fontSize: 15, color: 'grey' }}>{directionItem.num_stops} stops</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
            <View style={styles.mapContainer}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showTraffic={true}
                    userLocationCalloutEnabled={true}
                    showsMyLocationButton={true}
                    region={{
                        latitude: currentLatitude,
                        longitude: currentLongitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                    <MapViewDirections
                        origin={{ latitude: currentLatitude, longitude: currentLongitude }}
                        destination={destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                        mode="TRANSIT"
                        strokeWidth={3}
                        strokeColor="hotpink"
                        optimizeWaypoints={true}
                        onStart={(params) => {
                            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                        }}
                        onReady={result => {
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)
                            console.log(result.waypointOrder)
                        }}
                        onError={(errorMessage) => {
                            console.log('GOT AN ERROR');
                        }}
                    />
                </MapView>
                <View style={styles.locatebutton}>
                    <TouchableOpacity style={styles.bookNowBtn} onPress={() => {
                        fetch("https://maps.googleapis.com/maps/api/directions/json?origin=" + currentLatitude + "," + currentLongitude + "&destination=" + details.geometry.location.lat + "," + details.geometry.location.lng + "&mode=transit&transit_mode=train|tram|subway|rail&key=" + GOOGLE_MAPS_APIKEY)
                            .then(response => {
                                return response.json();
                            })
                            .then(responseData => {
                                console.log("https://maps.googleapis.com/maps/api/directions/json?origin=" + currentLatitude + "," + currentLongitude + "&destination=" + details.geometry.location.lat + "," + details.geometry.location.lng + "&mode=transit&transit_mode=train|tram|subway|rail&key=" + GOOGLE_MAPS_APIKEY);
                                console.log(routeLeg[0]);
                                console.log(routeOverall[0].start_lng, "erghiuhfureifuerhuiferhierhferhfuerhfuiehfuir");
                            })
                    }}>
                        <Text style={{ color: COLORS.tertiary, fontSize: 16, fontWeight: 'bold' }}>konsolog</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.directionContainer}>
                <ScrollView>
                    <View>
                        <FlatList
                            data={routeLeg}
                            ItemSeparatorComponent={({ highlighted }) => (
                                <View
                                    style={{
                                        height: 1,
                                        width: "100%",
                                        backgroundColor: '#f0f0f0',
                                    }}
                                />
                            )}
                            renderItem={({ item }) => (
                                <DirectionCard directionItem={item} />

                            )}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: 300,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bookNowBtn: {
        height: 50,
        width: 180,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    directionContainer: {
        height: 300,
        width: 410,
        top: 150,
        backgroundColor: COLORS.white,
    },
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary,
        width: 100,
        height: 100
    },
    descContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 310,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    locatebutton: {
        position: 'absolute',
        bottom: 40,
        right: 40,
    }
});

export default DirectionScreen;