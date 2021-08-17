import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
// 処理をimport
import { signUp } from '../auth/firebase';

const SignUpScreen = ({ navigation }) => {
  const [mailAddress, setMailAddress] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
      <TextInput style={styles.input} value={mailAddress} onChangeText={(text) => setMailAddress(text)} />

      <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} />
      
      <Button
        title="新規登録"
        onPress={() => {
          navigation.navigate('Login');
          // mailAddressとpasswordを引数として渡すようにする
          signUp(mailAddress, password);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 150,
    marginVertical: 10,
    borderWidth: 1,
  },
});

export default SignUpScreen;