import { View, TouchableOpacity, Text, Button, SafeAreaView, Alert, ActivityIndicator } from "react-native";
import { useRouter, Link } from "expo-router";
import { WebView } from 'react-native-webview';

import styles from "./nav.style";
import { useEffect } from "react";

const Nav = () => {

    const router = useRouter();

    let url = "https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=cf6105fd-ed23-4b28-8709-afaa6b79d0e4&redirect_uri=https://google.com"

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.fixToText}>
                <TouchableOpacity>
                    <Text style={styles.button} onPress={() => {
                        router.push("/add")
                    }}>Add New Climb</Text>
                </TouchableOpacity>

                <Link href={url}>Consent</Link>
                <WebView
                    originWhitelist={["*"]}
                    source={{
                        html: `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" 
      src="https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=cf6105fd-ed23-4b28-8709-afaa6b79d0e4&redirect_uri=https://google.com"></iframe>`,
                    }}
                />


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