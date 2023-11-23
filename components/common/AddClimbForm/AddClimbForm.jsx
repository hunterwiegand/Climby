import * as React from "react";
import { useState } from "react";
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Button
} from "react-native";

import {
    Control,
    FieldValues,
    Path,
    RegisterOptions,
} from 'react-hook-form';
import { useController, useForm, Controller } from 'react-hook-form';

import MediaPicker from "../MediaPicker/MediaPicker.jsx";
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
        console.log(test.name);
        console.log(test.grade);
        console.log(test.style);
        console.log(test.date);
        console.log(test.description);

        setName("");
        setGrade("");
        setStyle("");
        setDate("");
        setDescription("");
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <MediaPicker />
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
