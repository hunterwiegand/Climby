import * as React from "react";
import { useState } from "react";
import { FlatList, View, Text, TouchableOpacity, Alert, Modal, StyleSheet, Pressable } from "react-native";
import { Video, ResizeMode } from "expo-av";

import styles from "./recentClimbs.style.js"

import ClimbCard from "../Cards/ClimbCard/climbCard"


export default function ClimbList({ files }) {
    // const video = React.useRef(null);
    //const [status, setStatus] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const Item = ({ name, file, grade, url }) =>

    //{
    // let isVideo = false;

    // if (url.includes(".mp4")) {
    //     console.log("This is a video");
    //     isVideo = true;
    //     console.log(url);
    // } else {
    //     console.log("This is an image");
    // };

    //video("https://firebasestorage.googleapis.com/v0/b/climby-14603.appspot.com/o/climbs%2F7b3b1cd4-9fe3-48b6-868d-a325f4a8a75e.mp4?alt=media&token=8a8416f3-a695-48f9-91f1-7a2606e9db2c")
    (



                // <View style={styles.centeredView}>
                //     <Modal
                //         animationType="slide"
                //         transparent={true}
                //         visible={modalVisible}
                //         onRequestClose={() => {
                //             Alert.alert('Modal has been closed.');
                //             setModalVisible(!modalVisible);
                //         }}>
                //         <View style={styles.centeredView}>
                //             <View style={styles.modalView}>
                //                 <Text style={styles.title}>Name: {name}</Text>
                //                 <Text style={styles.title}>Url: {url}</Text>
                //                 <Text style={styles.title}>Grade: {grade}</Text>
                //                 <Pressable
                //                     style={[styles.button, styles.buttonClose]}
                //                     onPress={() => setModalVisible(!modalVisible)}>
                //                     <Text style={styles.textStyle}>Hide Modal</Text>
                //                 </Pressable>
                //             </View>
                //         </View>
                //     </Modal>
                //     <Pressable
                //         style={[styles.button, styles.buttonOpen]}
                //         onPress={() => setModalVisible(true)}>
                //         <Text style={styles.textStyle}>Show Modal</Text>
                //     </Pressable>
                // </View>
                <ClimbCard></ClimbCard>
    );



                {/* <Video
                    source={{ uri: url }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}
                    style={styles.backgroundVideo}
                    //isLooping
                    //onPlaybackStatusUpdate={status => setStatus(() => status)}
                    resizeMode={ResizeMode.CONTAIN}
                // onPress={() =>
                //     status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                // } 
                /> */}




                {/* Rendering the video causes a crash on web. This also isn't working like the video from the addClimbForm */}
                {/* <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: url,
                        }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                        onPress={() =>
                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        }
                    /> */}

    // }



    return (
        <FlatList
            style={styles.container}
            data={files}
            renderItem={({ item }) => <Item style={styles.item} name={item.name} file={item.file} grade={item.grade} url={item.url} />}
            keyExtractor={(item) => item.file}
        />

    )
};



// Load the module


// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
// export default function VideoPlayer({ files }) {
//     const background = "https://firebasestorage.googleapis.com/v0/b/climby-14603.appspot.com/o/climbs%2F7b3b1cd4-9fe3-48b6-868d-a325f4a8a75e.mp4?alt=media&token=8a8416f3-a695-48f9-91f1-7a2606e9db2c"

//     const onBuffer = () => {
//         console.log("buffer");
//     };

//     const videoError = (err) => {
//         console.log(err);
//     };

//     return (
//         <ScrollView>
//             <Text>Testing</Text>
//             <Video source={{ uri: background }}   // Can be a URL or a local file.
//                 ref={(ref) => {
//                     this.player = ref
//                 }}                                      // Store reference
//                 onBuffer={onBuffer}                // Callback when remote video is buffering
//                 onError={videoError}               // Callback when video cannot be loaded
//                 style={styles.backgroundVideo} />
//         </ScrollView>
//     )

// };
