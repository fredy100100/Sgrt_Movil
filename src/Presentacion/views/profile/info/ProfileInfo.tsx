import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import { RootStackParamList } from "../../../../../App";
import Table from "../../../components/table/Table";
import { ViewModel } from "./ViewModel";
interface Props
  extends StackScreenProps<RootStackParamList, "ProfileInfoScreen"> {}
export const ProfileInfoScreen = ({ navigation, route }: Props) => {
  const { data } = ViewModel();
  const Colums = [
    //   "idsol": ,
    // "fechacre": ,
    // "idcat": ,
    // "prio": ,
    // "idest": ,
    // "tecnico": ,
    // "fechaci":
    {
      header: "N° Sol",
      accessorKey: "idsol",
      size: "small",
    },
    {
      header: "Fecha Creación",
      accessorKey: "fechacre",
      size: "medium",
    },
    {
      header: "Prioridad",
      accessorKey: "prio",
      size: "medium",
    },
    {
      header: "Estado",
      accessorKey: "idest",
      size: "medium",
    },
    {
      header: "Técnico",
      accessorKey: "tecnico",
      size: "xlarge",
    },
    {
      header: "Fecha cierre",
      accessorKey: "fechaci",
      size: "medium",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={Styles.buttonsContainer}>
        <Button
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          title="Crear Solicitud"
        />

        <Button
          color={"red"}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          title="Tus Activos"
        />
      </View>

      <View>
        {data.length === 0 ? (
          <Text>No Info</Text>
        ) : (
          <ScrollView horizontal>
            <Table columns={Colums} data={data} />
          </ScrollView>
        )}
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    gap: 40,
    marginTop: 10,
  },
});
