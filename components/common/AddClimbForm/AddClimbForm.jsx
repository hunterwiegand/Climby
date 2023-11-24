import * as React from "react";
import { useState } from "react";
import {
    View,
    TextInput,
    Text,
    Button,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Video, ResizeMode } from 'expo-av';


import styles from "./addClimbForm.style.js";
import Climb from "../../../database/example.js";


const AddClimbForm = () => {

    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [style, setStyle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {

        const test = new Climb(name, grade, style, date, description);
        //console.log(test.name);
        // console.log(test.grade);
        // console.log(test.style);
        // console.log(test.date);
        // console.log(test.description);
        //console.log("imageURL", file);
        //console.log(test);

        setName("");
        setGrade("");
        setStyle("");
        setDate("");
        setDescription("");
        setFile("");

        Alert.alert("Climb added");
    };

    const video = React.useRef(null);
    const [status, setStatus] = useState({});


    // Stores the selected image URI 
    const [file, setFile] = useState(null);

    // Stores any error message 
    const [error, setError] = useState(null);

    // Function to pick an image from  
    //the device's media library 
    const pickImage = async () => {
        const { status } = await ImagePicker.
            requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {

            // If permission is denied, show an alert 
            Alert.alert(
                "Permission Denied",
                `Sorry, we need camera  
                     roll permission to upload images.`
            );
        } else {

            // Launch the image library and get 
            // the selected image 
            const result =
                await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    quality: 1,
                });

            if (!result.canceled) {

                // If an image is selected (not cancelled),  
                // update the file state variable
                
                let test = result.assets[0].uri;
                let vid = ".mp4";
                let test2 = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FClimby-f9634f5b-366a-4190-9ef7-616f98661be2/ImagePicker/1658e35b-3a62-4b38-9517-1167b3ed13f2.mp4";

                if (test.includes(vid)) {
                    console.log("test1 is Video");
                };

                if (test2.includes(vid)) {
                    console.log("test2 is video");
                }
                //console.log("hasMP4:", result.assets[0].uri.includes(".mp4)"))

                
                //console.log(result.assets[0]);

                setFile(result.assets[0].uri);

                //console.log("file: ", file);

                // Clear any previous errors 
                setError(null);
            }
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.form}>


                {/* <MediaPicker value={img}/> */}

                <View style={styles.imgContainer}>
                    {/* Button to choose an image */}
                    <TouchableOpacity style={styles.imgButton}
                        onPress={pickImage}>
                        <Text style={styles.imgButtonText}>
                            Choose Climb Image
                        </Text>
                    </TouchableOpacity>

                    {/* Conditionally render the image  
            or error message */}
                    {file.includes(".mp4") ? (
                        
                        // Display the selected image 
                        <View style={styles.imageContainer}>

                            {/* <Image source={{ uri: file }}
                                style={styles.image} /> */}

                            <Video
                                ref={video}
                                style={styles.video}
                                source={{
                                    uri: file,
                                }}
                                useNativeControls
                                resizeMode={ResizeMode.CONTAIN}
                                isLooping
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                                onPress={() =>
                                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                                }
                            />






                        </View>
                    ) : (
                        // Display an error message if there's  
                        // an error or no image selected 
                        <Text style={styles.errorText}>{error}</Text>
                    )}
                </View>





                <Text style={styles.label}>Climb Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="name"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Climb grade</Text>
                <TextInput
                    style={styles.input}
                    placeholder="v5"
                    value={grade}
                    onChangeText={setGrade}
                />
                <Text style={styles.label}>Climb style</Text>
                <TextInput
                    style={styles.input}
                    placeholder="overhang"
                    value={style}
                    onChangeText={setStyle}
                />
                <Text style={styles.label}>Date</Text>
                <TextInput
                    style={styles.input}
                    placeholder="11/22/23"
                    value={date}
                    onChangeText={setDate}
                />
                <Text style={styles.label}>Climb notes</Text>
                <TextInput
                    style={styles.input}
                    placeholder="description"
                    value={description}
                    onChangeText={setDescription}
                />
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>


    )
}
export default AddClimbForm;
