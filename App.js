import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const data = [
  {text: 'Probleme kann man nicht mit derselben Denkweise lösen, wie sie entstanden sind.', author: 'Albert Einstein'},
  {text: 'Man braucht nichts im Leben zu rüchten, man muss nur alles verstehen.', author: 'Marie Curie'},
  {text: 'Nichts ist so beständig wie der Wandel.', author: 'Heraklit'}
]

export default class App extends Component {
  render() {

    const quote = data[2];

    return (
      <View style={styles.container}>
        <Text>
          {quote.text}
        </Text>
        <Text>-- {quote.author}</Text>
        <Button 
          title="Nächstes Zitat" 
          onPress={() => alert('Es klappt!')} 
          />
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
