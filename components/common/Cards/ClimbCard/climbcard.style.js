import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#FFF",
      },
    text: {
        textAlign: 'center',
        color: 'black',
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 16,
      },
      image : {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      },
})

export default styles;