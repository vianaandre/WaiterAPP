import { Text } from '../Text';
import { ContainerButton } from './styles';

type ButtonProps = {
  children: string;
  onPress: () => void;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <ContainerButton onPress={onPress}>
      <Text weight='600' color="#FFF">
        {children}
      </Text>
    </ContainerButton>
  );
}