import React from 'react';
import {Text, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import {scaleFontSize} from '../utils/scaleFontSize';

import mapa from '../assets/images/map.png';

import styled from 'styled-components/native';

import HeaderComp from '../components/header';
import {
  Button,
  TextButton,
  Container,
  Footer,
  TitleFooter,
  TitleMain,
} from '../styles/globalStyles';

const {width} = Dimensions.get('window');

export default function PartyDetail({navigation}) {
  return (
    <>
      <HeaderComp />
      <SafeAreaView style={{marginBottom: 100}}>
        <ScrollView>
          <Container>
            <TitleMain style={{margin: 20}}>
              Sua festa é aqui, confira!
            </TitleMain>
            <MapContainter>
              <Map source={mapa} />
              <TitleMain>Ver rotas no Google Maps</TitleMain>
            </MapContainter>
            <InfoParty>
              <Row>
                <Column>
                  <TitleMain>Horário</TitleMain>
                  <Label>
                    <Text> 19:00 ás 05:00 </Text>
                  </Label>
                </Column>
                <Column>
                  <TitleMain>Amigos</TitleMain>
                  <Text> Voce nãõ tem amigos nessa festa </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <TitleMain>Ingressos</TitleMain>
                  <Text>Compre aqui</Text>
                </Column>
              </Row>
              <Row>
                <Column style={{width: '110%'}}>
                  <TitleMain>Descrição do Evento</TitleMain>
                  <Label style={{height: 'auto'}}>
                    <Text>
                      reHandlerRootView
                      GestureHandlerRootView@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:118825:24
                      StackView@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:112571:36
                      StackNavigator@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:112462:32
                      EnsureSingleNavigator@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:121597:24
                      BaseNavigationContainer@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:121233:28
                      ThemeProvider@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:125307:21
                      NavigationContainer@http://localhost:8081/index.bundle?platform=android&dev=true&minify=false:125217:26
                      StackNavigation
                    </Text>
                  </Label>
                </Column>
              </Row>
              <Row>
                <Column>
                  <TitleMain>Aproveite</TitleMain>
                  <Row>
                    <Column>
                      <Text>Icon</Text>
                    </Column>
                    <Column>
                      <Text>Icon</Text>
                    </Column>
                    <Column>
                      <Text>Icon</Text>
                    </Column>
                    <Column>
                      <Text>Icon</Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </InfoParty>
            <Button onPress={() => navigation.navigate('Main')}>
              <TextButton>Eu vou</TextButton>
            </Button>
          </Container>
        </ScrollView>
      </SafeAreaView>
      <Footer onPress={() => navigation.navigate('Main')}>
        <TitleFooter>Voltar</TitleFooter>
      </Footer>
    </>
  );
}

export const MapContainter = styled.View`
  display: flex;
  align-items: center;
  background-color: #28262e;
  height: 350px;
  width: ${width * 0.9}px;
  border-radius: 20px;
`;
export const Map = styled.Image`
  display: flex;
  align-items: center;
  background-color: #000;
  height: 85%;
  width: 100%;
  border-radius: 20px;
`;

export const InfoParty = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: ${scaleFontSize(20)};
  width: ${width * 0.9}px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;
export const Column = styled.View`
  width: 50%;
`;

export const Label = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #28262e;
  border-radius: 10px;
  height: 40px;
  width: 90%;
`;
