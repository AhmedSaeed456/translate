import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Home() {
  const [inputChars, setInputChars] = useState('');
  return (
    <View>
      <Stack.Screen options={{ title: 'Home' }} />

      {/*Language selector row*/}
      <View className="flex-row justify-around p-5 ">
        <Text className="font-semibold color-blue-600">English</Text>
        <FontAwesome name="exchange" size={16} color="gray" />
        <Text className="font-semibold color-blue-600">Spanish</Text>
      </View>

      {/*Input container*/}
      <View className="border-y border-gray-300 p-3">
        {/*Input field and arrow icon*/}
        <View className="flex-row gap-5 bg-slate-100">
          <TextInput
            value={inputChars}
            onChangeText={(text) => {
              setInputChars(text);
            }}
            placeholder="enter text"
            className="min-h-32 flex-1 text-xl"
            maxLength={5000}
            multiline
          />
          <FontAwesome6 className="mt-2" name="circle-arrow-right" size={24} color="royalblue" />
        </View>
        {/*Input bottom section */}
        <View className="mt-2 flex-row items-center justify-between">
          <FontAwesome name="microphone" size={18} color="dimgray" />
          <Text className="color-gray-500">{inputChars.length} / 5000</Text>
        </View>
      </View>
      <View className="gap-5 bg-gray-200 p-5">
        <Text className="min-h-32 text-xl">Output</Text>
        <View className="flex-row items-end justify-between">
          <FontAwesome6 name="volume-high" size={18} color="dimgray" />
          <FontAwesome5 name="copy" size={18} color="dimgray" />
        </View>
      </View>
    </View>
  );
}
