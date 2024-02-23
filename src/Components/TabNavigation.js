import { View, Text } from 'react-native'
import React from 'react'

export default function TabNavigation() {
  return (
    <View style={{width:'100%',height:70,backgroundColor:'black'}}>
        <View style={{ flex: 1, justifyContent: 'between',color:'white' }}>
          <Text>Settings!</Text>
          <Text>Home</Text> 
        </View>
    </View>
        
      );
}