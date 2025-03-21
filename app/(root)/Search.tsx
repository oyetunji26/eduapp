import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'

const Search = () => {
  return (
    <View className='bg-[#ddd] shadow-2xs flex-row items-center px-3 rounded-xl my-4' >
      <Image source={icons?.search} alt='' width={200} height={200} />
      <TextInput className='p-3 grow font-medium text-[#555]' placeholderClassName='font-medium' placeholder='Search courses, Topics....'  />
    </View>
  )
}

export default Search