import React from 'react';
import BoxParty from '../components/boxParty';
import styled from 'styled-components/native';

import {Container, Footer, TitleFooter} from '../styles/globalStyles';

export default function Blank({navigation}) {
  return (
    <Container>
      <Cards>
        <BoxParty />
        <BoxParty />
        <BoxParty />
      </Cards>

      <Footer
        onPress={() => navigation.navigate('Register')}
        activeOpacity={0.7}>
        {/* <IconLogin name="login" color="#404040" size={scaleFontSize(14)} /> */}
        <TitleFooter>Voltar</TitleFooter>
      </Footer>
    </Container>
  );
}

export const Cards = styled.View`
  flex: 1;
  width: 100%;
`;
