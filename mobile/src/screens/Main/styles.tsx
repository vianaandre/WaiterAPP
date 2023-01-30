import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const ContainerMain = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #FAFAFA
`;

export const ContainerCategories = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const ContainerMenu = styled.View`
  flex: 1;
`;

export const ContainerFooter = styled.SafeAreaView`
  min-height: 110px;
  background-color: #FFF;
`;

export const ContainerFooterContent = styled.View`
  padding: 16px 24px;
`;
