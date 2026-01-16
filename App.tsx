import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  //string
  const [name, setName] = useState<string>("");
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "Learn React Native1" },
    { id: 2, title: "Learn React JS" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Watching Youtube" },
    { id: 5, title: "Watching Film" },
    { id: 6, title: "Độ Mixi" },
    { id: 7, title: "Mẹ Lý" },
    { id: 8, title: "Con chó Cao bằng" },
    { id: 9, title: "Khô gà loại 2" }
  ])

  //number
  // const[age,setAge]=useState<number>(30);

  // //null,undefined,boolean 
  // const test=null;

  // //object, array
  // const [person,setPerson]=useState<{
  //   name:string,
  //   age:number
  // }>({
  //   name:"datcutepoy",
  //   age:20
  // })

  // const [array,setArray]=useState([{
  //   name:"datcutepoy1",
  //   age:23
  // }])
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={v => setName(v)}
          value={name}
          autoCapitalize='none'
          //keyboardType='numeric'
          // maxLength={2} textarea
          multiline={true}
          autoCorrect={false}
          style={{
            marginTop: 50,
            borderColor: "violet",
            borderWidth: 1,
            padding: 10
          }} />
        {/* <Text style={styles.text}>{age}</Text>
        <Text style={styles.text}>{person.name}</Text> */}
        <Text style={styles.text}>{name}</Text>
      </View>
      {/* <Text style={styles.text}>Hello world with 
        <Text style={styles.datcutepoy}>
           datcutepoy
        </Text>
      </Text> */}
      {/* <ScrollView style={{marginTop:20,  borderColor:"red",borderWidth:1}}>
        {toDoList.map(todo => {
          return (
            <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
          )
        })}
      </ScrollView> */}
      <Button title='add new' color={"green"}
        onPress={() => alert("Click me")}
      />
      <FlatList
        style={{ marginTop: 20, borderColor: "red", borderWidth: 1 }}
        data={toDoList}
        renderItem={({ item, }) => {
          return (
            <Text key={item.id} style={styles.todo}>
              {item.title}
            </Text>
          )
        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 10,
    padding: 15
  },
  datcutepoy: {
    color: 'green'
  },
  text: {
    fontSize: 20,
    color: 'red',
    marginTop: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20
  },
});
