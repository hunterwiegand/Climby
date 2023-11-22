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
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})

export default styles;