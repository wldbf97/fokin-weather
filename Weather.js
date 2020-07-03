import React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Haze",
        subtitle:"안개가 낍니다.",
    },
    Rain:{
        iconName:"weather-lightning-rainy",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Rain",
        subtitle:"밖에 비온다 주륵주륵",
    },
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#373B44","#4286F4"],
        title:"Thunderstorm",
        subtitle:"폭풍우를 조심하세요!!",
    },
    Drizzle:{
        iconName:"weather-hail",
        gradient:["#89F7FE","#66A6FF"],
        title:"Drizzle",
        subtitle:"이슬비가 내립니다.",
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#7DE2FC","#B9B6E5"],
        title:"Snow",
        subtitle:"펄펄~ 눈이옵니다~",
    },
    Atmosphere:{
        iconName:"weather-hail",
        gradient:["#89F7FE","#66A6FF"],
        title:"Atmosphere",
        subtitle:"쾌적한 하루네요",
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#FF7300","FEF253"],
        title:"Clear",
        subtitle:"날씨가 너무 좋아요",
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#D7D2CC","#304352"],
        title:"Clouds",
        subtitle:"구름이 많이 꼈어요..",
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container} >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons color="white" size={96} name={weatherOptions[condition].iconName} />
                <Text style={styles.temp}>
                    {temp}º도
                </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.prototype = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
    },
    temp:{
        color:"white",
        fontSize:42
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle:{
        color:"white",
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start",
    }
});