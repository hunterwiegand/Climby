import * as React from "react";
import { useState, useEffect } from "react";
import {
    View,
    TextInput,
    Text,
    Button,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";
//import { Video, ResizeMode } from 'expo-av';


//import styles from "./recentClimbs.style.js";
import { listFiles } from "../../../firebase-config.js";
import ClimbList from "./ClimbList.jsx";

const RecentCLimbs = () => {

    const [files, setFiles] = useState([]);

    // Uncomment to render previous climbs
    
    // React.useEffect(() => {
    //     listFiles().then((listResponse) => {

    //         const files = listResponse.map((value) => {
    //             return { name: value.fullPath }
    //         })

    //         setFiles(files);
    //     });
    // }, []);

    const Item = ({ name }) => {
        <View>
            <Text>{files.name}</Text>
        </View>
    }

    console.log(files);

    return (
        <Text>This is where recent climbs populate</Text>
        //<ClimbList files={files}></ClimbList>
    )
};

export default RecentCLimbs;