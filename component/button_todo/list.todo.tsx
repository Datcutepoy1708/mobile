import { Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 10,
        padding: 15
    }
})
interface IProps {
    todoList: IToDo[];
     deleteToDo:(id:number)=>void;
}
const ListToDo = (props: IProps) => {
    const { todoList,deleteToDo } = props;
    // console.log(todoList);
    return (
        <>
            <FlatList
                style={{ marginTop: 20, borderColor: "red", borderWidth: 1 }}
                data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({ item, }) => {
                    return (
                        <TouchableOpacity onPress={() => deleteToDo(item.id)}>
                            <Text style={styles.todo}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>

                    )
                }}
            />
        </>
    )
}
export default ListToDo;