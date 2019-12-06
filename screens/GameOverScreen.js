import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card>
        <Text style={styles.title}>The Game is Over!</Text>
        <Text style={styles.details}>Number of Rounds: {props.rounds}</Text>
        <Text style={styles.details}>Number was: {props.userNumber}</Text>
        <View style={styles.buttonContainer}>
          <Button title='NEW GAME' onPress={props.onRestart} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: Colors.accent
  },
  details: {
    fontSize: 15,
    marginVertical: 5
  }
})

export default GameOverScreen;
