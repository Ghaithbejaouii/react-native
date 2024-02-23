import React from 'react'
import {Image,StyleSheet, TouchableOpacity} from 'react-native';
import { Box,Text,Heading, VStack, FormControl, Input,Button, Link, HStack, Center, View } from "native-base";

export default function Login({navigation,route}) {
  const {setUser}=route.params
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      width: 100,
      height: 300,     
}});
const onPress=() =>
  navigation.navigate('Signup');
  return (
    <Center>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <View style={{alignItems :"center"}}>
        <Image source={require('../../assets/logo_login.png')} style={styles.container} ></Image>
        </View>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        
        
          <Text>Welcome</Text>
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
           <Button mt="2" colorScheme="indigo" onPress={() =>setUser(true) }>
           Sign in
          </Button> 
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <View>
            <TouchableOpacity  onPress={onPress}>
        <Text style={{textDecorationLine:"underline", color:"#0000FF"}}>Signup</Text>
      </TouchableOpacity>
    </View>
           
          </HStack>
        </VStack>
      </Box>
    </Center>
  )
}