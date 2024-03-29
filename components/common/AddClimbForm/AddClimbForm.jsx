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
import { uploadToFirebase } from "../../../firebase-config.js";


const AddClimbForm = () => {

    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [style, setStyle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [isVideo, setIsVideo] = useState(false);

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

                if (result.assets[0].uri.includes(".mp4") || result.assets[0].uri.includes(".mov")) {
                    console.log("This is a video");
                    setIsVideo(true);
                    console.log(result.assets[0]);
                } else {
                    console.log("This is an image");
                };

                //console.log(result.assets[0]);

                setFile(result.assets[0].uri);
                //setFile("///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FClimby-91bb8297-2eb8-4def-b960-324105846193/ImagePicker/c7572ebd-ff72-475e-a67f-44a5c257ebfc.mp4");

                //console.log("file: ", file);

                // Clear any previous errors 
                setError(null);
            }
        }
    };

    // Function after form is sumbitted
    const handleSubmit = async () => {

        console.log("hit sumbit");
        //This isn't working on MAC because of how the ImagePicker collects the video file
        console.log("file:", file);
        try {
            const climbData = new Climb(name, grade, style, date, description, file);
            const metadata = {
                customMetadata : climbData
            }
            const uploadResponse = await uploadToFirebase(file, file.split("/").pop(), metadata);
            console.log(uploadResponse);
        } catch (e) {
            Alert.alert("Error Uploading Climb ", e.message);
        }




        // console.log("imageURL", file);
        // console.log(test);
        // console.log(isVideo);

        setName("");
        setGrade("");
        setStyle("");
        setDate("");
        setDescription("");
        setFile("");
        setIsVideo(false);


        Alert.alert("Climb added");
    };


    return (
        <View style={styles.container}>
            <View style={styles.form}>



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
                    {file && isVideo ? (

                        // Display the selected image 
                        <View style={styles.imageContainer}>

                            <Video
                                ref={video}
                                style={styles.video}
                                source={{
                                    uri: file,
                                }}
                                useNativeControls
                                resizeMode={ResizeMode.COVER}
                                isLooping
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                                onPress={() =>
                                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                                }
                            />
                        </View>
                    ) : file && !isVideo ? (
                        <View style={style.imageContainer}>
                            <Image source={{ uri: file }}
                                style={styles.image} />
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
        </View >


    )
}
export default AddClimbForm;
