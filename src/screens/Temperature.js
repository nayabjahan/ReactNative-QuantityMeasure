import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Temperature = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [from, setFrom] = useState('cel');
  const [to, setTo] = useState('cel');

  function reset() {
    setFirst('');
    setSecond('');
    setFrom('cel');
    setTo('cel');
  }
  function submit() {
    if (from == to) {
      setSecond(first);
    } else {
      if (from == 'cel') {
        if (to == 'f') {
          setSecond(first * (9 / 5) + 32);
        } else if (to == 'kel') {
          setSecond(first + 273.15);
        }
      } else if (from == 'f') {
        if (to == 'cel') {
          setSecond((first - 32) * (5 / 9));
        } else if (to == 'kel') {
          setSecond(((first + 459.67) * 5) / 9);
        }
      } else if (from == 'kel') {
        if (to == 'cel') {
          setSecond(first - 273.15);
        } else if (to == 'f') {
          setSecond(((first - 273.15) * 9) / 5 + 32);
        }
      }
    }
  }
  return (
    <View styles={styles.container}>
      <View
        style={{
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={styles.paragraph}>
          {first} {from} = {second} {to}
        </Text>
      </View>

      <View style={styles.horiz}>
        <Text style={styles.paragraph}>From :</Text>
        <Picker
          selectedValue={to}
          onValueChange={Text => setTo(Text)}
          style={{
            padding: 5,
            margin: 5,
            width: '50%',
            backgroundColor: 'white',
            color: '#1e90ff',
          }}>
          <Picker.Item label="cel" value="c" />
          <Picker.Item label="f" value="f" />
          <Picker.Item label="Kel" value="Kel" />
        </Picker>
      </View>
      <View style={styles.horiz}>
        <Text style={styles.paragraph}>To :</Text>
        <Picker
           selectedValue={to}
          onValueChange={Text => setTo(Text)}
          style={{
            padding: 5,
            margin: 5,
            width: '50%',
            height:'50%',
            backgroundColor: 'white',
            color: '#1e90ff',
            alignContent:'center',
          }}
          >
          <Picker.Item label="cel" value="c" />
          <Picker.Item label="f" value="f" />
          <Picker.Item label="Kel" value="Kel" />
        </Picker>
      </View>
      <TextInput
        value={first}
        onChangeText={first => {
          setFirst(first);
        }}
        style={styles.input}
        placeholder="Enter Value Here"
        keyboardType="numeric"
      />
      <View style={styles.buttonstyle}>
        <View style={styles.button}>
          <TouchableOpacity onPress={submit}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={reset}>
            <Text
              style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Temperature;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1e90ff',
    padding: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    borderRadius: 30,
    width: 80,
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  horiz: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  input: {
    borderRadius: 30,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5,
    color: '#1e90ff',
  },
  buttonstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
});
