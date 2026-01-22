import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TextInput } from 'react-native';
import InputToDo from './component/button_todo/input.todo';
import ListToDo from './component/button_todo/list.todo';
import FlexBox from './component/button_todo/flexbox';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './component/learn/home';
import HomeDetail from './component/learn/home.detail';
import Like from './component/learn/like';
import LikeDetail from './component/learn/like.detail';
import About from './component/learn/about';
import ChangePassword from './component/learn/changePassword';

export default function App() {
  //string
  const [name, setName] = useState<string>("");
  const [toDoList, setToDoList] = useState<IToDo[]>([
    // { id: 1, title: "Learn React Native1" },
    // { id: 2, title: "Learn React JS" },
    // { id: 3, title: "Watching Netflix" },
    // { id: 4, title: "Watching Youtube" },
    // { id: 5, title: "Watching Film" },
    // { id: 6, title: "Độ Mixi" },
    // { id: 7, title: "Mẹ Lý" },
    // { id: 8, title: "Con chó Cao bằng" },
    // { id: 9, title: "Khô gà loại 2" }
  ])
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const addToDo = (title: string) => {
    const todo = { id: randomInteger(1, 1000), title: title };
    setToDoList([...toDoList, todo]);
  }

  const deleteToDo = (id: number) => {
    const newToDo = toDoList.filter(todo => todo.id != id);
    setToDoList(newToDo);
  }

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
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const TabApp = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // Dùng như component React, KHÔNG phải <ionicons>
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Like" component={Like} />
      </Tab.Navigator>
    )
  }
  const StackApp = () => {
    return (

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Stack.Screen name="Home" component={TabApp} options={{ headerTitle: "Trang chủ", headerShown: false }} />
        <Stack.Screen name="LikeDetail" component={LikeDetail} />
        <Stack.Screen name="Details" component={HomeDetail} options={({ route }: any) => (
          {
            headerTitle: `Xem chi tiết ${route?.params?.userId ?? ""}`,
          }
        )} />
      </Stack.Navigator>

    )
  }
  // function HomeScreen(props: any) {
  //   const navigation = props.navigation;
  //   return (
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <Text>Home Screen</Text>
  //       <View style={{ marginVertical: 10 }}>
  //         <Button
  //           title='Go to detail'
  //           onPress={() => navigation.navigate("Article")}
  //         />
  //       </View>
  //       <View style={{ marginVertical: 10 }}>
  //         <Button
  //           title='Go user id=1'
  //           onPress={() => navigation.navigate("Article", { userId: 1, name: "Datcutepoy" })}
  //         />
  //       </View>
  //       <View style={{ marginVertical: 10 }}>
  //         <Button
  //           title='Go user id=2'
  //           onPress={() => navigation.navigate("Article", { userId: 2, name: "Dat dz" })}
  //         />
  //       </View>
  //     </View>
  //   )
  // }
  // function DetailsScreen() {
  //   const route: any = useRoute();
  //   const navigation: any = useNavigation();
  //   return (
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <Text>Details Screen</Text>
  //       <Text>Go user id={route?.params?.userId}</Text>
  //       <View style={{ marginVertical: 10 }}>
  //         <Button
  //           title='Go back home'
  //           onPress={() => navigation.goBack()}
  //         />
  //       </View>
  //     </View>
  //   )
  // }
  return (
    // <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <InputToDo addToDo={addToDo} />
    //     {/* <View>
    //     <TextInput
    //       onChangeText={v => setName(v)}
    //       value={name}
    //       autoCapitalize='none'
    //       //keyboardType='numeric'
    //       // maxLength={2} textarea
    //       multiline={true}
    //       autoCorrect={false}
    //       style={{
    //         marginTop: 50,
    //         borderColor: "violet",
    //         borderWidth: 1,
    //         padding: 10
    //       }} /> */}
    //     {/* <Text style={styles.text}>{age}</Text>
    //     <Text style={styles.text}>{person.name}</Text> */}
    //     {/* </View> */}
    //     {/* <Text style={styles.text}>Hello world with 
    //     <Text style={styles.datcutepoy}>
    //        datcutepoy
    //     </Text>
    //   </Text> */}
    //     {/* <ScrollView style={{marginTop:20,  borderColor:"red",borderWidth:1}}>
    //     {toDoList.map(todo => {
    //       return (
    //         <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
    //       )
    //     })}
    //   </ScrollView> */}
    //     {/* <Button title='add new' color={"green"}
    //     onPress={() => alert("Click me")}
    //   /> */}
    //     {/* <FlatList
    //     style={{ marginTop: 20, borderColor: "red", borderWidth: 1 }}
    //     data={toDoList}
    //     renderItem={({ item, }) => {
    //       return (
    //         <Text key={item.id} style={styles.todo}>
    //           {item.title}
    //         </Text>
    //       )
    //     }}
    //   /> */}
    //     <ListToDo todoList={toDoList} deleteToDo={deleteToDo} />
    //   </View>
    // </TouchableWithoutFeedback>
    // <FlexBox/>
    <NavigationContainer>

      <Drawer.Navigator
        initialRouteName='About'
        screenOptions={{
          drawerType: 'front',
        }}>
        <Drawer.Screen
          name="About" component={About} />
        <Drawer.Screen name="ChangePassword" component={ChangePassword} />
        <Drawer.Screen name="StackApp" component={StackApp} />
      </Drawer.Navigator>
      {/* <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // Dùng như component React, KHÔNG phải <ionicons>
            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={HomeDetail} />
      </Tab.Navigator> */}
    </NavigationContainer>

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
