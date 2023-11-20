import { View, TouchableOpacity, Text, Alert } from "react-native";
import { useRouter } from "expo-router";


import styles from "./addClimb.style";

const AddClimb = () => {

    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text} onPress={() => {
                        Alert.alert("Redirct to addClimbPage")
                        router.push("/add")
                    }}>+{"\n"}Add new Climb</Text>
            </TouchableOpacity>

        </View>

    )
}

export default AddClimb;