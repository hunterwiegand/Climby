import { FlatList, View, Text, SectionList } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView, SafeAreaView } from "react-native";

export default function ClimbList({ files }) {
    const Item = ({ name, file, grade }) =>
    (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{file}</Text>
            <Text style={styles.title}>{grade}</Text>
        </View>
    );

    return (
            <FlatList
                style={styles.container}
                data={files}
                renderItem={({ item }) => <Item style={styles.item} name={item.name} file={item.file} grade={item.grade} />}
                keyExtractor={(item) => item.file}
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
    title: {

    }
})