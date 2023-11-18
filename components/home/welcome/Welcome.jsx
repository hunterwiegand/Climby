import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

// Import styles for this component
import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome text in a container</Text>
    </View>
  )
};

export default Welcome;