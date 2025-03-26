import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
    
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Home'
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          headerShown: false,
          title: 'Search'
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          headerShown: false,
          title: 'Saved'
        }}
      />
      <Tabs.Screen
        name='profil'
        options={{
          headerShown: false,
          title: 'Profil'
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})