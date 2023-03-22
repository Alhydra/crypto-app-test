import { StyleSheet, View } from 'react-native';
import { Colors } from '../config/Styles';

export default function Logo({ size = 10 }) {
  const width = 10 * size;
  const height = 10 * size;
  const margin = 1 * size;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View
          style={[
            styles.dot,
            { backgroundColor: Colors.cyan, width, height, margin },
          ]}
        ></View>
        <View
          style={[
            styles.dot,
            { backgroundColor: Colors.red, width, height, margin },
          ]}
        ></View>
      </View>
      <View style={styles.row}>
        <View
          style={[
            styles.dot,
            { backgroundColor: Colors.accent, width, height, margin },
          ]}
        ></View>
        <View
          style={[
            styles.dot,
            { backgroundColor: Colors.grey, width, height, margin },
          ]}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    marginBottom: 50,
  },
  dot: {
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
  },
});
