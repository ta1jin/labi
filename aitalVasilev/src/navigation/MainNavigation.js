import React, { useContext } from 'react'
import { Text } from 'react-native'
// React navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
// Custom components
import GradientIcon from '../components/GradientIcon'
import Lab2 from '../screens/Lab2'
import Lab3 from '../screens/Lab3'
import { AppContext } from '../styles/DynamicThemeProvider'

const Lab2Stack = createStackNavigator()
const Lab2StackScreen = () => {
    const context = useContext(AppContext)
    return (
        <Lab2Stack.Navigator>
            <Lab2Stack.Screen
                name="Lab2"
                component={Lab2}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor:
                            context.theme.colors
                                .cardColor,
                        height: 78
                    },
                    headerTitle: (
                        <Text
                            style={{
                                fontFamily:
                                    'Lora',
                                fontSize: 28,
                                color:
                                    context.theme
                                        .colors
                                        .textColor
                            }}
                        >
                            Цвет приложения
                        </Text>
                    )
                }}
            />
        </Lab2Stack.Navigator>
    )
}

const Lab3Stack = createStackNavigator()
const Lab3StackScreen = () => {
    const context = useContext(AppContext)
    return (
        <Lab3Stack.Navigator>
            <Lab3Stack.Screen
                name="Lab3"
                component={Lab3}
                options={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor:
                            context.theme.colors
                                .cardColor,
                        height: 78
                    },
                    headerTitle: (
                        <Text
                            style={{
                                fontFamily:
                                    'Lora',
                                fontSize: 28,
                                color:
                                    context.theme
                                        .colors
                                        .textColor
                            }}
                        >
                            Список дел
                        </Text>
                    )
                }}
            />
        </Lab3Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

const MainNavigation = () => {
    const context = useContext(AppContext)

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName

                        if (
                            route.name === 'Lab2'
                        ) {
                            iconName =
                                'color-lens'
                        }
                        if (
                            route.name === 'Lab3'
                        ) {
                            iconName =
                                'assignment'
                        }

                        return (
                            <GradientIcon
                                iconName={
                                    iconName
                                }
                                size={32}
                                color={color}
                            />
                        )
                    }
                })}
                tabBarOptions={{
                    activeTintColor:
                        context.theme.colors
                            .textColor,
                    inactiveTintColor: 'grey',
                    style: {
                        height: 70
                    },
                    tabStyle: {
                        backgroundColor:
                            context.theme.colors
                                .cardColor
                    },
                    labelStyle: {
                        fontSize: 13,
                        textAlignVertical: 'top',
                        lineHeight: 24
                    }
                }}
            >
                <Tab.Screen
                    name="Lab2"
                    component={Lab2StackScreen}
                    options={{
                        tabBarLabel:
                            'Цвет приложения'
                    }}
                />
                <Tab.Screen
                    name="Lab3"
                    component={Lab3StackScreen}
                    options={{
                        tabBarLabel: 'Список дел'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation
