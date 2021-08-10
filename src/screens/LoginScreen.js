import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
// firebase.jsから処理をimport
import { login } from '../auth/firebase';

const LoginScreen = () => {
  const [mailAddress, setMailAddress] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TextInput style={styles.input} value={mailAddress} onChangeText={(text) => setMailAddress(text)} />
      <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} />
      <Button
        title="ログインする"
        onPress={() => {
          // mailAddressとpasswordを引数として渡す
          login(mailAddress, password);
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

export default LoginScreen;