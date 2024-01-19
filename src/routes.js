import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Mycars } from './pages/mycars'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name='home' />
                        }
                        return <Ionicons size={size} color={color} name='home-outline' />
                    }
                }}
            />

            <Tab.Screen
                name='mycars'
                component={Mycars}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name='car' />
                        }
                        return <Ionicons size={size} color={color} name='car-outline' />
                    }
                }}
            />
        </Tab.Navigator>
    )
}