import { Text, FlatList, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 10,
        padding: 15
    }
})
interface IProps {
    todoList: IToDo[]
}
const ListToDo = (props: IProps) => {
    const { todoList } = props;
    // console.log(todoList);
    return (
        <>
            <FlatList
                style={{ marginTop: 20, borderColor: "red", borderWidth: 1 }}
                data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({ item, }) => {
                    return (
                        <Text style={styles.todo}>
                            {item.title}
                        </Text>
                    )
                }}
            />
        </>
    )
}
export default ListToDo;