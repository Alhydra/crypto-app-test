import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Translation } from '../../config/Translation';
import { Colors } from '../../config/Styles';
import Description from './Components/Description';
import Logo from '../../Common/Logo';
import FluidRoundButton from '../../Common/FluidRoundButton';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import {
  AUTHENTICATION_SCREEN,
  PRIVATE_KEY_STORAGE_KEY,
  DAHBOARD_SCREEN,
} from '../../config/Constants';

export default function GetStarted() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    let privateKey = await SecureStore.getItemAsync(PRIVATE_KEY_STORAGE_KEY);
    if (privateKey) {
      navigation.navigate(DAHBOARD_SCREEN);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo size={10} />
      <Description />
      <FluidRoundButton
        buttonText={Translation.en.getStarted.getStartedButton}
        onPress={() => navigation.navigate(AUTHENTICATION_SCREEN)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    backgroundColor: Colors.accent,
  },
});
