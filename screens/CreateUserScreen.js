import React, {useState}  from 'react'

import { View,Button, TextInput, ScrollView, StyleSheet,Text } from "react-native";



const CreateUserScreen = () => {
    
    const [state, setstate] = useState({
            name:'',
            email:'',
            phone:''

    })
    
    
    
    
    
    return (
     <ScrollView style={styles.container}>


<View style={styles.inputGroup}>
    <TextInput placeholder="Name User" onChangeText={(value) => {...state, name:value}} />
</View>
<View style={styles.inputGroup}>
    <TextInput placeholder="Email User" />
</View>
<View style={styles.inputGroup}>
    <TextInput placeholder="Phone User" />
</View>

<View >
    <Button title="Enviar"  />
</View>



     </ScrollView>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },

    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        marginBottomWidth:1,
        borderBottomColor:'#cccccc'

    }




})


export default CreateUserScreen
