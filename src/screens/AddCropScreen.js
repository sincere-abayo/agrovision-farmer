import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Title, HelperText, Card, Chip, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const AddCropScreen = ({ navigation }) => {
  const [cropName, setCropName] = useState('');
  const [variety, setVariety] = useState('');
  const [area, setArea] = useState('');
  const [plantingDate, setPlantingDate] = useState('');
  const [expectedHarvest, setExpectedHarvest] = useState('');
  const [estimatedYield, setEstimatedYield] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    // In a real app, this would save the data to a database
    console.log({
      cropName,
      variety,
      area,
      plantingDate,
      expectedHarvest,
      estimatedYield,
      notes
    });
    
    // Navigate back to the Farm Records screen
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Add New Crop</Title>
          
          <TextInput
            label="Crop Name"
            value={cropName}
            onChangeText={setCropName}
            mode="outlined"
            style={styles.input}
          />
          
          <TextInput
            label="Variety"
            value={variety}
            onChangeText={setVariety}
            mode="outlined"
            style={styles.input}
          />
          
          <TextInput
            label="Area (acres/hectares)"
            value={area}
            onChangeText={setArea}
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
          />
          
          <TextInput
            label="Planting Date (YYYY-MM-DD)"
            value={plantingDate}
            onChangeText={setPlantingDate}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., 2023-06-15"
          />
          
          <TextInput
            label="Expected Harvest Date (YYYY-MM-DD)"
            value={expectedHarvest}
            onChangeText={setExpectedHarvest}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., 2023-09-15"
          />
          
          <TextInput
            label="Estimated Yield"
            value={estimatedYield}
            onChangeText={setEstimatedYield}
            mode="outlined"
            style={styles.input}
            placeholder="e.g., 2 tons"
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
              Save Crop
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

export default AddCropScreen;
