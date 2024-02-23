import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
const Cards = ({item}) => {

const navigate = useNavigation()


return (  <Card>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button
        title="Details"
        onPress={() => {
          navigate.navigate('Details',{data:item});}}/>
    </Card.Actions>
    <Card.Content>
      <Text variant="titleLarge">title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
  </Card>)
};

export default Cards;