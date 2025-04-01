import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { TextInput, Button, Title, HelperText, Card, Chip, Text, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const MarketListingScreen = ({ navigation }) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const categories = [
    'Crops', 'Vegetables', 'Fruits', 'Dairy', 'Meat', 'Poultry', 'Seeds', 'Equipment', 'Other'
  ];

  const units = [
    'kg', 'g', 'ton', 'liter', 'piece', 'sack', 'crate', 'box'
  ];

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const handleSubmit = () => {
    // In a real app, this would save the data to a database
    console.log({
      productName,
      category,
      quantity,
      unit,
      price,
      description,
      images
    });
    
    // Navigate back to the Marketplace screen
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Create Market Listing</Title>
          
          <TextInput
            label="Product Name"
            value={productName}
            onChangeText={setProductName}
            mode="outlined"
            style={styles.input}
          />
          
          <Text style={styles.sectionLabel}>Category</Text>
          <View style={styles.chipContainer}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                selected={category === cat}
                onPress={() => setCategory(cat)}
                style={styles.chip}
                selectedColor="#4CAF50"
              >
                {cat}
              </Chip>
            ))}
          </View>
          
          <View style={styles.quantityContainer}>
            <TextInput
              label="Quantity"
              value={quantity}
              onChangeText={setQuantity}
              mode="outlined"
              style={styles.quantityInput}
              keyboardType="numeric"
            />
            
            <View style={styles.unitSelector}>
              <Text style={styles.sectionLabel}>Unit</Text>
              <View style={styles.chipContainer}>
                {units.map((u) => (
                  <Chip
                    key={u}
                    selected={unit === u}
                    onPress={() => setUnit(u)}
                    style={styles.unitChip}
                    selectedColor="#4CAF50"
                  >
                    {u}
                  </Chip>
                ))}
              </View>
            </View>
          </View>
          
          <TextInput
            label="Price (RWF)"
            value={price}
            onChangeText={setPrice}
            mode="outlined"
            style={styles.input}
            keyboardType="numeric"
          />
          
          <TextInput
            label="Description"
            value={description}
            onChangeText={setDescription}
            mode="outlined"
            style={styles.input}
            multiline
            numberOfLines={4}
          />
          
          <Text style={styles.sectionLabel}>Product Images</Text>
          <View style={styles.imagesContainer}>
            {images.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.productImage} />
            ))}
            <Button 
              mode="outlined" 
              onPress={pickImage} 
              style={styles.addImageButton}
              icon="camera"
            >
              Add Image
            </Button>
          </View>
          
          <Divider style={styles.divider} />
          
          <View style={styles.buttonContainer}>
            <Button 
              mode="contained" 
              onPress={handleSubmit} 
              style={styles.submitButton}
              disabled={!productName || !category || !quantity || !unit || !price}
            >
              Create Listing
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
  sectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#555',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  chip: {
    margin: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityInput: {
    flex: 1,
    marginRight: 8,
    backgroundColor: 'white',
  },
  unitSelector: {
    flex: 1,
    marginLeft: 8,
  },
  unitChip: {
    margin: 2,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 4,
  },
  addImageButton: {
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderStyle: 'dashed',
  },
  divider: {
    marginVertical: 16,
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

export default MarketListingScreen;
