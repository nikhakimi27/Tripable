import React from 'react';
import { Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity, ActivityIndicator } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function SearchScreen({ route, navigation }) {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Enter Location'
                minLength={2}
                autoFocus={false}
                returnKeyType={'default'}
                fetchDetails={true}
                GooglePlacesDetailsQuery={{
                    fields:['place_id','photoreference']
                }}
                GooglePlacesSearchQuery={{
                    rankby: 'distance',
                    type: 'tourist_attraction',
                }}
                GoogleReverseGeocodingQuery={{

                }}
                query={{
                    key: 'AIzaSyCF07uHM5hDpIi36VxlnyAm4ojeCJTxrMI',
                    language: 'en',
                    components: 'country:my',
                    types: 'establishment',
                }}
                styles={{
                    textInputContainer: {
                        backgroundColor: 'grey',
                    },
                    textInput: {
                        height: 38,
                        color: '#5d5d5d',
                        fontSize: 16,
                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    navigation.navigate('Details', {
                        data,
                        details})
                    console.log(data, details);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    locatebutton: {
      position: 'absolute',
      bottom: 40,
      right: 40,
    },
    container: {
      flex: 1,
    },
    textInputContainer: {
      flexDirection: 'row',
    },
    textInput: {
      backgroundColor: '#FFFFFF',
      height: 44,
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontSize: 15,
      flex: 1,
    },
    poweredContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderBottomRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderColor: '#c8c7cc',
      borderTopWidth: 0.5,
    },
    powered: {},
    listView: {},
    row: {
      backgroundColor: '#FFFFFF',
      padding: 13,
      height: 44,
      flexDirection: 'row',
    },
    separator: {
      height: 0.5,
      backgroundColor: '#c8c7cc',
    },
    description: {},
    loader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 20,
    },
  });
  
  export default SearchScreen;