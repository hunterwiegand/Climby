import { initializeApp, getApps, getApp } from 'firebase/app';
import { FIREBASE_API_KEY, FIREBASE_STORAGE_BUCKET, FIREBASE_APP_ID, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID } from "@env";


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
}

export { fbApp, fbStorage, uploadToFirebase }
