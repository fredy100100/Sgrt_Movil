import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  ImageBackground,
} from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { RootStackParamList } from "../../../../App";
import { StackScreenProps } from "@react-navigation/stack";
// import { useHomeViewModel } from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from './Styles'
import { useEffect } from "react";
import React from "react";
import ViewModel from "./ViewModel";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

interface Props extends StackScreenProps<RootStackParamList,
  'HomeScreen'> { };

export const HomeScreen = ({ navigation, route }: Props) => {


  const { handledinput, onsubmit, correo, pass, response } = ViewModel()
  useEffect(() => {
    if (response.nodoc) {
      navigation.replace("ProfileInfoScreen")
    }
  }, [response])
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="cover"
        source={require("../../../../assets/Fondo.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/LogoImg.png")}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>SGRT APP</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formText}>Inicar Sesión</Text>
          <CustomTextInput
            image={faUser}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={correo}
            onChangeText={handledinput}
            property="correo"
          />
          <CustomTextInput
            image={faLock}
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry
            value={pass}
            onChangeText={handledinput}
            property="pass"
          />
          <View style={{ marginTop: 50 }}>
            <RoundedButton
              text="Ingresar"
              onPress={onsubmit}
            />
          </View>
          {/* <View style={styles.formRegister}>
          <Text>¿Olvidaste tu constraseña?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Recuperar</Text>
          </TouchableOpacity>
        </View> */}
        </View>
      </ImageBackground>
    </View>
  );
};