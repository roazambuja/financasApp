import React from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import Header from '../../component/Header';
import { Background, Input, SubmitButton, SubmitText } from './styles';

export default function New() {
 return (
   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
    <Background>
      <Header/>
      <SafeAreaView style={{ alignItems: 'center'}}>
          <Input
          placeholder="Valor desejado"
          kayboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss()}
          />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>

      </SafeAreaView>
    </Background>
   </TouchableWithoutFeedback>
  );
}