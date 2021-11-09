import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView} from 'react-native';
import firebase from '../../services/firebaseConnection';

import { AuthContext } from '../../contexts/auth';
import Header from '../../component/Header';
import HistoricoList from '../../component/HistoricoList';

import { Background, Container, Nome, Saldo, Title, List } from './styles';

export default function Home() {
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect( () => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });
    }
    loadList();
  }, []);

 return (
   <Background>
      <Header/>
      <Container>
        <Nome>{user && user.nome}</Nome>
        <Saldo>R$ {saldo}</Saldo>
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