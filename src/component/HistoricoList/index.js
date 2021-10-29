import React from 'react';
import { Container, Tipo, IconView, TipoText, ValorText } from './styles';
import Icon from '@expo/vector-icons/Feather'

export default function HistoricoList({data}) {
 return (
   <Container>
       <Tipo>
           <IconView tipo={data.tipo}>
               <Icon 
               name={data.tipo === 'despesa' ? "arrow-down" : "arrow-up"}
               color="#FFF" 
               size={20}
               />
               <TipoText>{data.tipo}</TipoText>
           </IconView>
       </Tipo>
       <ValorText>
           R$ {data.valor}
       </ValorText>
   </Container>
  );
}