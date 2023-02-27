import { Button, StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import HomeB from './HomeB';
import { Image } from 'react-native';

    const Home = ({navigation}) =>  {
    return (
      <View style ={styles.container}>
         <Image
        style = {styles.Image}
        source = {require ('../assets/download.jpeg')}/> 
        <Text style ={styles.title}>Unit Converter</Text>
        <Button title="START" onPress={() => navigation.navigate("HomeB")} />
      </View>
    );
  };

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    borderColor:'blue',
    justifyContent:'center',
    margin:20,
  },
  title:{
    
    fontSize:40,
    fontStyle:'italic',
    fontWeight:'bold',
    justifyContent:'flex-start',
    marginVertical:50,
    marginStart:20,
    color:'#1e90ff',
    
    
  },
  Image:{
    height:250,
    justifyContent:'flex-start',
    paddingTop:50,
    alignItems:'stretch',
    marginVertical:40,
  }

})