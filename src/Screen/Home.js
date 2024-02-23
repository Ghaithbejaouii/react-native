import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { Button,ScrollView,Text } from "native-base";
import Cards from "../Components/Cards";
import { FlatList } from "react-native";
import data from "../data.json";
import TabNavigation from "../Components/TabNavigation";


export default function Home() {
  const styles = StyleSheet.create({
    tinyLogo: {
      width: "100%",
      height: 300,
    },
    btn: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginRight:10,
    },
    logo: {
        width: 30,
        height: 30,
      },
  });
  

  return (
    
    <View style={{ backgroundColor: "white", gap: 20, flex: 1 }}>
      <View style={{ justifyContent: "center", fontSize: 20, paddingTop: 20,flexDirection:"row", gap:2 }}>
        <Image style={styles.logo} source={require("../../assets/logo_login.png")}/>
        <Text style={{ fontWeight: 'bold',fontSize: 15 }}>Location</Text>
      </View>

      <View>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/villa.jpg")}
        ></Image>
      </View>
      <View style={{ justifyContent:"space-between",flexDirection:"row"  }}>
      <Text style={{fontWeight:'bold',fontSize:15,paddingLeft:10}}>available home</Text>
        <Button  style={styles.btn}>
          <Text style={{fontSize:15,lineHeight: 21,letterSpacing: 0.25,color:"white",}}>Show more</Text>
        </Button>
      </View>
      <ScrollView>
      <FlatList data={data} renderItem={({item}) =>{
        return <Cards item={item}/>
      }} />
      </ScrollView>
      <TabNavigation/>
    </View>
    
  );
}
