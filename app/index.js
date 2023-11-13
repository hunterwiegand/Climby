import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
// Can this on "View" as a <div> and "Text" as <p>

// Local imports
import { Welcome } from "../components";

const Home = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Home</Text>
            <Welcome />
        </View>
    )
};

export default Home;