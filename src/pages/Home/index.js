import React, { useContext } from 'react';
import { View, Text, Button, SafeAreaView} from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../component/Header';

import { Background, Container, Nome, Saldo, Title } from './styles';

export default function Home() {

  const { user } = useContext(AuthContext);

 return (
   <Background>
      <Header/>
      <Container>
        <Nome>Roberta</Nome>
        <Saldo>R$123,00</Saldo>
      </Container>
      <Title>Ultimas movimentações</Title>
   </Background>
  );
}