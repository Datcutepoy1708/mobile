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

const InputToDo = () => {
    const [name, setName] = useState<string>("");
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
                    onPress={() => alert("Click me")}
                />
            </View>
        </>
    )
}
export default InputToDo;