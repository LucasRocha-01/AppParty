import React from 'react';
import {ScrollView} from 'react-native';

import mapaImg from '../../assets/images/map.png';

import HeaderComp from '../../components/header';
import {
  Button,
  TextButton,
  Footer,
  TitleFooter,
} from '../../styles/globalStyles';

// import styled from 'styled-components/native';

import {
  Container,
  Content,
  InfoText,
  InfoDescription,
  TitleParty,
  TitleMap,
  MapContainer,
  Map,
  Column,
  Row,
  InfoParty,
  Label,
} from './styles';

export default function PartyDetail({navigation}) {
  return (
    <>
      <HeaderComp />

      <ScrollView>
        <Container>
          <Content>
            <TitleParty>Sua festa é aqui, confira!</TitleParty>
            <MapContainer>
              <Map source={mapaImg} />
              <TitleMap>Ver rotas no Google Maps</TitleMap>
            </MapContainer>
            <InfoParty>
              <Row>
                <Column>
                  <InfoText>Horário</InfoText>
                  <Label>
                    <InfoDescription> 19:00 ás 05:00 </InfoDescription>
                  </Label>
                </Column>
                <Column>
                  <InfoText>Amigos</InfoText>
                  <InfoDescription>
                    {' '}
                    Voce nãõ tem amigos nessa festa{' '}
                  </InfoDescription>
                </Column>
              </Row>
              <Row>
                <Column>
                  <InfoText>Ingressos</InfoText>
                  <InfoDescription>Compre aqui</InfoDescription>
                </Column>
              </Row>
              <Row>
                <Column style={{width: '100%'}}>
                  <InfoText>Descrição do Evento</InfoText>
                  <Label style={{height: 'auto', width: '100%'}}>
                    <InfoDescription>
                      Novo trojan rouba quase 900 mil senhas de brasileiros: a
                      descoberta foi feita pela ISH Tecnologia, empresa
                      brasileira de cibersegurança. O trojan já infectou cerca
                      de 500 mil vítimas no Brasil através de uma campanha de
                      phishing por email, cobrando boletos em atraso. Segundo a
                      ISH, a campanha ainda está ativa e o número de vítimas
                      deve se multiplicar nos próximos dias. As informações são
                      da CISO Advisor.
                    </InfoDescription>
                  </Label>
                </Column>
              </Row>
              <Row>
                <Column>
                  <InfoText>Aproveite</InfoText>
                  <Row>
                    <Column>
                      <InfoDescription>Icon</InfoDescription>
                    </Column>
                    <Column>
                      <InfoDescription>Icon</InfoDescription>
                    </Column>
                    <Column>
                      <InfoDescription>Icon</InfoDescription>
                    </Column>
                    <Column>
                      <InfoDescription>Icon</InfoDescription>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </InfoParty>
            <Button onPress={() => navigation.navigate('Main')}>
              <TextButton>Eu vou</TextButton>
            </Button>
          </Content>
        </Container>
      </ScrollView>

      <Footer onPress={() => navigation.navigate('Main')}>
        <TitleFooter>Voltar</TitleFooter>
      </Footer>
    </>
  );
}
