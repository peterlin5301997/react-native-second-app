import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  return (
    // allows us to merge and overwrite styles
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    // Shadow iOS only
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // elevation android only
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;
