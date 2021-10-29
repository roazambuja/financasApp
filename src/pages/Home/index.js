import React, { useContext, useState } from 'react';
import { View, Text, Button, SafeAreaView} from 'react-native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../component/Header';
import HistoricoList from '../../component/HistoricoList';

import { Background, Container, Nome, Saldo, Title, List } from './styles';

export default function Home() {
  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'receita', valor: 1200},
    {key: '2', tipo: 'despesa', valor: 200},
    {key: '3', tipo: 'receira', valor: 40},
    {key: '4', tipo: 'receita', valor: 89.62},
  ]);

  const { user } = useContext(AuthContext);

 return (
   <Background>
      <Header/>
      <Container>
        <Nome>Roberta</Nome>
        <Saldo>R$123,00</Saldo>
      </Container>
      <Title>Ultimas movimentações</Title>
      <List
      showsVerticalScrollIndicator={false}
      data={historico}
      keyExtrator={ item => item.key}
      renderItem={ ({ item }) => ( <HistoricoList data={item} /> )}
      />
   </Background>
  );
}