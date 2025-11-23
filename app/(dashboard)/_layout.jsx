import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import {Colors} from '../../constants/Color'

const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme  = Colors [colorScheme] ?? Colors.light

  return (
    <Tabs
        screenOptions={ { headerShown: false, tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor
    }}
    >
    <Tabs.Screen
    name= "home"
        options={{title: 'Home', tabBarIcon: ({ focused }) => (
            <Ionicons
            size={24}
            name={ focused ? 'home' : 'home-outline'}
            color={ focused ? theme.iconColorFocused : theme.iconColor}
             />
        )}}    
     />
    <Tabs.Screen
    name= "review"
        options={{title: 'Review', tabBarIcon: ({ focused }) => (
            <Ionicons
            size={24}
            name={ focused ? 'trophy' : 'trophy-outline'}
            color={ focused ? theme.iconColorFocused : theme.iconColor}
             />
        )}}    
     />
    <Tabs.Screen
    name= "settings"
        options={{title: 'Settings', tabBarIcon: ({ focused }) => (
            <Ionicons
            size={24}
            name={ focused ? 'settings' : 'settings-outline'}
            color={ focused ? theme.iconColorFocused : theme.iconColor}
             />
        )}}    
     />


    </Tabs>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})