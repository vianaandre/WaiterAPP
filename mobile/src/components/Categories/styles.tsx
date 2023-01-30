import styled from 'styled-components/native';
import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const ContainerCategory = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 24px;
`;

export const ContainerIcon = styled.View`
  background-color: #FFF;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 0.6 : 0.1});
  margin-bottom: 8px;
`;