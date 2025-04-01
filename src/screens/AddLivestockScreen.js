import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title, HelperText, Card, Chip, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const AddLivestockScreen = ({ navigation }) => {
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [quantity, setQuantity] = useState('');
  const [acquisitionDate, setAcquisitionDate] = useState('');
  const [lastVaccination, setLastVaccination] = useState('');
  const [expectedProducts, setExpectedProducts] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    // In a real app, this would save the data to a database
    console.log({
      type,
      breed,
      quantity,
      acquisitionDate,
      lastVaccination,
      expectedProducts,
      notes
    });
    
    // Navigate back to the Farm Records screen
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Add New Livestock</Title>
          
          <TextInput
            label="Livestock Type"
            value={type}
            onChangeText={setType}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., Cattle, Goats, Chicken"
          />
          
          <TextInput
            label="Breed"
            value={breed}
            onChangeText={setBreed}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., Holstein, Boer, Broiler"
          />
          
          <TextInput
            label="Quantity"
            value={quantity}
            onChangeText={setQuantity}
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
          />
          
          <TextInput
            label="Acquisition Date (YYYY-MM-DD)"
            value={acquisitionDate}
            onChangeText={setAcquisitionDate}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., 2023-06-15"
          />
          
          <TextInput
            label="Last Vaccination Date (YYYY-MM-DD)"
            value={lastVaccination}
            onChangeText={setLastVaccination}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., 2023-05-10"
          />
          
          <TextInput
            label="Expected Products"
            value={expectedProducts}
            onChangeText={setExpectedProducts}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., Milk, Meat, Eggs"
          />
          
          <TextInput
            label="Notes"
            value={notes}
            onChangeText={setNotes}
            mode="outlined"
            style={styles.input}
            multiline
            numberOfLines={4}
          />
          
          <View style={styles.buttonContainer}>
            <Button 
              mode="contained" 
              onPress={handleSubmit} 
              style={styles.submitButton}
            >
              Save Livestock
            </Button>
            <Button 
              mode="outlined" 
              onPress={() => navigation.goBack()} 
              style={styles.cancelButton}
            >
              Cancel
            </Button>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 12,
  },
  card: {
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    flex: 1,
    marginLeft: 8,
    borderColor: '#757575',
  },
});

export default AddLivestockScreen;
