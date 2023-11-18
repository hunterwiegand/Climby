import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground
} from "react-native";

// Import styles for this component
import styles from "./welcome.style";

const Welcome = ({ welcomeBackground, handlePress }) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={welcomeBackground} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Climby</Text>
    </ImageBackground>
  </View>
  )
};

export default Welcome;