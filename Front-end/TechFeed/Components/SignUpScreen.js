import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import ThemeUtils from '../assets/ThemeUtils';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export default class SignupScreen extends Component {
  state = {
    rollNumber: '18PT21',
    mobileNumber: '9524702558',
    rollError: '',
    mobileError: '',
    isLoading: false
  };

  checkIsDigit(c) {
    if (c >= '0' && c <= '9') {
      return true
    } else {
      return false
    }
  }

  checkIsChar(a) {
    if ((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z')) {
      return true
    } else {
      return false
    }
  }

  checkUsername(a) {
    if (a.length == 6) {
      return this.checkIsDigit(a[0]) && this.checkIsDigit(a[1])
        && this.checkIsChar(a[2]) && this.checkIsChar(a[3]) && this.checkIsDigit(a[4]) &&
        this.checkIsDigit(a[5]);
    }
    else {
      return false;
    }
  }
  checkMobile(a) {
    var flag = false;
    if (a.length == 10) {
      for (let index = 0; index < a.length; index++) {
        if (!this.checkIsDigit(a[index])) {
          flag = true
        }
        if (flag) {
          return false;
        }
      }
      return true;
    }
    else {
      return false;
    }
  }

  writeUserData = () => {
    this.setState({ isLoading: true });
    fetch('https://us-central1-techfeed2k18-cd013.cloudfunctions.net/addUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rollNumber: this.state.rollNumber,
        mobileNumber: this.state.mobileNumber
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.response == "success") {
          this.setState({
            isLoading: false,
          }, function () {
            this.props.navigation.navigate('Login');
          });
        }
        else{
          this.setState({
            isLoading: false,
          })
          Alert.alert('Error', "Please reload to continue",
          [
            { text: 'Reload', onPress: () => {
              this.writeUserData();
            } },
          ]
        );
        console.error(error);
        }
        // alert(JSON.stringify(responseJson));
      })
      .catch((error) => {
        this.setState({
          isLoading: false,

        })
        Alert.alert('Error', "Check the Internet Connection",
          [
            { text: 'Reload', onPress: () => {
              this.writeUserData();
            } },
          ]
        );
        console.error(error);
      });
  }
  login = () => {
    let a = false;
    if (!this.checkUsername(this.state.rollNumber)) {
      this.setState({ rollError: '* Please enter the correct Roll Number' });
      a = true;
    }
    else {
      this.setState({ rollError: '' })
    }
    if (!this.checkMobile(this.state.mobileNumber)) {
      this.setState({ mobileError: '* Please enter the correct Mobile Number' });
      a = true;
    }
    else {
      this.setState({ mobileError: '' })
    }
    if (!a) {
      this.writeUserData();
    }
    else {
      // 
    }
  }

  render() {
    return (

      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
        source={require('../assets/background.png')}>

        <ScrollView>
          <View style={styles.logo}>
            <Image
              source={require('../assets/Signupillustration.png')}
              style={{
                width: ThemeUtils.relativeWidth(50),
                height: ThemeUtils.relativeHeight(20),
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={styles.input}>
            <Fumi
              label={'Roll Number'}
              iconClass={FontAwesomeIcon}
              iconName={'user'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              autoCapitalize={'characters'}
              onChangeText={(rollNumber) => this.setState({ rollNumber })}
              inputStyle={{ color: 'black' }}
              value={this.state.rollNumber}

            />
          </View>
          {
            this.state.rollError != '' &&
            <>
              <Text style={{
                color: 'red',
                textAlign: 'right',
                marginRight: ThemeUtils.relativeWidth(15),
                fontSize: ThemeUtils.responsiveFontSize(15),
              }}>
                {this.state.rollError}
              </Text>
            </>
          }
          <View style={styles.input}>
            <Fumi
              label={'Mobile Number'}
              iconClass={FontAwesomeIcon}
              iconName={'phone'}
              iconColor={'#f95a25'}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              autoCapitalize={'characters'}
              onChangeText={(mobileNumber) => this.setState({ mobileNumber })}
              inputStyle={{ color: 'black' }}
              value={this.state.mobileNumber}
            />
          </View>
          {
            this.state.mobileError != '' &&
            <>
              <Text style={{
                color: 'red',
                textAlign: 'right',
                marginRight: ThemeUtils.relativeWidth(15),
                fontSize: ThemeUtils.responsiveFontSize(15),
              }}>
                {this.state.mobileError}
              </Text>
            </>
          }
          <TouchableOpacity style={styles.button}
            onPress={() => {
              this.login();
            }
            }>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
          {this.state.isLoading &&
            <ActivityIndicator />
          }
        </ScrollView>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: ThemeUtils.relativeHeight(20),
    width: ThemeUtils.relativeWidth(100),
    alignSelf: 'center',
    alignItems: 'center',
    margin: ThemeUtils.relativeWidth(2)
  },
  input: {
    margin: ThemeUtils.relativeWidth(5),
    marginLeft: ThemeUtils.relativeWidth(10),
    marginRight: ThemeUtils.relativeWidth(10),
    width: ThemeUtils.relativeWidth(80),
    backgroundColor: 'white'
  },
  button: {
    borderRadius: ThemeUtils.relativeHeight(5),
    borderColor: 'white',
    borderWidth: ThemeUtils.relativeHeight(0.2),
    margin: ThemeUtils.relativeWidth(5),
    height: ThemeUtils.relativeHeight(7),
    width: ThemeUtils.relativeWidth(35),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: ThemeUtils.responsiveFontSize(30),
    fontWeight: "normal",
    color: 'white',
  },
});
