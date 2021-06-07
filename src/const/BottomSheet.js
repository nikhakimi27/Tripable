import React from 'react';
import {SafeAreaView, StyleSheet, Text, useWindowDimensions, View,} from 'react-native';

export default function BottomSheet({panY}) {
    const {height} = useWindowDimensions();

    return(
        <View style = {[styles.container, {top: height=0.9}]}>
            <SafeAreaView style ={styles.wrapper}>
                <View style = {styles.content}>
                    <Text style={styles.title}></Text>
                    <View style={styles.fakeContent}/>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            height: -6,
            width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    wrapper:{
        flex:1,
    }
})