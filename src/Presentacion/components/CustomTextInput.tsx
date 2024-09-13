import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Image, TextInput, StyleSheet, KeyboardType } from "react-native";

interface Props {
  image: any;
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}

const CustomTextInput = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText,
}: Props) => {
  return (
    <View style={styles.formInput}>
      <FontAwesomeIcon style={styles.formIcon} icon={image} />
      <TextInput
        style={styles.formTextInput}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    marginTop: 30
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formTextInput: {
    flex: 1,
    borderBlockColor: '#AAAAAA',
    borderBottomWidth: 1.5,
    marginLeft: 15
  },
});

export default CustomTextInput;
