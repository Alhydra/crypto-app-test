import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Colors } from '../config/Styles';

export default function Input({
  onTextChange,
  placeHolderText = '',
  textColor,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder={placeHolderText}
        onChangeText={onTextChange}
      />
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
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 20,
  },
});
