import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Text } from "react-native"
//import { Video, ResizeMode } from 'expo-av';


//import styles from "./recentClimbs.style.js";
import { listFiles, listMetadata, getDownloadUrl } from "../../../firebase-config.js";
import ClimbList from "./ClimbList.jsx";

const RecentCLimbs = () => {

    const [file, setFile] = useState([]);
    const [climbPaths, setClimbPaths] = useState([]);


    const getURL = async (url) => {
        // const getUrl = getDownloadUrl(url);
        // return getUrl
        //Dummy data:
        const test = "https://firebasestorage.googleapis.com/v0/b/climby-14603.appspot.com/o/climbs%2F7b3b1cd4-9fe3-48b6-868d-a325f4a8a75e.mp4?alt=media&token=8a8416f3-a695-48f9-91f1-7a2606e9db2c";
        return test;
    };

    useEffect(() => {

        //Get 3 recent climbs from storage
        // listFiles().then((listResponse) => {

        //     const files = listResponse.map((value) => {
        //         return { name: value.fullPath }
        //     })
        //     setClimbPaths(files);
        // });

        //dummy data
        const example = [
            {
                "name": "climbs/30fd123d-ec54-4bfb-8d4e-7ff3995a6b76.mp4"
            },
            {
                "name": "climbs/6a790f4b-b6d4-451e-8bc2-86a63df7685b.jpeg"
            },
            {
                "name": "climbs/7b3b1cd4-9fe3-48b6-868d-a325f4a8a75e.mp4"
            }
        ]
        setClimbPaths(example);

        // Get metaData for clinmbs


        // listMetadata("climbs/30fd123d-ec54-4bfb-8d4e-7ff3995a6b76.mp4").then((metadataResponse) => {
        //     data = [{
        //         file: metadataResponse.file,
        //         name: metadataResponse.name,
        //         grade: metadataResponse.grade
        //     }]
        //     setFile(data);
        // });




        //dummy data
        // tester = [
        //     {
        //         file: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FClimby-32e99e66-edf1-4d5a-a4ee-57df69cad5c1/ImagePicker/30fd123d-ec54-4bfb-8d4e-7ff3995a6b76.mp4",
        //         name: "Purps",
        //         grade: "V3",
        //         url: getURL("climbs/30fd123d-ec54-4bfb-8d4e-7ff3995a6b76.mp4")
        //     },
        //     {
        //         file: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FClimby-f9634f5b-366a-4190-9ef7-616f98661be2/ImagePicker/7b3b1cd4-9fe3-48b6-868d-a325f4a8a75e.mp4",
        //         name: "Zoomy",
        //         grade: "V6",
        //         url: ""
        //     },
        //     {
        //         file: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FClimby-91bb8297-2eb8-4def-b960-324105846193/ImagePicker/f3774d05-fbce-40e0-8564-aaf48aa9bcad.mp4",
        //         name: "Bones",
        //         grade: "V3",
        //         url: ""
        //     }
        // ],
        //     setFile(tester)


    }, []);

    let climbArr = [];

    // climbPaths.forEach(async (element) => {
    //     //console.log(element.name);


    //     //get url for climbs
    //     try {
    //         const url = await getURL(element.name);
    //         //console.log("test: ", url)

    //         //Get metaData for clinmbs
    //         listMetadata(element.name).then((metadataResponse) => {

    //             if (climbArr.length == 0) {
    //                 console.log("file empty", climbArr);
    //             } else {
    //                 console.log("file not empty", climbArr);
    //             }

    //             let data = [{
    //                 name: metadataResponse.name,
    //                 grade: metadataResponse.grade
    //             }]
    //             //setFile(data);
    //             //console.log("data", data);
    //             climbArr.push({
    //                 file: element.name,
    //                 name: data[0].name,
    //                 grade: data[0].grade,
    //                 url: url
    //             });

    //             console.log("climbArr: ", climbArr);

    //             // This sets off infinate loop
    //             //setFile(climbArr);
    //         });

    //     } catch (error) {
    //         console.log("error: ", error)
    //     }

    //     //setFile(climbArr);
    // });



    //setFile(climbArr);

    climbArr.push(
        //Dummy Data
        {
            "file": "climbs/7b3b1cd4-9fe3-48b6-868d-a325f4a8a75e.mp4",
            "name": "Zoomy",
            "grade": "V6",
            "url": "https://firebasestorage.googleapis.com/v0/b/climby-14603.appspot.com/o/climbs%2F7b3b1cd4-9fe3-48b6-868d-a325f4a8a75e.mp4?alt=media&token=8a8416f3-a695-48f9-91f1-7a2606e9db2c"
        },
        {
            "file": "climbs/30fd123d-ec54-4bfb-8d4e-7ff3995a6b76.mp4",
            "name": "Purps",
            "grade": "V3",
            "url": "https://firebasestorage.googleapis.com/v0/b/climby-14603.appspot.com/o/climbs%2F30fd123d-ec54-4bfb-8d4e-7ff3995a6b76.mp4?alt=media&token=14ebf157-8101-466e-8dfa-18d593e270cc"
        },
        {
            "file": "climbs/6a790f4b-b6d4-451e-8bc2-86a63df7685b.jpeg",
            "name": "Pickle",
            "grade": "3",
            "url": "https://firebasestorage.googleapis.com/v0/b/climby-14603.appspot.com/o/climbs%2F6a790f4b-b6d4-451e-8bc2-86a63df7685b.jpeg?alt=media&token=8ddaf293-b998-4921-b22e-4cc8162eec71"
        }
    );

    console.log("climbArr: ", climbArr);

    return (
        //<Text>This is where recent climbs populate</Text>
        //<ClimbList files={file}></ClimbList>
        ( climbArr ? (
            <ClimbList files={climbArr}></ClimbList>
        ): (
            <Text>Loading climbs</Text>
        ))
    )
};

export default RecentCLimbs;