import { FlatList, View, Text, SectionList } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";

export default function ClimbList({ files }) {
    const Item = ({ name }) =>  
    (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );

    return (
        <FlatList
            data={files}
            renderItem={({ item }) => <Item name={item.name} />}
            keyExtractor={(item) => item.name}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 20
    },
    title : {

    }
})