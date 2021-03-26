import React from 'react';
import {Text} from 'react-native';
import HeaderComp from '../components/header';
import {Container, Footer, TitleFooter} from '../styles/globalStyles';

export default function PartyDetail({navigation}) {
  return (
    <>
      <HeaderComp />
      <Container>
        <Text>Test</Text>
      </Container>
      <Footer onPress={() => navigation.navigate('Login')}>
        <TitleFooter>Voltar</TitleFooter>
      </Footer>
    </>
  );
}
