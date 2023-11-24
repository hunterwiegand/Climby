import { useState } from 'react'
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./viewclimbs.style";
import icons from "../../../assets/icons";
import ClimbCard from "../Cards/ClimbCard/climbCard";

const ViewClimbs = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (

    
    <SafeAreaView style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.checkboxContainer}>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.searchContainer}>
      <View style={styles.searchBtn}>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Image 
          style={styles.searchBtnImage} 
          resizeMode='contain'
          source={icons.filter}
           />
        </TouchableOpacity>
      </View>
        <View style={styles.searchWrapper}>
          <TextInput 
            value={searchTerm}
            style={styles.searchInput}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search for a climb"
          />
        </View>
        <TouchableOpacity 
        style={styles.searchBtn}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        // onPress={() => alert(searchTerm)}
        onPress={() => {
          if (searchTerm) {
            alert(`${searchTerm} found`)
          }
        }}
        >
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
