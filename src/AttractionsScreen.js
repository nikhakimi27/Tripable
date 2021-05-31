import React, { useState, useEffect } from 'react';
import RNGooglePlaces from 'react-native-google-places';
import { Button, StatusBar, View, Text, StyleSheet, ScrollView, Image, Platform, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './const/color';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import place from './const/places'

// const {width} = Dimensions.get("screen");


function AttractionsScreen({ route, navigation }) {
  const categoryIcons = [
    <Icon name="flight" size={25} color= {COLORS.tertiary} />,
    <Icon name="beach-access" size={25} color= {COLORS.tertiary} />,
    <Icon name="near-me" size={25} color= {COLORS.tertiary} />,
    <Icon name="place" size={25} color= {COLORS.tertiary} />,
  ];
  // const ListCategories = () => {
  //   return <View style={styles.categoryContainer}>
  //     {categoryIcons.map((icon,index) => (
  //       <View key={index} style = {styles.iconContainer}>
  //         {icon}
  //       </View>
  //     ))}
  //   </View>
  // };

  // const Card = ({place}) => {
  //   return <ImageBackground style={styles.cardImage}></ImageBackground>
  // };


    return (
      <View style={styles.container}>
          <StatusBar translucent = {false} backgroundColor = {COLORS.tertiary}/>
          <View style={styles.header}>
            <Icon name="sort" size={28} color={COLORS.white}/>
            <Icon name="notifications" size={28} color={COLORS.white}/>
          </View>
          <ScrollView showVerticalScrollIndicator = {false}>
            <View style={{
              backgroundColor: COLORS.tertiary,
              height: 100,
              paddingHorizontal: 30}}>
                <View accessible={true} accessibilityLabel="Explore the beautiful places in Malaysia">
                  <Text style = {styles.headerTitle}>Explore The</Text>
                  <Text style = {styles.headerTitle}>Beautiful Places in Malaysia</Text>
                  <View style = {styles.inputContainer}>
                    <Icon name="search" size={28} />
                    <TextInput placeholder="Search place" styles={{color:COLORS.grey}} />
                  </View>
              </View>
            </View>
            <ListCategories />
            <Text style={styles.sectionTitle}>Places</Text>
            <View>
              <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={places}
              renderItem={({item}) => 
                <Card place={item}></Card>}>
              </FlatList>
            </View>
          </ScrollView>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      backgroundColor: COLORS.tertiary,
      paddingVertical: 20,
      paddingHorizontal: 30,
      justifyContent: 'space-between'
    },
    headerTitle: {
      color: COLORS.white,
      fontWeight: 'bold',
      fontSize: 24,
    },
    inputContainer: {
      height: 60,
      width: '100%',
      backgroundColor: COLORS.white,
      borderRadius: 10,
      position: 'absolute',
      top: 80,
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
      elevation: 12,
    },
    categoryContainer: {
      marginTop: 68,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconContainer: {
      height: 60,
      width: 60,
      backgroundColor: COLORS.primary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    sectionTitle: {
      marginHorizontal: 20,
      marginVertical: 20,
      fontWeight: "bold",
      fontSize: 20,
    },
    cardImage: {
      height: 220,
      width: width/2,
    }
  });
  
  export default AttractionsScreen;