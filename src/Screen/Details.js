
import React from 'react'
import {Button, Card, Text } from 'react-native-paper';

export default function Details({route, navigation}) {
    const { data} = route.params;
    console.log(data,"this data");
  return (
    <Card>
    <Card.Cover  source={{ uri: data.image }} />
    <Card.Content>
      <Text variant="titleLarge">{data.name}</Text>
      <Text variant="bodyMedium">{data.price}Tnd</Text>
      <Text>{data.description}</Text>
    </Card.Content>
  </Card>
  )
}