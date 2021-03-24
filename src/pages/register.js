import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import IconMail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import Arrowleft from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLock from 'react-native-vector-icons/Feather';

import {scaleFontSize} from '../utils/scaleFontSize';

import {
  Container,
  ViewInput,
  Input,
  Button,
  TextButton,
  TitleFrom,
  Footer,
  TitleFooter,
  styles,
} from '../styles/globalStyles';

import logo from '../assets/images/logo.png';

const {width} = Dimensions.get('window');

export default function Register({navigation}) {
  return (
    <Container>
      <>
        <Logo source={logo} resizeMode="contain" />
        <TitleFrom>Faça seu Registro</TitleFrom>

        <ViewInput>
          <IconUser name="user" color="#666360" style={styles.iconForm} />

          <Input placeholder="Nome" placeholderTextColor="#535466" />
        </ViewInput>

        <ViewInput>
          <IconMail
            name="email-outline"
            color="#666360"
            style={styles.iconForm}
          />

          <Input placeholder="E-mail" placeholderTextColor="#535466" />
        </ViewInput>

        <ViewInput>
          <IconLock name="lock" color="#666360" style={styles.iconForm} />

          <Input
            placeholder="Senha"
            placeholderTextColor="#535466"
            secureTextEntry
          />
        </ViewInput>

        <Button
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7}>
          <TextButton>Cadastrar</TextButton>
        </Button>

        <Footer
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.7}>
          <Arrowleft
            name="arrow-left"
            color="#404040"
            size={scaleFontSize(14)}
          />
          <TitleFooter>Voltar para o login</TitleFooter>
        </Footer>
      </>
    </Container>
  );
}

export const Logo = styled.Image`
  width: ${width * 0.5}px;
  height: ${width * 0.2}px;
  margin-bottom: ${width * 0.2}px; ;
`;

export const TextPass = styled.Text`
  margin-top: 6%;
  font-size: ${scaleFontSize(12)}px;
  color: #fff;
`;
