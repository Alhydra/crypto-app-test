import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Headings } from '../config/Styles';

export default function IconRoundButton({ onPress, buttonText, icon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon && icon}
      <Text
        style={[Headings.body, styles.buttonText]}
      >{`  ${buttonText}`}</Text>
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
    paddingHorizontal: 5,
    borderRadius: 20,
    width: 150,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
});
