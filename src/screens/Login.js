import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../components/Loader';

const Login = (props) => {
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');

  const handleSubmit = () => {
    setErrortext('');
    setLoading(true);
    AsyncStorage.setItem('user::id', 123);
    props.navigation.navigate('DrawerNavigation');
  };

  const _passwordinput = useRef(null);
  const _emailinput = useRef(null);

  return (
    <View style={style.mainBody}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{marginTop: 100}}>
          <KeyboardAvoidingView enabled>
            <View style={style.headerView}>
              <Image
                source={require('../images/splash.png')}
                style={style.headerImage}
              />
            </View>
            <View style={style.sectionStyle}>
              <TextInput
                style={style.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Enter E-Mail"
                placeholderTextColor="#F6F6F6"
                autoCapitalize="none"
                keyboardType="email-address"
                ref={_emailinput}
                returnKeyType="next"
                onSubmitEditing={() => {
                  _passwordinput && _passwordinput.current.focus();
                }}
                blurOnSubmit={false}
              />
            </View>
            <View style={style.sectionStyle}>
              <TextInput
                style={style.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                underlineColorAndroid="#FFFFFF"
                placeholder="Enter Password"
                placeholderTextColor="#F6F6F6"
                keyboardType="default"
                ref={_passwordinput}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            {errortext !== '' ? (
              <Text style={style.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={style.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmit}>
              <Text style={style.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
            <Text
              style={style.registerTextStyle}
              onPress={() => props.navigation.navigate('RegisterScreen')}>
              New Here? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  headerImage: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    margin: 30,
  },
  headerView: {
    alignItems: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
