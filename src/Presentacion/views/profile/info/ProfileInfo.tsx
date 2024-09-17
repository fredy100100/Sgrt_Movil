import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { RootStackParamList } from "../../../../../App";
interface Props
  extends StackScreenProps<RootStackParamList, "ProfileInfoScreen"> { }
export const ProfileInfoScreen = ({ navigation, route }: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: '100%' ,
        height: '100%'
      }}
    >
      <View style={Styles.buttonsContainer}>
        <Button
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          title="Crear Solicitud"
        />

        <Button color={'red'}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          title="Tus Activos"
        />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  buttonsContainer:{
    flexDirection: 'row',
    gap: 40,
    marginTop: 10
  }
})