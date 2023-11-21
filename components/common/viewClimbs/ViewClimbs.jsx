import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./viewclimbs.style";
import icons from "../../../assets/icons";
import ClimbCard from "../Cards/ClimbCard/climbCard";

const ViewClimbs = (text) => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.fixToText}>
        <TouchableOpacity
          onPress={() => alert("There will be a side menu I swear")}
        >
          <Image style={{ width: 35, height: 35 }} source={icons.filter} />
        </TouchableOpacity>
      </View> */}

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Search for a climb"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => alert({text})}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <ClimbCard />
    </SafeAreaView>
  );
};

export default ViewClimbs;
