import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {scaleFontSize} from '../utils/scaleFontSize';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #003399;
  align-items: center;
  justify-content: center;
  padding-bottom: 70px;
`;

export const TitleFrom = styled.Text`
  font-size: ${scaleFontSize(16)}px;
  margin-bottom: 10%;
  color: #fff;
`;

export const ViewInput = styled.View`
  position: relative;
  width: 80%;
  justify-content: center;
  margin-bottom: 3%;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: #232129;
  border-radius: 8px;
  padding-left: 15%;
  height: ${height * 0.07}px;
  font-size: ${scaleFontSize(13)}px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: #3399ff;
  border-radius: 8px;
  height: ${height * 0.07}px;
  justify-content: center;
  margin-top: 1%;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: ${scaleFontSize(12)}px;
  text-align: center;
`;

export const Footer = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #fcfdff;
  padding: 4.5% 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TitleFooter = styled.Text`
  font-size: ${scaleFontSize(12)}px;
  color: #404040;
  margin-left: 2%;
`;

export const styles = StyleSheet.create({
  iconForm: {
    position: 'absolute',
    zIndex: 1,
    fontSize: scaleFontSize(18),
    paddingLeft: '4.5%',
  },
});
