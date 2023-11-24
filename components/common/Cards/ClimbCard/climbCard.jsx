import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useState } from "react";

import styles from "./climbcard.style";
import Climb from "../../../../database/example";
import { images } from "../../../../constants";
import climbArr from "../../../../database/dummyData";

const climbCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [climbData, setClimbData] = useState();

  return (
    <ScrollView>
      <View style={styles.container}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text>{this.state.name}</Text>
                    <Text>Grade: {this.state.grade}</Text>
                    <Text>Style: {this.state.style}</Text>
                    <Text>Date: {this.state.date}</Text>
                    <Text>{this.state.description}</Text>
                    <Text>We will add some photos here</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
        {climbArr.map((climb) => {

          return (
            <View style={styles.container}>

                <ImageBackground
                  source={images.welcomeBackground}
                  resizeMode="contain"
                  style={styles.image}
                >
              <TouchableOpacity
                style={styles.textContainer}
                onPress={() => {
                  setModalVisible(!modalVisible), setClimbData(climb[0]);
                }}
              >
                  <View style={styles.textName}>
                    <Text style={styles.text}>{climb.name}</Text>
                  </View>
                  <View style={styles.textBody}>
                    <Text style={styles.text}>{climb.grade}</Text>
                    <Text style={styles.text}>{climb.date}</Text>
                  </View>
              </TouchableOpacity>
                </ImageBackground>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default climbCard;
