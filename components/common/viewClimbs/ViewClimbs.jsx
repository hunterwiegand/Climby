import { View, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import {useRouter} from 'expo-router';

import styles from "./viewclimbs.style";
import icons from "../../../assets/icons";
import ClimbCard from "../Cards/ClimbCard/climbCard"

const ViewClimbs = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToText}>
        <TouchableOpacity onPress={() => alert('There will be a side menu I swear')}>
          <Image style={{width:35, height:35}} source={icons.filter}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('you made it')}>
          <Image style={{width:35, height:35}} source={icons.search}/>
        </TouchableOpacity>
      </View>

      <ClimbCard />
    </SafeAreaView>
  );
};

export default ViewClimbs;
