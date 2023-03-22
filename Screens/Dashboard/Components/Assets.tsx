import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

import { Translation } from '../../../config/Translation';
import { Colors, Headings } from '../../../config/Styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Assets({ assets }) {
  const [selectedItem, setSelectedItem] = useState(assets[0].address);

  const Item = ({ assetName, balance, icName, address }) => {
    const iconColor =
      icName === 'btc'
        ? Colors.btc
        : icName === 'ethereum'
        ? Colors.eth
        : Colors.darkText;
    return (
      <TouchableOpacity
        key={address}
        style={[
          styles.item,
          {
            backgroundColor:
              address === selectedItem ? Colors.lightGreyBlue : Colors.white,
          },
        ]}
        onPress={() => setSelectedItem(address)}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5
            name={icName}
            style={{ marginRight: 10 }}
            size={24}
            color={iconColor}
          />
          <Text style={[Headings.body, { color: Colors.darkText }]}>
            {assetName}
          </Text>
          <Text
            style={[
              Headings.subHeading,
              {
                color: Colors.greyText,
                width: 120,
                textAlign: 'center',
                paddingLeft: 5,
              },
            ]}
            ellipsizeMode="middle"
            numberOfLines={1}
          >
            {address}
          </Text>
        </View>
        <Text
          style={[
            Headings.body,
            {
              color: Colors.darkText,
              flex: 1,
              textAlign: 'right',
            },
          ]}
        >{`$${balance}`}</Text>
      </TouchableOpacity>
    );
  };

  const assetsList = (
    <FlatList
      data={assets}
      renderItem={({ item }) => (
        <Item
          assetName={item.assetName}
          balance={item.balance}
          icName={item.icName}
          address={item.address}
        />
      )}
      keyExtractor={(item) => item.address}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={[Headings.h3, { color: Colors.darkText }]}>
          {`${Translation.en.dashboard.assets}  `}
          <Text style={[Headings.subHeading, { color: Colors.greyText }]}>
            {Translation.en.dashboard.networth}
          </Text>
        </Text>
      </View>
      {assets && <View style={styles.listView}>{assetsList}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey,
    width: '100%',
    borderRadius: 10,
    marginVertical: 20,
  },
  listView: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
});
