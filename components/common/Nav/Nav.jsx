import { View, TouchableOpacity, Text, Button, SafeAreaView, Alert, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./nav.style";
import { useEffect } from "react";

const Nav = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.fixToText}>
                <TouchableOpacity>
                    <Text style={styles.button} onPress={() => {
                        router.push("/add")
                    }}>Add New Climb</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.button} onPress={() => {
                        router.push("/view")
                    }}>View All Climbs</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
};

export default Nav;