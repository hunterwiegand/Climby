import * as React from "react";
import { useState } from "react";
//import { Video, ResizeMode } from 'expo-av';


//import styles from "./recentClimbs.style.js";
import { listFiles, listMetadata } from "../../../firebase-config.js";
import ClimbList from "./ClimbList.jsx";

const RecentCLimbs = () => {


    const [file, setFile] = useState([]);

    // Uncomment to render previous climbs
    React.useEffect(() => {
        //Get climb filenames from db
        listFiles().then((listResponse) => {

            const files = listResponse.map((value) => {
                return { name: value.fullPath }
            })

            setFile(files);
        });
    }, []);

    //get climb Metadata from db
    // React.useEffect(() => {

    //     // Get climb filenames from db
    //     // listMetadata("climbs/30fd123d-ec54-4bfb-8d4e-7ff3995a6b76.mp4").then((metadataResponse) => {
    //     //     data = [{
    //     //         file: metadataResponse.file,
    //     //         name: metadataResponse.name,
    //     //         grade: metadataResponse.grade
    //     //     }]
    //     //     setFile(data);
    //     // });

    //     //Use dummy data
    //     tester = [
    //         {
    //             file: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FClimby-32e99e66-edf1-4d5a-a4ee-57df69cad5c1/ImagePicker/30fd123d-ec54-4bfb-8d4e-7ff3995a6b76.mp4",
    //             name: "Purps",
    //             grade: "V3"
    //         },
    //         {
    //             file: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FClimby-f9634f5b-366a-4190-9ef7-616f98661be2/ImagePicker/7b3b1cd4-9fe3-48b6-868d-a325f4a8a75e.mp4",
    //             name: "Zoomy",
    //             grade: "V6"
    //         }
    //     ]
    //     setFile(tester)

    // }, []);

    console.log(file);

    return (
        //<Text>This is where recent climbs populate</Text>
        <ClimbList files={file}></ClimbList>
    )
};

export default RecentCLimbs;