import { initializeApp, getApps, getApp } from 'firebase/app';
import { FIREBASE_API_KEY, FIREBASE_STORAGE_BUCKET, FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID } from "@env";


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, getMetadata, list } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    //   databaseURL: 'https://project-id.firebaseio.com',
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    //messagingSenderId: 'sender-id',
    appId: FIREBASE_APP_ID,
    //measurementId: 'G-measurement-id',
};

if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}

const fbApp = getApp();
const fbStorage = getStorage();

const uploadToFirebase = async (uri, name, climb, onProgress) => {
    const fetchResponse = await fetch(uri);
    const theBlob = await fetchResponse.blob();
    const metadata = climb;


    const imageRef = ref(getStorage(), `climbs/${name}`);

    const uploadTask = uploadBytesResumable(imageRef, theBlob, metadata);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                onProgress && onProgress(progress);
            },
            (error) => {
                // Handle unsuccessful uploads
                reject(error)
            },
            async () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                resolve({
                    downloadUrl,
                    metadata: uploadTask.snapshot.metadata
                })
            }
        );
    });
};

const listFiles = async () => {

    const storage = getStorage();

    // Create a reference under which you want to list
    const listRef = ref(storage, 'climbs');

    // Find all the prefixes and items.
    // const listResponse = await listAll(listRef);
    const listResponse = await list(listRef, { maxResults: 3 });
    return listResponse.items;
};

const listMetadata = async (fileName) => {

    // Create a reference to the file whose metadata we want to retrieve
    const storage = getStorage();
    const climbRef = ref(storage, fileName);

    // Get metadata properties
    const listResponse = await getMetadata(climbRef);
    return listResponse.customMetadata;
};

const getDownloadUrl = async (fileName) => {
    const storage = getStorage();
    const getResponse = await getDownloadURL (ref(storage, fileName));
        return getResponse;
}


export { fbApp, fbStorage, uploadToFirebase, listFiles, listMetadata, getDownloadUrl }
