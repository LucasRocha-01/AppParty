import React from 'react';
import {Container, TitleFrom} from '../styles/globalStyles';

import {Dimensions} from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

// import * as ToggleMenuActions from '../store/actions/toggleMenu';

const {width} = Dimensions.get('window');

export default function HeaderComp() {
  return (
    <HeaderMenu>
      <TitleFrom>Bem Vindo Credisvaldo</TitleFrom>
    </HeaderMenu>
  );
}

export const HeaderMenu = styled.View`
  background-color: #28262e;
  height: ${width * 0.15}px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
