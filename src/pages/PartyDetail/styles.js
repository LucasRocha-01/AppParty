import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {scaleFontSize} from '../../utils/scaleFontSize';
import colors from '../../styles/colors';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  background: ${colors.background};
  color: ${colors.primary};
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  width: ${width * 0.9};
`;

export const TitleParty = styled.Text`
  padding: 20px 0 10px;
  justify-content: flex-start;
  font-size: ${scaleFontSize(20)};
  color: ${colors.primary};
`;

export const TitleMap = styled.Text`
  padding-top: 8px;
  color: ${colors.primary};
  font-size: ${scaleFontSize(15)};
`;
export const InfoText = styled.Text`
  color: ${colors.primary};
  font-size: ${scaleFontSize(18)};
  padding: 0 10px 10px;
`;

export const InfoDescription = styled.Text`
  color: ${colors.primary};
  font-size: ${scaleFontSize(13)};
  padding: 0 10px;
`;

export const Label = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px;
  background-color: #28262e;
  border-radius: 10px;
  height: auto;
  width: 90%;
`;

export const MapContainer = styled.View`
  display: flex;
  align-items: center;
  background-color: #28262e;
  height: 350px;
  width: 100%;
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
  width: 100%;
`;

export const Row = styled.View`
  margin-top: 20px;
  flex-direction: row;
  width: 100%;
`;
export const Column = styled.View`
  width: 50%;
`;
