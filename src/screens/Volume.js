import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {useState} from 'react';
import {MaterialTopTabView} from '@react-navigation/material-top-tabs';

const Volume = () => {
  const [firstUnit, setFirst] = useState('');
  const [secondUnit, setSecond] = useState('');
  const [from, setFrom] = useState('mg');
  const [to, setTo] = useState('mg');

  function reset() {
    setFirst('');
    setSecond('');
    setFrom('mg');
    setTo('mg');
  }
  function submit() {
    if (from == to) {
      setSecond(firstUnit);
    } else {
      if (from == 'mg') {
        if (to == 'g') {
          setSecond(firstUnit / 1000);
        } else if (to == 'kg') {
          setSecond(firstUnit / 1000000);
        } else if (to == 'ton') {
          setSecond(firstUnit / 1000000000);
        }
      } else if (from == 'g') {
        if (to == 'mg') {
          setSecond(firstUnit * 1000);
        } else if (to == 'kg') {
          setSecond(firstUnit / 1000);
        } else if (to == 'ton') {
          setSecond(firstUnit / 1000000);
        }
      } else if (from == 'kg') {
        if (to == 'mg') {
          setSecond(firstUnit * 1000000);
        } else if (to == 'g') {
          setSecond(firstUnit * 1000);
        } else if (to == 'ton') {
          setSecond(firstUnit / 1000);
        }
      } else if (from == 'ton') {
        if (to == 'mg') {
          setSecond(firstUnit * 1000000000);
        } else if (to == 'g') {
          setSecond(firstUnit * 1000000);
        } else if (to == 'kg') {
          setSecond(firstUnit * 1000);
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
          {firstUnit} {from} = {secondUnit} {to}
        </Text>
      </View>

      <View style={styles.horiz}>
        <Text style={styles.paragraph}>From :</Text>
        <Picker
          selectedValue={from}
          onValueChange={Text => setFrom(Text)}
          style={{
            padding: 5,
            margin: 5,
            width: '50%',
            backgroundColor: 'white',
            color: '#1e90ff',
          }}>
          <Picker.Item label="mg" value="mg" />
          <Picker.Item label="g" value="g" />
          <Picker.Item label="kg" value="kg" />
          <Picker.Item label="ton" value="ton" />
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
            backgroundColor: 'white',
            color: '#1e90ff',
          }}>
          <Picker.Item label="mg" value="mg" />
          <Picker.Item label="g" value="g" />
          <Picker.Item label="kg" value="kg" />
          <Picker.Item label="ton" value="ton" />
        </Picker>
      </View>
      <TextInput
        value={firstUnit}
        onChangeText={function (firstUnit) {
          setFirst(firstUnit);
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

export default Volume;
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
