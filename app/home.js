import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, ImageBackground, StyleSheet } from "react-native";
// Can this on "View" as a <div> and "Text" as <p>

// Local imports
import { Welcome, Nav } from "../components";
import { images } from "../constants";

const home = () => {
    const router = useRouter();
    return (
        <Nav></Nav>

    )
};

export default home;