import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [greeting, setGreeting] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleCreateCard = () => {
    setShowCard(true);
  };

  return (
    <View style={styles.container}>
      {!showCard ? (
        <View>
          <Image source={require('./assets/birthday_image.png')} style={styles.image} />
          <TextInput
            style={styles.input}
            placeholder="Enter your greeting message"
            onChangeText={text => setGreeting(text)}
            value={greeting}
          />
          <Button title="Create Card" onPress={handleCreateCard} />
        </View>
      ) : (
        <View style={[styles.card, styles.decoratedCard]}>
          <Text style={styles.messageText}>{greeting}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFCCFF', 
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  decoratedCard: {
    borderColor: '#ff6b6b',
    borderWidth: 2,
  },
  messageText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
