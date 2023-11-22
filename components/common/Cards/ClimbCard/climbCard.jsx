import { View, Text, TouchableOpacity } from "react-native";

import styles from "./climbcard.style";
import Climb from "../../../../database/example";

const test = new Climb("Sparky", 4, "vert", "10/15/23", "This was my very first dyno")

const climbCard = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.textContainer} onPress={() => alert("'It's the climb' - Miley Cyrus")}>
                <Text style={styles.text}>{test.name}</Text>
                <Text style={styles.text}>{test.grade}</Text>
                <Text style={styles.text}>{test.style}</Text>
                <Text style={styles.text}>{test.date}</Text>
                <Text style={styles.text}>{test.description}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default climbCard;