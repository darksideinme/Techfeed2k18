import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Timeline from './Timeline';
import Line from '../assets/Timeline/line.svg';

import ThemeUtils from '../assets/ThemeUtils';

export default class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Day: [
        [
          ["08:30-09:30", "Computational Mathematics with Python", "A-215"],
          ["9:30-10:30", "Linear Algebra", "D-215"],
          ["8:30-9:30", "Optimization Techniques", "A-215"],
          ["9:30-10:30", "Linear Algebra", "D-215"],
          ["9:30-10:30", "Linear Algebra", "D-215"],
          ["9:30-10:30", "Linear Algebra", "D-215"],
          ["9:30-10:30", "Linear Algebra", "D-215"],
          ["9:30-10:30", "Linear Algebra", "D-215"],
          ["9:30-10:30", "Linear Algebra", "D-215"],
        ],
      ]
    };
    this.dayid = this.props.day;
    this.array = this.state.Day[this.dayid];
    this.checkTimetable();
  }

  checkTimetable() {
    var length = this.array.length;
    this.number = [];
    for (let index = 0; index < Math.ceil(length / 4); index++) {
      this.number[index] = 0
    }
    this.timeLength = [];
    this.nameLength = [];
    this.classLength = [];
    for (let index = 0; index < length; index++) {
      this.timeLength[index] = this.array[index][0].length;
      this.nameLength[index] = this.array[index][1].length;
      this.classLength[index] = this.array[index][2].length;
    }
  }
  render() {
    const timeline = this.array.map((item, key) => (
      <Timeline key={key} keyValue={key}
        subjectName={item[1]} subjectClass={item[2]}
        timeSize={this.timeLength[key]}
        nameSize={this.nameLength[key]}
        classSize={this.classLength[key]}
        time={item[0]}
        navigation={this.props.navigation} />
    ));

    const line = this.number.map((item, key) =>
      <View style={styles.line}>
        <Line 
        navigation={this.props.navigation}/>
      </View>
    );

    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.lineContainer}>
          {line}
        </View>
        <View>
          {timeline}
        </View>
      </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingBottom:ThemeUtils.relativeHeight(10),
  },
  lineContainer: {
    position: 'absolute',
    left: '43.7%',
    marginTop: '5%'
  },
  line: {
    marginTop: '-100%'
  }
})
app.navigationOptions = {
  header: null,
};