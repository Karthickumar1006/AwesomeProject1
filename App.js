
import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { CustomText, CustomButton, CustomImage ,CustomInput,CustomRadioButton,CustomLoadingScreen} from '@karthickumarelumalai/rn-basic-setup';

 

const App = () => {
  const [inputText, setInputText] = useState('');
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelectOption = (option) => {
      setSelectedOption(option);
      console.log("Option",option);
  };
  const alertButton = () => {
    alert('Button Clicked');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Open up App.js to start working on your app!</Text>
      <CustomText text="isConnected" style={{ color: 'red' }}></CustomText>
      <CustomButton text="Click Me" onPress={() => alertButton()} />
      <CustomImage sources={require("./assets/image.png")} style={{ width: 200, height:200 }}/>     
      <CustomInput 
        placeholder="Enter your name" 
        value={inputText}
        onChangeText={(text) => { setInputText(text); console.log("Text",text); }}
        inputTextStyles = {{color: 'red'}} />
        {options.map((option) => (
                <CustomRadioButton
                    key={option}
                    label={option}
                    selected={selectedOption === option}
                    onPress={() => handleSelectOption(option)}
                />
            ))}

     <CustomLoadingScreen color='red'/>

    </View> 
  );
};

export default App;