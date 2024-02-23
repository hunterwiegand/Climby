import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, ImageBackground, StyleSheet } from "react-native";
// Can this on "View" as a <div> and "Text" as <p>

// Local imports
import { images } from "../constants";
import { ViewClimbs, Nav } from "../components"

const ViewAll = () => {
    const router = useRouter();

    return (
        <ScrollView>
            <Nav></Nav>
            <ViewClimbs />
        </ScrollView>
    )
};

export default ViewAll;