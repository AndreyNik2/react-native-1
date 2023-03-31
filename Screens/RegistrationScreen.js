import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.formWrapper}>
        <View style={styles.photoWrapper}>
          <View style={styles.photo}></View>
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={{ marginTop: 33 }}>
            <TextInput
              style={styles.input}
              placeholder={"Логін"}
              placeholderTextColor={"#212121"}
            ></TextInput>
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              placeholder={"Адреса електронної пошти"}
              placeholderTextColor={"#212121"}
            ></TextInput>
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              placeholder={"Пароль"}
              placeholderTextColor={"#212121"}
              secureTextEntry={true}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
            <Text style={styles.btnText}>Зареєструватися</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Text>В вас вже є аккаунт?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formWrapper: {
    height: 549,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // alignItems: "center",
  },
  photoWrapper: {
    flex: 1,
    alignItems: "center",
  },
  photo: {
    position: "relative",
    top: -60,
    backgroundColor: "red",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  form: {
    flex: 1,
    marginHorizontal: 16,
    // alignItems: "center",
  },
  title: {
    fontSize: 50,
  },
  input: {
    height: 50,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
    textAlign: "center",
  },
  btn: {
    flex: 1,
    marginTop: 43,
  },
  btnText: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    paddingVertical: 32,
    paddingVertical: 16,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 25,
  },
});
