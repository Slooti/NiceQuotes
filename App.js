import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const data = [
  {text: 'Probleme kann man nicht mit derselben Denkweise lösen, wie sie entstanden sind.', author: 'Albert Einstein'},
  {text: 'Man braucht nichts im Leben zu rüchten, man muss nur alles verstehen.', author: 'Marie Curie'},
  {text: 'Nichts ist so beständig wie der Wandel.', author: 'Heraklit'}
]

export default class App extends Component {
  state = {
    index: 0
  };

  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    if (nextIndex == data.length) nextIndex = 0;
  
    return (    
      <View style={styles.container}>
        <Text>
          {quote.text}
        </Text>
        <Text>-- {quote.author}</Text>
        <Button 
          title="Nächstes Zitat" 
          onPress={() =>
            this.setState({ index: nextIndex})} 
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
