import React, { useState, useEffect } from 'react';
import RNGooglePlaces from 'react-native-google-places';
import { Button, Dimensions, StatusBar, View, Text, StyleSheet, ScrollView, Image, Platform, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './const/color';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import places from './const/places';
import { Row } from 'native-base';
import place from './const/places';

const {width} = Dimensions.get("screen");


function AttractionsScreen({ route, navigation }) {
  const categoryIcons = [
    <Icon name="restaurant" size={25} color= {COLORS.white} />,
    <Icon name="flight" size={25} color= {COLORS.white} />,
    <Icon name="flag" size={25} color= {COLORS.white} />,
    <Icon name="more-horiz" size={25} color= {COLORS.white} />,
  ];
  const ListCategories = () => {
    return <View style={styles.categoryContainer}>
      {categoryIcons.map((icon,index) => (
        <View key={index} style = {styles.iconContainer}>
          {icon}
        </View>
      ))}
    </View>
  };

  const Card = ({place}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Details', place)}>
        <ImageBackground
          style={styles.cardImage}
          source={place.image}>
          <Text                                 //card title
            style = {{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,}}>
                {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: 'row',
              alignItems: 'flex-end'
            }}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="place" size={20} color={COLORS.white}></Icon>
                <Text style={{marginLeft: 5, color: COLORS.white}}>
                  {place.location}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon name="star" size={20} color={COLORS.white}></Icon>
                <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
              </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  };

  const RecommendedCard = ({place}) =>{
    return <ImageBackground 
      style={styles.rmCardImage}
      source={place.image}>
        <Text 
        style={{
          color: COLORS.white,
          fontSize: 22,
          marginTop: 10
        }}>
        {place.name}
        </Text>
        <View 
          style={{
            flex:1,
            justifyContent: "space-between",
            alignItems:'flex-end'
            }}>
          <View style = {{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={22} color={COLORS.white}></Icon>
              <Text style={{color: COLORS.white, marginLeft: 5}}>{place.location}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={22} color={COLORS.white}></Icon>
              <Text style={{color: COLORS.white, marginLeft: 5}}>5.0</Text>
            </View>
          </View>
          <Text style={{color: COLORS.white, fontSize: 13}}>{place.details}</Text>
        </View>
  </ImageBackground>
  }

    return (
      <View style={styles.container}>
          <StatusBar translucent = {false} backgroundColor = {COLORS.tertiary}/>
          <ScrollView showVerticalScrollIndicator = {false}>
            <View style={{
              backgroundColor: COLORS.tertiary,
              height: 100,
              paddingHorizontal: 30}}>
                <View style= {{paddingTop: 15}} accessible={true} accessibilityLabel="Explore the beautiful places in Malaysia">
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
              contentContainerStyle={{paddingLeft: 20}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={places}
              renderItem={({item}) => 
                <Card place={item}></Card>}>
              </FlatList>
              <Text style={styles.sectionTitle}>Recommended</Text>
              <FlatList 
                snapToInterval={width - 20}
                contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={places}
                renderItem={({item}) => <RecommendedCard place={item}></RecommendedCard>}></FlatList>
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
      justifyContent: 'center',
      alignItems: 'center',
      
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
      backgroundColor: COLORS.tertiary,
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
      width: width / 2,
      marginRight: 20,
      padding: 10,
      overflow: "hidden",
      borderRadius: 10,
    },
    rmCardImage:{
      width: width - 40,
      height: 200,
      marginRight: 20,
      borderRadius: 10,
      overflow: "hidden",
      padding: 10,
    }
  });
  
  export default AttractionsScreen;