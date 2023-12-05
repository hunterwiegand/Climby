import * as React from "react";
import { useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Video, ResizeMode } from 'expo-av';

import styles from "./recentClimbs.style.js"


export default function ClimbList({ files }) {
    const video = React.useRef();
    const [status, setStatus] = useState({});

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
        <View style={styles.item}>

            <TouchableOpacity onPress={() =>{
                console.log("clicked")
            }}>
                <Text style={styles.title}>Name: {name}</Text>
                <Text style={styles.title}>Url: {url}</Text>
                <Text style={styles.title}>Grade: {grade}</Text>
            </TouchableOpacity>



            <View style={styles.imageContainer}>

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
            </View>
        </View>
    );

    // }



    return (
        <FlatList
            style={styles.container}
            data={files}
            renderItem={({ item }) => <Item style={styles.item} name={item.name} file={item.file} grade={item.grade} url={item.url} />}
            keyExtractor={(item) => item.file}
        />

    )
}
