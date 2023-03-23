/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Button,
} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
import AsyncStorage from 'RNCAsyncStorage/js'

const App: () => JSX.Element = () => {
  const [result, setResult] = useState<number | null>(null);
  const [data, savedData] = useState({})


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={{ marginLeft: 20, marginTop: 20, color: 'white', fontSize: 30 }}>
        3+7={result ?? '??'}
      </Text>

      <Text style={{ marginLeft: 20, marginTop: 20, color: 'white', fontSize: 30 }}>
        {data?.name}
      </Text>

      <Button
        title="Compute"
        onPress={async () => {
          // const value = await RTNCalculator?.add(3, 7);
          const value = await RTNCalculator?.calculateInterest(10000, 2, 4)
          setResult(value ?? null);
        }}
      />

      <Button
        title="Save Data"
        onPress={async () => {
          // const value = await RTNCalculator?.add(3, 7);
          const value = await AsyncStorage.setItem('data', JSON.stringify({ name: 'sandeep' }))
        }}
      />

      <Button
        title="Get Data"
        onPress={async () => {
          // const value = await RTNCalculator?.add(3, 7);
          const value = await AsyncStorage.getItem('data')
          const v = value ? JSON.parse(value) : {}
          savedData(v)
        }}
      />
    </SafeAreaView>
  );
};
export default App;