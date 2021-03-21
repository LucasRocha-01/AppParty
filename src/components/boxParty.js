import React from 'react';
import styled from 'styled-components/native';

import {scaleFontSize} from '../utils/scaleFontSize';

import party from '../assets/images/party.jpg';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default function BoxParty() {
  return (
    <Card>
      <ImgParty source={party} />
      <Text>01</Text>
      <Text>Teste de componente</Text>
    </Card>
  );
}
export const Card = styled.TouchableOpacity`
  background-color: #3e3b47;
  align-items: flex-start;
  width: ${width * 0.85}px;
  height: ${width * 0.7}px;
  margin: 15px;
`;

export const ImgParty = styled.Image`
  width: 100%;
  height: ${width * 0.5}px;
`;

export const Text = styled.Text`
  font-size: ${scaleFontSize(12)}px;
  color: #999591;
  margin-left: 2%;
`;
