import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "grey"
    },
    form: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: .25,
        shadowRadius: 4,
        elevation: 5
    },
    label : {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input : {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    },
    imgContainer: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        padding: 16, 
    }, 
    imgHeader: { 
        fontSize: 20, 
        marginBottom: 16, 
    }, 
    imgButton: { 
        backgroundColor: "#000000c0", 
        padding: 10, 
        borderRadius: 8, 
        marginBottom: 16,  
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.4, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 
    imgButtonText: { 
        color: "white", 
        fontSize: 16, 
        fontWeight: "bold",
        textAlign: "center"
    }, 
    imageContainer: { 
        borderRadius: 8, 
        marginBottom: 16,
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.4, 
        shadowRadius: 4, 
        elevation: 5,
    }, 
    image: { 
        width: 200, 
        height: 200, 
        borderRadius: 8, 
    },
    video: { 
        width: 200, 
        height: 200, 
        borderRadius: 8, 
    },  
    errorText: { 
        color: "red", 
        marginTop: 16, 
    },


});

export default styles;