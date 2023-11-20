import {
    View,
    Text,
    TouchableOpacity,
  } from "react-native";

  import styles from './viewclimbs.style';

const ViewClimbs = () => {
  return (

    <View style={styles.container}>

      <TouchableOpacity>
        <Text style={styles.text}>Climby</Text>
      </TouchableOpacity>

    </View>

  )
}

export default ViewClimbs;