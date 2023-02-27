import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UnitPicker = ({value, changevalue, pickeroption}) => {
  return (
    <View>
      <Picker
        style={styles.pickerstyle}
        selectedValue={value}
        onValueChange={changevalue}>
        {
          pickeroption.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
         ) )}
      </Picker>
    </View>
  );
};

export default UnitPicker;

const styles = StyleSheet.create({
  pickerstyle: {
    padding: 5,
    margin: 5,
    width: '50%',
    backgroundColor: 'white',
    color: '#1e90ff',
  },
});
