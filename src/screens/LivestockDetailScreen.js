import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, Divider, Text, Chip, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const LivestockDetailScreen = ({ route, navigation }) => {
  // In a real app, we would fetch this data from a database
  // For now, we'll use the data passed from the navigation params or mock data
  const livestock = route.params?.livestock || {
    id: 1,
    type: 'Cattle',
    breed: 'Holstein',
    quantity: 5,
    acquisitionDate: '2022-01-15',
    status: 'Healthy',
    lastVaccination: '2023-05-10',
    expectedProducts: 'Milk, 15L daily',
    activities: [
      { id: 1, date: '2023-05-10', type: 'Vaccination', details: 'Annual vaccination against foot and mouth disease' },
      { id: 2, date: '2023-04-15', type: 'Health Check', details: 'Regular health check by veterinarian' },
      { id: 3, date: '2023-03-20', type: 'Feeding Change', details: 'Changed to high-protein feed mix' },
    ],
    expenses: [
      { id: 1, date: '2023-05-08', item: 'Vaccines', amount: '30,000 RWF' },
      { id: 2, date: '2023-04-15', item: 'Veterinary Services', amount: '25,000 RWF' },
      { id: 3, date: '2023-03-18', item: 'Feed', amount: '120,000 RWF' },
    ],
    production: [
      { id: 1, date: '2023-06-01', product: 'Milk', quantity: '75 liters', value: '45,000 RWF' },
      { id: 2, date: '2023-05-25', product: 'Milk', quantity: '72 liters', value: '43,200 RWF' },
      { id: 3, date: '2023-05-18', product: 'Milk', quantity: '78 liters', value: '46,800 RWF' },
    ],
    notes: 'The Holstein cows are performing well with the new feeding regimen. Milk production has increased by approximately 10% in the last month.'
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.headerContainer}>
            <View>
              <Title style={styles.title}>{livestock.type}</Title>
              <Paragraph style={styles.subtitle}>Breed: {livestock.breed}</Paragraph>
            </View>
            <Chip 
              mode="outlined" 
              style={[
                styles.statusChip, 
                { 
                  backgroundColor: 
                    livestock.status === 'Healthy' ? '#E8F5E9' : 
                    livestock.status === 'Sick' ? '#FFEBEE' : '#FFF9C4'
                }
              ]}
            >
              {livestock.status}
            </Chip>
          </View>
          
          <Divider style={styles.divider} />
          
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Ionicons name="calculator-outline" size={20} color="#4CAF50" />
                <Text style={styles.infoLabel}>Quantity:</Text>
                <Text style={styles.infoValue}>{livestock.quantity}</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="calendar-outline" size={20} color="#4CAF50" />
                <Text style={styles.infoLabel}>Acquired:</Text>
                <Text style={styles.infoValue}>{livestock.acquisitionDate}</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Ionicons name="medkit-outline" size={20} color="#FF9800" />
                <Text style={styles.infoLabel}>Last Vaccination:</Text>
                <Text style={styles.infoValue}>{livestock.lastVaccination}</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="basket-outline" size={20} color="#FF9800" />
                <Text style={styles.infoLabel}>Products:</Text>
                <Text style={styles.infoValue}>{livestock.expectedProducts}</Text>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
      
      {/* Production */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Production</Title>
          {livestock.production.map((item) => (
            <View key={item.id}>
              <View style={styles.productionItem}>
                <View style={styles.productionInfo}>
                  <Text style={styles.productionProduct}>{item.product}</Text>
                  <Text style={styles.productionDate}>{item.date}</Text>
                </View>
                <View style={styles.productionQuantity}>
                  <Text style={styles.productionQuantityText}>{item.quantity}</Text>
                  <Text style={styles.productionValue}>{item.value}</Text>
                </View>
              </View>
              <Divider style={styles.divider} />
            </View>
          ))}
          <Button 
            mode="outlined" 
            icon="plus" 
            style={styles.addButton}
            onPress={() => console.log('Add production')}
          >
            Add Production
          </Button>
        </Card.Content>
      </Card>
        {/* Activities */}
        <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Activities</Title>
          {livestock.activities.map((activity) => (
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
          {livestock.expenses.map((expense) => (
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
          <Paragraph style={styles.notes}>{livestock.notes}</Paragraph>
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
          onPress={() => console.log('Edit livestock')}
        >
          Edit Livestock
        </Button>
        <Button 
          mode="contained" 
          icon="delete" 
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => {
            console.log('Delete livestock');
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
  productionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  productionInfo: {
    flex: 1,
  },
  productionProduct: {
    fontSize: 16,
    fontWeight: '500',
  },
  productionDate: {
    fontSize: 14,
    color: '#757575',
  },
  productionQuantity: {
    alignItems: 'flex-end',
  },
  productionQuantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productionValue: {
    fontSize: 14,
    color: '#4CAF50',
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

export default LivestockDetailScreen;
