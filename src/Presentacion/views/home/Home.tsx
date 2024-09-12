import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ToastAndroid,
    ScrollView,
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
  
  interface Props extends StackScreenProps<RootStackParamList, 
  'HomeScreen'>{};
  
  export const HomeScreen = ({navigation, route}: Props) => {
  
    // const { email, password, onChange, errorMessage, login, user } = useHomeViewModel();
  
    // useEffect(() => {
    //   if(errorMessage !== ''){
    //     ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    //   }
    // },[errorMessage])
  
    // useEffect(() => {
    //   if (user?.id !== null && user?.id !== undefined) {
    //     navigation.replace('ProfileInfoScreen');
    //     }   
    // },[user])
  
    const {handledinput, onsubmit, correo, pass} = ViewModel ()
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/Logo.jpeg")}
          style={styles.imageBackground}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../../assets/Logo2.png")}
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>SGRT MOVIL</Text>
        </View>
        <View style={styles.form}>
          <ScrollView>
          <Text style={styles.formText}>INGRESAR</Text>
          <CustomTextInput
            image={require("../../../../assets/email.jpg")}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={correo}
            onChangeText={handledinput}
            property="correo"
          />
          <CustomTextInput
            image={require("../../../../assets/password.jpeg")}
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry
            value={pass}
            onChangeText={handledinput}
            property="pass"
          />
          <View style={{ marginTop: 30 }}>
            <RoundedButton
              text="ENTRAR"
              onPress={onsubmit}
            />
          </View>
          <View style={styles.formRegister}>
            <Text>¿Olvidaste tu constraseña?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text style={styles.formRegisterText}>Recuperar</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      </View>
    );
  };