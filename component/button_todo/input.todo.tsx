import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5
    }
})
interface IProps {
    addToDo: (v: string) => void;
}
const InputToDo = (props: IProps) => {
    const { addToDo } = props;
    const [name, setName] = useState<string>("");
    const handleAddNewToDo = () => {
        //validate data
        if (!name) {
            Alert.alert("Thông tin không hợp lệ",
                "Tiêu đề không được để trống",
                [
                    // {
                    //     text: 'Cancel',
                    //     onPress: () => console.log('Cancel Pressed'),
                    //     style: 'cancel'
                    // },
                    { text: 'OK con dê', onPress: () => console.log('Ok pressed') }
                ]
            );
            return;
        }
        addToDo(name);
        setName("");
    }
    return (
        <>
            <View style={{marginBottom:20}}>
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
            <MineButton title="add new" onPress={handleAddNewToDo} />
        </>
    )
}
export default InputToDo;