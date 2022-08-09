import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'

export default function Navigator() {
    return (
        <NavigationContainer>
            <Home />
        </NavigationContainer>
    )
}
