import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SignIn from '../pages/signin'
import Passeios from '../pages/passeios'
import Jogadores from '../pages/jogadores'
import Cogumelo from '../pages/cogumelo'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { Welcome }
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="SignIn" 
        component= { SignIn } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Passeios" 
        component= { Passeios } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Jogadores" 
        component= { Jogadores } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Cogumelo" 
        component= { Cogumelo } 
        options= { {headerShown: false} }
        />
    </Stack.Navigator>
  )
}