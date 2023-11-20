import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, ImageBackground, StyleSheet } from "react-native";
// Can this on "View" as a <div> and "Text" as <p>

// Local imports
import { Welcome, Nav, AddClimbForm } from "../components";
import { images } from "../constants";

const Add = () => {
    const router = useRouter();

    return (
        <ScrollView>
            <Nav></Nav>
            <AddClimbForm></AddClimbForm>
        </ScrollView>
    )
};

export default Add;