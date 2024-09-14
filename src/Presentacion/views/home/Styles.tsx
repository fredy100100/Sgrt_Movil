import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    // opacity: 0.7
  },
  form: {
    width: "100%",
    height: "50%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
    color: 'white'
  },

  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "15%",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
    borderBottomColor: 'white',
    borderBottomWidth: 1.5
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
    color: 'white'
  },
  formTextInput: {
    flex: 1,
    marginLeft: 15,
    color: 'white'
  },
});

export default HomeStyles;
