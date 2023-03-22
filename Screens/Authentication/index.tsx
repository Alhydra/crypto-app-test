import 'react-native-get-random-values';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import * as SecureStore from 'expo-secure-store';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {
  PRIVATE_KEY_STORAGE_KEY,
  DAHBOARD_SCREEN,
} from '../../config/Constants';

import { Translation } from '../../config/Translation';
import { Colors, Headings } from '../../config/Styles';
import Logo from '../../Common/Logo';
import FluidRoundButton from '../../Common/FluidRoundButton';
import Input from '../../Common/Input';
import Header from '../../Common/Header';

export default function Auth() {
  const [recoverySeed, setRecoverySeed] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [validSeed, setValidSeed] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const errorCheck = () => {
    if (checkWordCount(recoverySeed) != 5) {
      setError(true);
      setErrorMsg(Translation.en.authentication.wordCountError);
      return false;
    } else {
      resetErrorState();
      setValidSeed(true);
      return true;
    }
  };

  useEffect(() => {
    resetErrorState();
  }, [recoverySeed]);

  useEffect(() => {
    // fetch private key and navigate to dashboard
    async function generateAndNavigate() {
      if (validSeed && !error) {
        if (validSeed) {
          const privateKey = await fetchPrivateKey();
          if (privateKey) {
            savePrivateKey(PRIVATE_KEY_STORAGE_KEY, privateKey);
            navigation.navigate(DAHBOARD_SCREEN);
          }
        }
      }
    }
    generateAndNavigate();
  }, [validSeed]);

  const handleLogin = async () => {
    await errorCheck();
  };

  const resetErrorState = () => {
    setError(false);
    setErrorMsg('');
    setValidSeed(false);
  };

  const fetchPrivateKey = async () => {
    const privateKey = await uuidv4();
    if (!privateKey) {
      setError(true);
      setErrorMsg(Translation.en.authentication.errorFetchingPV);
    } else {
      return privateKey;
    }
  };

  const savePrivateKey = async (key, value) => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  };

  const goBack = () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <SimpleLineIcons name="arrow-left" size={24} color={Colors.grey} />
    </TouchableOpacity>
  );

  const checkWordCount = (seed) =>
    seed.split(' ').length || seed.split(', ').length;
  return (
    <View style={styles.container}>
      <Header
        leftComponent={goBack()}
        isLight={false}
        midComponent={undefined}
        rightComponent={undefined}
      />
      <View style={styles.content}>
        <Logo size={5} />
        <Input
          placeHolderText={Translation.en.authentication.seedInputPlaceholder}
          onTextChange={(text) => setRecoverySeed(text)}
          textColor={error ? Colors.red : Colors.darkText}
        />
        <FluidRoundButton
          buttonText={Translation.en.authentication.loginButton}
          onPress={() => {
            handleLogin();
          }}
        />
        <Text style={[Headings.body, { color: Colors.red, height: 20 }]}>
          {errorMsg}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  logo: {
    width: 300,
    height: 300,
    backgroundColor: Colors.accent,
  },
  content: {
    paddingHorizontal: 20,
    width: '100%',
  },
});
