import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'
import { Ionicons } from '@expo/vector-icons'
import * as Animation from 'react-native-animatable'

export default function TaskList({ data, handleDelete }) {
  return(
    <Animation.View
      style={styles.container}
      animation="bounceIn"
      useNativeDriver
    >
      <TouchableOpacity onPress={ () => handleDelete(data) }>
        <Ionicons name="md-checkmark-circle" size={30} color="#000" />
      </TouchableOpacity>
      <View>
        <Text style={styles.stylesTask}> {data.task} </Text>
      </View>
    </Animation.View>
  );
}