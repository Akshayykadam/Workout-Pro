import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercise"
        options={{ presentation: 'fullScreenModal' }}
      />
       <Stack.Screen
        name="exerciseDetails"
        options={{ presentation: 'modal' }}
      />
    </Stack>

    
  );
};

export default _layout