import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import ThemeUtils from '../assets/ThemeUtils';

export default class LoginPage extends Component {
  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
        source={require('../assets/background.png')}>
        <ScrollView>
          <View style={styles.logo}>
            <Image
              source={require('../assets/Techfeed_Logo.png')}
              style={{
                width: ThemeUtils.relativeWidth(35),
                height: ThemeUtils.relativeHeight(35),
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={styles.illustrations}>
            <Image
              source={require('../assets/LoginIllustrations.png')}
              style={{
                width: ThemeUtils.relativeWidth(90),
                height: ThemeUtils.relativeHeight(70),
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={styles.logintab}>
            <TouchableOpacity style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Login')
            }
          }>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('SignUp')
            }
          }
              >
              <Text style={styles.text}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: ThemeUtils.relativeHeight(3),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width:ThemeUtils.relativeWidth(100),
    height:ThemeUtils.relativeHeight(25)
  },
  illustrations: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: ThemeUtils.relativeHeight(3),
    width:ThemeUtils.relativeWidth(100),
    height:ThemeUtils.relativeHeight(45)
    
  },
  button: {
    borderRadius: ThemeUtils.relativeHeight(5),
    borderColor:'white',
    borderWidth: ThemeUtils.relativeHeight(0.2),
    margin: ThemeUtils.relativeWidth(5),
    height: ThemeUtils.relativeHeight(10),
    width: ThemeUtils.relativeWidth(40),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    
  },
  logintab: {
    flexDirection: 'row',
    marginTop: ThemeUtils.relativeHeight(3),
  },
  text: {
    fontSize: ThemeUtils.responsiveFontSize(30),
    fontWeight: "normal",
    color:'white',
  },
});
