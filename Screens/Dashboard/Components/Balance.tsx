import { StyleSheet, Text, View } from 'react-native';
import { Translation } from '../../../config/Translation';
import { Colors, Headings } from '../../../config/Styles';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import IconRoundButton from '../../../Common/IconRoundButton';

export default function Balance({ balance, isProfit, profit }) {
  const loadBalanceIcon = (
    <MaterialCommunityIcons
      name="arrow-top-right-thin"
      size={24}
      color={Colors.white}
    />
  );

  const withdrawBalanceIcon = (
    <MaterialCommunityIcons
      name="tray-arrow-down"
      size={24}
      color={Colors.white}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={[
            Headings.subHeading,
            { color: Colors.greyText, marginBottom: 5 },
          ]}
        >
          {Translation.en.dashboard.accountBalance}
        </Text>
        <Text
          style={[Headings.h1, { color: Colors.darkText, marginVertical: 10 }]}
        >
          {`$${balance}`}
          <Text style={[Headings.subHeading, { color: Colors.greyText }]}>
            .00
          </Text>
        </Text>
        <Text
          style={[
            Headings.subHeading,
            { color: isProfit ? Colors.greenText : Colors.red },
          ]}
        >
          <FontAwesome
            name="line-chart"
            size={12}
            color={isProfit ? Colors.greenText : Colors.red}
          />
          <Text>{`+ ${profit}%`}</Text>
        </Text>
      </View>
      <View style={styles.wrapper}>
        <IconRoundButton
          buttonText={Translation.en.dashboard.loadBalance}
          icon={loadBalanceIcon}
          onPress={() => alert('Load Balance')}
        />
        <IconRoundButton
          buttonText={Translation.en.dashboard.withdrawBalance}
          icon={withdrawBalanceIcon}
          onPress={() => alert('Withdraw Balance')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
