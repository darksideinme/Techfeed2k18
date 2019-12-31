import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ThemeUtils from '../assets/ThemeUtils';
import BlueBlock from '../assets/Timeline/BlueBlock.svg'
import OrangeBlock from '../assets/Timeline/Orangeblock.svg'
import RedBlock from '../assets/Timeline/Redblock.svg'
import PinkBlock from '../assets/Timeline/Pinkblock.svg'
import DarkBlueBlock from '../assets/Timeline/Darkblueblock.svg'


export default class Feed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var block;
    var timecolor;

    switch (this.props.keyValue % 5) {
      case 0:
        block = <PinkBlock width={'100%'} height={'100%'} />;
        timecolor = '#B61173'
        break;
      case 1:
        block = <OrangeBlock width={'100%'} height={'100%'} />;
        timecolor = '#FF8100'
        break;
      case 2:
        block = <RedBlock width={'100%'} height={'100%'} />;
        timecolor = '#E0335E'
        break;
      case 3:
        block = <DarkBlueBlock width={'100%'} height={'100%'} />;
        timecolor = '#0082B7'
        break;
      case 4:
        block = <BlueBlock width={'100%'} height={'100%'} />;
        timecolor = '#00ADB5';
        break;
    }
    var name = this.props.nameSize;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.timetableContainer}>
            <View style={styles.timeContainer}>
              <Text style={[styles.timeText, {
                color: timecolor,
                fontSize: ThemeUtils.responsiveFontSize(20) * (10 / this.props.timeSize)
              }]}>
                {this.props.time}</Text>
            </View>
            <TouchableOpacity style={styles.feedContainer}>
              {block}
              <View style={styles.subjectContainer}>
                <Text style={[styles.subjectText,

                name > 17 ? {
                  fontSize: ThemeUtils.responsiveFontSize(15)
                    * (21 / this.props.nameSize)
                } : {}
                ]} >{this.props.subjectName}</Text>
              </View>
              <View style={styles.numberContainer}>
                <Text style={[styles.numberText,
                this.props.classSize > 5 ? {
                  fontSize: ThemeUtils.responsiveFontSize(14)
                    * (5 / this.props.classSize)
                } : {}]}>{this.props.subjectClass}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  timetableContainer: {

    height: ThemeUtils.relativeHeight(10),
    width: ThemeUtils.relativeWidth(97),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeContainer: {
    marginTop: '2.5%',
    marginLeft: '1%',
    marginRight: '1%',
    width: '30%'
  },
  timeText: {
    textAlign: 'center',
  },
  feedContainer: {
    flex: 1
  },
  subjectContainer: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    height: '70%',
    width: '37%',
    // backgroundColor:'black',
    justifyContent: 'center',
  },
  numberContainer: {
    position: 'absolute',
    top: '0%',
    left: '70%',
    height: '70%',
    width: '37%',
    // backgroundColor:'black',
    justifyContent: 'center'
  },
  numberText: {
    color: 'white',
    fontFamily: 'Georgia',
    textAlign: 'center',
    fontSize: ThemeUtils.responsiveFontSize(14)
  },
  subjectText: {
    color: '#606060',
    textAlign: 'center',
    fontSize: ThemeUtils.responsiveFontSize(15)
  }

})