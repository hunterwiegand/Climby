import { View, Text, TouchableOpacity } from "react-native";

import styles from "./climbcard.style";

const climbCard = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => alert("It's the climb - Miley Cyrus")}>
            <Text style={styles.text}>Climb Card</Text>
        </TouchableOpacity>
    </View>
  )
}

export default climbCard;