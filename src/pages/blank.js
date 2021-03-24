import React from 'react';
import MCards from '../components/cards';
import {ScrollView} from 'react-native';
// import styled from 'styled-components/native';

import {Container, Footer, TitleFooter} from '../styles/globalStyles';

export default function Blank({navigation}) {
  return (
    <Container>
      <ScrollView>
        <MCards />
        <MCards />
        <MCards />
        <MCards />
      </ScrollView>
      <Footer onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
        {/* <IconLogin name="login" color="#404040" size={scaleFontSize(14)} /> */}
        <TitleFooter>Sair</TitleFooter>
      </Footer>
    </Container>
  );
}
