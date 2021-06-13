import React, {useState}  from 'react'

import { View,Button, TextInput, ScrollView, StyleSheet,Text } from "react-native";



const CreateUserScreen = () => {
    
    const [state, setstate] = useState({
            name:'',
            email:'',
            phone:''

    })
    
   

const handleChangeText = (name, value) => {
    setstate({...state, [name]: value})
}    

    

const saveNewUser = () => {

    console.log(state);



}


return (
     <ScrollView style={styles.container}>


<View style={styles.inputGroup}>
    <TextInput placeholder="Name User" 
    onChangeText={(value) => handleChangeText('name', value)} />
</View>
<View style={styles.inputGroup}>
    <TextInput placeholder="Email User" 
     onChangeText={(value) => handleChangeText('email', value)} />
   
</View>
<View style={styles.inputGroup}>
    <TextInput placeholder="Phone User" 
    onChangeText={(value) => handleChangeText('phone', value)} 
     />
</View>

<View >
    <Button title="Enviar" onPress={()=> saveNewUser()}/>
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
