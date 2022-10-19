import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons' //Imagenes prediseñadas
import { TouchableOpacity } from 'react-native-web';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: 'white',
          activeBackgroundColor: 'green',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Home"
          component={Home}
          options={{title: 'Home', tabBarIcon:({color, size})=>
            (<Ionicons name="home" color={'gray'} size={18}/>)
          }} 
        />
        <Tab.Screen 
          name="Settings"
          component={Settings}
          options={{title: 'Settings', tabBarIcon:({color, size})=>
            (<Ionicons name="settings" color={'gray'} size={18}/>)
          }} 
        />
        <Tab.Screen 
          name="Contact"
          component={Contact}
          options={{title: 'Contact', tabBarIcon:({color, size})=>
            (<Ionicons name="person" color={'gray'} size={18}/>)
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Home(){
  return (
    <View style={styles.container}>
      <Text>Estamos en el inicio</Text>
    </View>
  );
}

function Settings(){
  return (
    <View style={styles.container}>
      <Text>Estamos en la configuracion</Text>
    </View>
  )
}

const Contact = () => {
  const [selectedValue, setSelectedValue] = useState("instagram");
  const mostrarOpcion = () => {
    alert(`Opcion seleccionada ${selectedValue}`)
  }
  return (
    <View style={styles.container}>
      <Text>Contacto</Text>
      
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Facebook" value="facebook" />
        <Picker.Item label="Instagram" value="instagram" />
      </Picker>
      <TouchableOpacity
        style={{padding:10, borderRadius:5, backgroundColor: 'green', marginTop:5}}
        onPress={mostrarOpcion}
      >
        <Text>Mostrar opcion seleccionada</Text>

      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
