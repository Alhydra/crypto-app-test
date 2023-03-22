import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Headings } from '../config/Styles';

export default function RoundButton({ onPress, buttonText }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[Headings.h3, styles.buttonText]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 40,
    width: '100%',
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
});
