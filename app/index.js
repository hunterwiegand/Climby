import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
// Can this on "View" as a <div> and "Text" as <p>

// Local imports
import { Welcome } from "../components";
import { images } from "../constants";
import ViewAll from "./view";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
    const router = useRouter();

    return (
        
        <Welcome welcomeBackground={images.welcomeBackground} handlePress={() => {
            router.push("/home");
        }} />
    )
};

export default Home;