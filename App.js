import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>FOODie APP</Text>
      <StatusBar style="auto" />
      <Image style={styles.img} source={require("./assets/pngwing.com.png")} />
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
          style={styles.touch}
        >
          <Text style={styles.txt}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
            fontSize: 25,
          }}
        >
          Hi CYCODE
        </Text>
        <Image
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            marginRight: 30,
            marginTop: 10,
          }}
          source={require("./assets/img.png")}
        />
      </View>
      <View>
        <Text style={{ fontSize: 18, marginLeft: 20 }}>Order and Eat</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
            padding: 15,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            backgroundColor: "#dcdcdc",
          }}
        >
          <TextInput placeholder="Order Your Food"></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: 380,
            height: 130,
            backgroundColor: "#f08080",
            marginLeft: 20,
            marginTop: 3,
            borderRadius: 20,
          }}
        >
          <Image
            style={{ height: 150, width: 130, marginLeft: 10 }}
            source={require("./assets/rider.png")}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 30,
              marginLeft: 15,
            }}
          >
            Free Delivery{"\n"} on Campus
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 30,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Category
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#dcdcdc",
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ height: 50, width: 50, marginLeft: 15, marginTop: 15 }}
              source={require("./assets/pizza.png")}
            />
          </View>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#dcdcdc",
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ height: 50, width: 50, marginLeft: 15, marginTop: 15 }}
              source={require("./assets/burger.png")}
            />
          </View>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#dcdcdc",
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ height: 50, width: 50, marginLeft: 15, marginTop: 15 }}
              source={require("./assets/fries.png")}
            />
          </View>
          <View
            style={{
              width: 80,
              height: 80,
              backgroundColor: "#dcdcdc",
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 10,
              marginRight: 10,
            }}
          >
            <Image
              style={{ height: 50, width: 50, marginLeft: 15, marginTop: 15 }}
              source={require("./assets/coke.png")}
            />
          </View>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between",}}>
          <TouchableOpacity onPress={() => navigation.navigate("Pizza")} style={{width:180,height:290,backgroundColor:"#fcfcfc",marginTop:30,marginLeft:20,borderRadius:10,}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginLeft:60,marginTop:10}}>Pizza</Text>
            <Image style={{width:160,height:160,marginLeft:10,marginTop:10}} source={require('./assets/piz.png')}/>
            <Text style={{fontWeight:'bold',fontSize:20,marginLeft:60,marginTop:10}}>$9.99</Text>
            </TouchableOpacity>      
            <TouchableOpacity TouchableOpacity onPress={() => navigation.navigate("Burger")} style={{width:180,height:290,backgroundColor:"#fcfcfc",marginTop:30,marginLeft:20,borderRadius:10,marginRight:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,marginLeft:60,marginTop:10}}>Burger</Text>
            <Image style={{width:160,height:160,marginLeft:10,marginTop:10}} source={require('./assets/burg.png')}/>
            <Text style={{fontWeight:'bold',fontSize:20,marginLeft:60,marginTop:10}}>$3.99</Text>
            </TouchableOpacity>      
  
            
            
        </View>
      </View>
    </View>
  );
}

  function PizzaScreen({navigation}){
    return(
      <View>
        <Text style={{fontWeight:'bold',fontSize:30,textAlign:"center"}}>Pepperoni Pizza</Text>
        <Text style={{fontWeight:'bold',fontSize:20,textAlign:"center",color:"red",marginTop:10}}>$9.99</Text>
        <Image style={{width:350,height:350,marginTop:60,marginLeft:30}} source={require('./assets/piz.png')}/>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
          <TouchableOpacity style={{backgroundColor:'red',width:60,height:60,marginLeft:90,borderRadius:10}}>
            <Text style={{color:'#fff',fontSize:50,marginLeft:20}}>-</Text>
          </TouchableOpacity>
          <Text style={{marginTop:10,fontWeight:'bold',fontSize:30}}>2</Text>
          <TouchableOpacity style={{backgroundColor:'red',width:60,height:60,marginRight:90,borderRadius:10}}>
          <Text style={{color:'#fff',fontSize:50,marginLeft:15}}>+</Text>

          </TouchableOpacity>

        </View>
            <View>
              <Text style={{marginLeft:50,marginTop:30,fontSize:20}}>sliced pepperonis, cheese, black {"\n"} pepper, sliced tomatoes, pizza sauce</Text>
            </View>
            <TouchableOpacity style={{width:340,height:70,backgroundColor:'red',borderRadius:50,marginTop:20,marginLeft:40}}>
              <Text style={{textAlign:'center',color:"#fff",fontSize:30,fontWeight:'bold',marginTop:15}}>Add To Cart</Text>
            </TouchableOpacity>
      </View>
    )
  }

  function BurgerScreen({navigation}){
    return(
      <View>
        <Text style={{fontWeight:'bold',fontSize:30,textAlign:"center"}}>Burger</Text>
        <Text style={{fontWeight:'bold',fontSize:20,textAlign:"center",color:"red",marginTop:10}}>$3.99</Text>
        <Image style={{width:350,height:350,marginTop:60,marginLeft:30}} source={require('./assets/burg.png')}/>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
          <TouchableOpacity style={{backgroundColor:'red',width:60,height:60,marginLeft:90,borderRadius:10}}>
            <Text style={{color:'#fff',fontSize:50,marginLeft:20}}>-</Text>
          </TouchableOpacity>
          <Text style={{marginTop:10,fontWeight:'bold',fontSize:30}}>2</Text>
          <TouchableOpacity style={{backgroundColor:'red',width:60,height:60,marginRight:90,borderRadius:10}}>
          <Text style={{color:'#fff',fontSize:50,marginLeft:15}}>+</Text>

          </TouchableOpacity>

        </View>
            <View>
              <Text style={{marginLeft:50,marginTop:30,fontSize:20}}>sliced pepperonis, cheese, black {"\n"} pepper, sliced tomatoes, pizza sauce</Text>
            </View>
            <TouchableOpacity style={{width:340,height:70,backgroundColor:'red',borderRadius:50,marginTop:20,marginLeft:40}}>
              <Text style={{textAlign:'center',color:"#fff",fontSize:30,fontWeight:'bold',marginTop:15}}>Add To Cart</Text>
            </TouchableOpacity>
      </View>
    )
  }


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "orange",
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name="Burger" component={BurgerScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
  },
  txt1: {
    marginTop: 10,
    fontWeight: "bold",
    color: "#000",
    fontSize: 30,
  },

  img: {
    width: 350,
    height: 350,
    marginTop: 100,
  },

  touch: {
    width: 350,
    borderRadius: 20,
    height: 70,
    backgroundColor: "red",
    marginTop: 200,
  },
  txt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 15,
    color: "#fff",
  },
});
