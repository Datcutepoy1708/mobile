import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginTop:20,
        marginBottom:20,
        borderRadius:5
    }
})
interface IProps {
    addToDo:(v:string)=> void; 
}
const InputToDo = (props:IProps) => {
    const {addToDo}=props;
    const [name, setName] = useState<string>("");
    const handleAddNewToDo = ()=> {
        addToDo(name);
    }
    return (
        <>
            <View>
                <TextInput
                    onChangeText={value => setName(value)}
                    value={name}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.todoInput}
                />
                <Button
                    title="Add new"
                    onPress={handleAddNewToDo}
                />
            </View>
        </>
    )
}
export default InputToDo;