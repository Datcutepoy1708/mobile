import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  //string
  const [name,setName]=useState<string>("");


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
        <Text style={styles.text}>{name}</Text>
        <TextInput
        onChangeText={ v => setName(v)}
        value={name}
        autoCapitalize='none'
        //keyboardType='numeric'
        // maxLength={2} textarea
        multiline={true}
        autoCorrect={false}
        style={{
          borderColor:"violet",
          borderWidth:1,
          padding:10
        }}/>
        {/* <Text style={styles.text}>{age}</Text>
        <Text style={styles.text}>{person.name}</Text> */}

      </View>
      <Text style={styles.text}>Hello world with 
        <Text style={styles.datcutepoy}>
           datcutepoy
        </Text>
      </Text>
      <Button title='add new' />
    </View>
    
  );
}

const styles = StyleSheet.create({
  datcutepoy: {
    color:'green'
  },
  text: {
    fontSize:20,
    color:'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:20,
    paddingHorizontal:20
  },
});
