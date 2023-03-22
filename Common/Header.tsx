import { StyleSheet, View } from 'react-native';
import { Colors } from '../config/Styles';

export default function Header({
  leftComponent,
  midComponent,
  rightComponent,
  isLight = true,
}) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isLight ? Colors.grey : Colors.primary },
      ]}
    >
      <View style={styles.headerItem}>{leftComponent}</View>
      <View style={[styles.headerItem, { flex: 1 }]}>{midComponent}</View>
      <View style={styles.headerItem}>{rightComponent}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 60,
  },
  headerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
});
