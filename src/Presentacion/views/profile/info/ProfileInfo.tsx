import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput
} from "react-native";
import { RootStackParamList } from "../../../../../App";
import Table from "../../../components/table/Table";
import { ViewModel } from "./ViewModel";
import { Picker } from '@react-native-picker/picker';
//import { PickerItem } from '@react-native-picker/picker';
interface Props
  extends StackScreenProps<RootStackParamList, "ProfileInfoScreen"> { }
export const ProfileInfoScreen = ({ navigation, route }: Props) => {
  const { data, handleInputChange, obser, idcat, onSumit} = ViewModel();
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const Colums = [
    
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
            setIsModalVisible(true);
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>Crear Solicitud</Text>
            <Picker
              selectedValue={idcat}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue: number) => handleInputChange("idcat", itemValue)}
            >
              <Picker.Item label="Hardware" value={2}/>
              <Picker.Item label="Software" value= {1} />
              <Picker.Item label="Conexión" value={3}/>
            </Picker>
            <TextInput
              style={Styles.input}
              onChangeText= {value => handleInputChange("obser", value)}
              value={obser}
              placeholder="Observación"
            />
            <Button
              title="Guardar"
              onPress={() => {
                setIsModalVisible(!isModalVisible)
                onSumit()
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const Styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    gap: 40,
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});
