import { StatusBar, StyleSheet, Text, View } from "react-native";


export default function Header(){
    return (
        <View style= {styles.container}>
            <Text>Header do app = Height: {StatusBar.currentHeight} </Text>
        </View>
    )
}

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000FF',
        paddingTop :statusBarHeight
    }
})