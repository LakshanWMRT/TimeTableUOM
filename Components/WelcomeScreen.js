import {View,StyleSheet,Text, Button, TouchableOpacity, Image, ScrollView} from "react-native"
import React, {useState} from 'react'

export default function WelcomeScreen({navigation}) {
    
    return ( 
         
        <View style={styles.view}>
        <View style={styles.circle} />
        <Image style={styles.image} source={require("../assets/Logo.png")} />
            <ScrollView style={styles.scroll}>
                
                <Text style={styles.timeTableText}>Timetable</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeTablePage')}><Text style={styles.buttonText}>Faculy of IT</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeTablePage')}><Text style={styles.buttonText}>Faculy of Engineering</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeTablePage')}><Text style={styles.buttonText}>Faculy of Business</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeTablePage')}><Text style={styles.buttonText}>Faculy of Architectre</Text></TouchableOpacity>

            </ScrollView>

        </View>
    );

}


const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:"#F4F5F7",
        alignItems:"center",
        justifyContent:"center",

    },
    image: {
        marginBottom: 40,
        width:350,
        height:350,
        borderRadius:600,
        marginTop:50
    },
    scrollView:{
        flex:1,
        justifyContent:"center",
    },
    button:{
        width: 380,
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "black",
        
        
    },
    buttonText:{
        color:"white",
        fontSize:15,
        fontFamily:"sans-serif",
    },
    timeTableText:{
        fontFamily:"sans-serif-thin",
        textAlign:"center",
        color:"#000",
        fontSize:40,
        marginBottom:20,
    },
    
    
})