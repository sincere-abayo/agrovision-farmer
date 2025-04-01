import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Divider, Text, Chip, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const CropDetailScreen = ({ route, navigation }) => {
  // In a real app, you would fetch this data from a database
  // For now, we'll use the data passed from the navigation params or mock data
  const crop = route.params?.crop || {
    id: 1,
    name: 'Maize',
    variety: 'Hybrid 614',
    area: '2 acres',
    plantingDate: '2025-03-01',
    status: 'Growing',
    expectedHarvest: '2025-06-20',
    estimatedYield: '4 tons',
    activities: [
      { id: 1, date: '2025-03-01', type: 'Planting', details: 'Planted with 50kg of seeds' },
      { id: 2, date: '2025-03-25', type: 'Fertilization', details: 'Applied 100kg of NPK fertilizer' },
      { id: 3, date: '2025-04-10', type: 'Pest Control', details: 'Sprayed for fall armyworm' },
    ],
    expenses: [
      { id: 1, date: '2025-03-20', item: 'Seeds', amount: '25,000 RWF' },
      { id: 2, date: '2025-04-08', item: 'Fertilizer', amount: '40,000 RWF' },
      { id: 3, date: '2025-04-13', item: 'Pesticides', amount: '15,000 RWF' },
    ],
    notes: 'The crop is growing well despite some initial challenges with rainfall. Expecting a good harvest if weather conditions remain favorable.'
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.headerContainer}>
            <View>
              <Title style={styles.title}>{crop.name}</Title>
              <Paragraph style={styles.subtitle}>Variety: {crop.variety}</Paragraph>
            </View>
            <Chip 
              mode="outlined" 
              style={[
                styles.statusChip, 
                { 
                  backgroundColor: 
                    crop.status === 'Ready for Harvest' ? '#E8F5E9' : 
                    crop.status === 'Growing' ? '#E3F2FD' : '#FFF9C4'
                }
              ]}
            >
              {crop.status}
            </Chip>
          </View>
          
          <Divider style={styles.divider} />
          
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Ionicons name="resize-outline" size={20} color="#4CAF50" />
                <Text style={styles.infoLabel}>Area:</Text>
                <Text style={styles.infoValue}>{crop.area}</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="calendar-outline" size={20} color="#4CAF50" />
                <Text style={styles.infoLabel}>Planted:</Text>
                <Text style={styles.infoValue}>{crop.plantingDate}</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Ionicons name="calendar" size={20} color="#FF9800" />
                <Text style={styles.infoLabel}>Harvest:</Text>
                <Text style={styles.infoValue}>{crop.expectedHarvest}</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="trending-up" size={20} color="#FF9800" />
                <Text style={styles.infoLabel}>Est. Yield:</Text>
                <Text style={styles.infoValue}>{crop.estimatedYield}</Text>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
      
      {/* Activities */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Activities</Title>
          {crop.activities.map((activity) => (
            <View key={activity.id}>
              <View style={styles.activityItem}>
                <View style={styles.activityHeader}>
                  <View style={styles.activityDate}>
                    <Ionicons name="calendar" size={16} color="#4CAF50" />
                    <Text style={styles.activityDateText}>{activity.date}</Text>
                  </View>
                  <Chip compact style={styles.activityType}>{activity.type}</Chip>
                </View>
                <Text style={styles.activityDetails}>{activity.details}</Text>
              </View>
              <Divider style={styles.divider} />
            </View>
          ))}
          <Button 
            mode="outlined" 
            icon="plus" 
            style={styles.addButton}
            onPress={() => console.log('Add activity')}
          >
            Add Activity
          </Button>
        </Card.Content>
      </Card>
      
      {/* Expenses */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Expenses</Title>
          {crop.expenses.map((expense) => (
            <View key={expense.id}>
              <View style={styles.expenseItem}>
                <View style={styles.expenseInfo}>
                  <Text style={styles.expenseItemName}>{expense.item}</Text>
                  <Text style={styles.expenseDate}>{expense.date}</Text>
                </View>
                <Text style={styles.expenseAmount}>{expense.amount}</Text>
              </View>
              <Divider style={styles.divider} />
            </View>
          ))}
          <Button 
            mode="outlined" 
            icon="plus" 
            style={styles.addButton}
            onPress={() => console.log('Add expense')}
          >
            Add Expense
          </Button>
        </Card.Content>
      </Card>
      
      {/* Notes */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Notes</Title>
          <Paragraph style={styles.notes}>{crop.notes}</Paragraph>
          <Button 
            mode="outlined" 
            icon="pencil" 
            style={styles.addButton}
            onPress={() => console.log('Edit notes')}
          >
            Edit Notes
          </Button>
        </Card.Content>
      </Card>
      
      <View style={styles.actionButtons}>
        <Button 
          mode="contained" 
          icon="pencil" 
          style={[styles.actionButton, styles.editButton]}
          onPress={() => console.log('Edit crop')}
        >
          Edit Crop
        </Button>
        <Button 
          mode="contained" 
          icon="delete" 
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => {
            console.log('Delete crop');
            navigation.goBack();
          }}
        >
          Delete
        </Button>
      </View>
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
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  statusChip: {
    height: 30,
  },
  divider: {
    marginVertical: 10,
  },
  infoSection: {
    marginVertical: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: '#757575',
  },
  infoValue: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E7D32',
  },
  activityItem: {
    marginVertical: 5,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  activityDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityDateText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#555',
  },
  activityType: {
    backgroundColor: '#E8F5E9',
  },
  activityDetails: {
    fontSize: 14,
    color: '#555',
    marginLeft: 22,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  expenseInfo: {
    flex: 1,
  },
  expenseItemName: {
    fontSize: 16,
    fontWeight: '500',
  },
  expenseDate: {
    fontSize: 14,
    color: '#757575',
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9800',
  },
  notes: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  addButton: {
    marginTop: 10,
    borderColor: '#4CAF50',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  editButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#F44336',
  },
});

export default CropDetailScreen;
