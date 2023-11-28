import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  FlatList
} from "react-native";
import { useEffect, useState } from "react";

import styles from "./climbcard.style";
import { images } from "../../../../constants";
import climbArr from "../../../../database/dummyData";

const climbCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [styleType, setStyleType] = useState("");

  console.log(climbArr);
  const climbs = climbArr;

  const tester = [
    {
      date: "10/15/23",
      description: "This was my very first dyno",
      file: "https://source.unsplash.com/user/c_v_r/200x200",
      grade: "4",
      name: "Sparky",
      styleType: "vert"
    },
    {
      date: "11/25/23",
      description: "This was hard",
      file: "https://source.unsplash.com/user/c_v_r/200x200",
      grade: "2",
      name: "Jonny",
      styleType: "overhang"
    },
    {
      date: "10/15/23",
      description: "This was easy",
      file: "https://source.unsplash.com/user/c_v_r/200x200",
      grade: "4",
      name: "Dino",
      styleType: "vert"
    }
  ]

  console.log(climbArr);
  console.log(tester);

  const Item = ({ name, grade, descripiton, file, date, styleType }) =>
  (
    <View style={styles.container}>
      <ImageBackground
        source={images.welcomeBackground}
        resizeMode="contain"
        style={styles.image}
      >
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => {
            setName(name);
            setGrade(grade);
            setDescription(descripiton);
            setDate(date);
            setStyleType(styleType);
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.textName}>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View style={styles.textBody}>
            <Text style={styles.text}>{grade}</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )

  return (
    // <ScrollView>
    //   <View style={styles.container}>
    //           <Modal
    //             animationType="slide"
    //             transparent={true}
    //             visible={modalVisible}
    //             onRequestClose={() => {
    //               Alert.alert("Modal has been closed.");
    //               setModalVisible(!modalVisible);
    //             }}
    //           >
    //             <View style={styles.centeredView}>
    //               <View style={styles.modalView}>
    //                 <Text>{}</Text>
    //                 <Text>Grade: {}</Text>
    //                 <Text>Style: {}</Text>
    //                 <Text>Date: {}</Text>
    //                 <Text>{}</Text>
    //                 <Text>We will add some photos here</Text>
    //                 <Pressable
    //                   style={[styles.button, styles.buttonClose]}
    //                   onPress={() => setModalVisible(!modalVisible)}
    //                 >
    //                   <Text style={styles.textStyle}>Hide Modal</Text>
    //                 </Pressable>
    //               </View>
    //             </View>
    //           </Modal>
    //     {climbArr.map((climb) => {


    //       return (
    //         <View style={styles.container}>

    //             <ImageBackground
    //               source={images.welcomeBackground}
    //               resizeMode="contain"
    //               style={styles.image}
    //             >
    //           <TouchableOpacity
    //             style={styles.textContainer}
    //             onPress={() => {
    //               setModalVisible(!modalVisible)
    //             }}
    //           >
    //               <View style={styles.textName}>
    //                 <Text style={styles.text}>{climb.name}</Text>
    //               </View>
    //               <View style={styles.textBody}>
    //                 <Text style={styles.text}>{climb.grade}</Text>
    //                 <Text style={styles.text}>{climb.date}</Text>
    //               </View>
    //           </TouchableOpacity>
    //             </ImageBackground>
    //         </View>
    //       );
    //     })}
    //   </View>
    // </ScrollView>

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
              <Text>Name: {name}</Text>
              <Text>Grade: {grade}</Text>
              <Text>Style: {styleType}</Text>
              <Text>Date: {date}</Text>
              <Text>{description}</Text>
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

        <FlatList
          data={climbArr}
          renderItem={({ item }) => <Item name={item.name} grade={item.grade} descripiton={item.descripiton} file={item.file} date={item.date} styleType={item.styleType} />}
          keyExtractor={(item) => item.name}
        />
      </View>
  );
};

export default climbCard;
