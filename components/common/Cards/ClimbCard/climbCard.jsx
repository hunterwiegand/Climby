import { View, Text, TouchableOpacity, ImageBackground, Modal, Pressable } from "react-native";
import {useState} from 'react';

import styles from "./climbcard.style";
import Climb from "../../../../database/example";
import { images } from "../../../../constants";

const test = new Climb("Sparky", 4, "vert", "10/15/23", "This was my very first dyno")

const climbCard = () => {
    const [modalVisible, setModalVisible] = useState(false);

  return (

    <View style={styles.container}>
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
                <Text>{test.name}</Text>
                <Text>Grade: {test.grade}</Text>
                <Text>Style: {test.style}</Text>
                <Text>Date: {test.date}</Text>
                <Text>{test.description}</Text>
                <Text>We will add some photos here</Text>
                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
            </View>
        </Modal>

        <TouchableOpacity style={styles.textContainer} onPress={() => setModalVisible(!modalVisible)}>
            <ImageBackground 
            source={images.welcomeBackground} 
            resizeMode="contain"
            style={styles.image}>
                <View style={styles.textName}>
                    <Text style={styles.text}>{test.name}</Text>
                </View>
                <View style={styles.textBody}>
                    <Text style={styles.text}>{test.grade}</Text>
                    <Text style={styles.text}>{test.date}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    </View>
  )
}

export default climbCard;