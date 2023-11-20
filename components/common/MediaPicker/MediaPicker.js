import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        padding: 16, 
    }, 
    header: { 
        fontSize: 20, 
        marginBottom: 16, 
    }, 
    button: { 
        backgroundColor: "#007AFF", 
        padding: 10, 
        borderRadius: 8, 
        marginBottom: 16, 
        shadowColor: "#000000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.4, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 
    buttonText: { 
        color: "#FFFFFF", 
        fontSize: 16, 
        fontWeight: "bold", 
    }, 
    imageContainer: { 
        borderRadius: 8, 
        marginBottom: 16, 
        shadowColor: "#000000", 
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
    errorText: { 
        color: "red", 
        marginTop: 16, 
    }, 
});

export default styles;