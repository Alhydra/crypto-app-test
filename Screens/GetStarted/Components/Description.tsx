import { StyleSheet, Text, View } from 'react-native';
import { Translation } from '../../../config/Translation';
import { Colors, Headings } from '../../../config/Styles';

export default function Description() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[Headings.h1, { color: Colors.white }]}>
          <Text style={[Headings.h1, { color: Colors.accent }]}>
            {Translation.en.getStarted.description.earn}
          </Text>{' '}
          {Translation.en.getStarted.description.money}
        </Text>
        <Text style={[Headings.h1, { color: Colors.white }]}>
          <Text style={[Headings.h1, { color: Colors.cyan }]}>
            {Translation.en.getStarted.description.trade}
          </Text>{' '}
          {Translation.en.getStarted.description.crypto}
        </Text>
        <Text style={[Headings.h1, { color: Colors.white }]}>
          <Text style={[Headings.h1, { color: Colors.yellow }]}>
            {Translation.en.getStarted.description.spend}
          </Text>{' '}
          {Translation.en.getStarted.description.cash}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  logo: {
    width: 300,
    height: 300,
    backgroundColor: Colors.accent,
  },
});
