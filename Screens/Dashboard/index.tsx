import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { Translation } from '../../config/Translation';
import { Colors, Headings } from '../../config/Styles';
import Header from '../../Common/Header';
import Balance from './Components/Balance';
import Assets from './Components/Assets';
import Constants from 'expo-constants';
import { PRIVATE_KEY_STORAGE_KEY } from '../../config/Constants';

export default function Dashboard() {
  const [privateKey, setPrivateKey] = useState(undefined);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [profit, setProfit] = useState(0);
  const [assets, setAssets] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    fetchPrivatekey();
  }, []);

  useEffect(() => {
    if (privateKey) {
      setLoading(true);
      fetchBalance();
      fetchAssets();
    }
  }, [privateKey]);

  const fetchPrivatekey = async () => {
    let privateKey = await SecureStore.getItemAsync(PRIVATE_KEY_STORAGE_KEY);
    if (privateKey) {
      setPrivateKey(privateKey);
    } else {
      setError(true);
      setErrorMsg(Translation.en.dashboard.errorfetchingData);
    }
    setLoading(false);
  };

  const fetchBalance = async () => {
    setLoading(true);
    if (privateKey) {
      setBalance(135607);
      setProfit(120);
      resetErrorState();
    } else {
      setError(true);
      setErrorMsg(Translation.en.dashboard.errorfetchingData);
    }
    setLoading(false);
  };

  const fetchAssets = async () => {
    setLoading(true);
    if (privateKey) {
      setAssets([
        {
          address: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          assetName: 'ETH',
          balance: '135607',
          icName: 'ethereum',
        },
        {
          address: '58694a0f-3da1-471f-bd96-145571e29d72',
          assetName: 'BTC',
          balance: '0',
          icName: 'btc',
        },
        {
          address: '58694a0f-3da1-471f-ab08-145571e29d72',
          assetName: 'Cash',
          balance: '0',
          icName: 'dollar-sign',
        },
      ]);
      resetErrorState();
    } else {
      setError(true);
      setErrorMsg(Translation.en.dashboard.errorfetchingData);
    }
    setLoading(false);
  };

  const resetErrorState = () => {
    setError(false);
    setErrorMsg('');
  };

  const drawerMenu = (
    <TouchableOpacity onPress={() => alert('Open Drawer menu')}>
      <Ionicons name="md-person-circle-outline" size={24} color={Colors.red} />
    </TouchableOpacity>
  );
  const ScreenTitle = (
    <Text style={[Headings.h3, { color: Colors.darkText }]}>
      {Translation.en.dashboard.screenName}
    </Text>
  );

  const openNotifications = (
    <TouchableOpacity onPress={() => alert('Open Notifications')}>
      <Ionicons
        name="md-notifications-sharp"
        size={24}
        color={Colors.primary}
      />
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header
        leftComponent={drawerMenu}
        midComponent={ScreenTitle}
        rightComponent={openNotifications}
        isLight
      />
      <View style={styles.content}>
        {balance && profit && (
          <Balance balance={balance} profit={profit} isProfit={profit >= 0} />
        )}
        {assets && <Assets assets={assets} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 20,
    width: '100%',
  },
});
