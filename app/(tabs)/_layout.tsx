import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabIcons = ({focused, icon, title}: any) => {

  if(focused){

    
      return(
      <ImageBackground
      source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full
                  overflow-hidden'
      >
        <Image
          source={icon}
          tintColor="#151312" className='size-5'
        />
        <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
      </ImageBackground>
    )
  }

  return (
      <View className='size-full item-center justify-center mt-4 rounded-full'>
        <Image source={icon} className='size-5' tintColor='#A8B5DB' />
      </View>
    )
}

const _layout = () => {
  
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          // marginBottom: 20,
          // borderRadius: 50
        }
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({focused}) =>{
            return <TabIcons 
                      focused={focused}
                      icon={icons.home}
                      title='Home'
                   /> 
          }
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({focused}) =>{
            return <TabIcons
                      focused={focused}
                      icon={icons.search}
                      title='Search'
                    /> 
          }
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          headerShown: false,
          title: 'Saved',
          tabBarIcon: ({focused}) =>{
            return <TabIcons 
                      focused={focused}
                      icon={icons.save}
                      title='Saved'
                  /> 
          }
        }}
      />
      <Tabs.Screen
        name='profil'
        options={{
          headerShown: false,
          title: 'Profil',
          tabBarIcon: ({focused}) =>{
            return <TabIcons 
                      focused={focused}
                      icon={icons.person}
                      title='Profil'
                    /> 
          }
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})