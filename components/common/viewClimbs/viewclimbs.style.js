import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "top",
        marginVertical: 25
    },
    fixToText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 100,
      },
      searchWrapper: {
        flex: 1,
        backgroundColor: 'white',
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        height: "25%",
      },
      searchInput: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
      },
      searchBtnImage: {
        width: "50%",
        height: "50%",
      },
      searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
      },
})

export default styles;