import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({

    //default display flex =>column
    container: {
        flex: 1,
        marginTop: 40,
        borderWidth: 1,
        borderColor: "red",
       // flexDirection: "row",
        justifyContent:"center", // theo trục ox của thg cha,
        alignItems:"center",
        flexDirection:"column" // căn theo trục oy
    },
    item1: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "violet",
        height:250,
        width:250
    },
    item2: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "yellow",
        height:300,
        width:300
    },
    item3: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "pink",
        height:100,
        width:100
    },
    item4: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: "green",
    }
})
//height ,width

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.item3}>
                <Text>Item 3</Text>
            </View>
            <View style={styles.item4}>
                <Text>Item 4</Text>
            </View>
        </View>
    )
}

export default FlexBox;