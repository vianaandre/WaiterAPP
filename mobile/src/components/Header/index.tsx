import { Text } from '../Text';
import { ContainerHeader } from './styles';

export function Header() {
  return (
    <ContainerHeader>
      <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
      <Text size={24} weight="600">WAITER
        <Text size={24}>APP</Text>
      </Text>
    </ContainerHeader>
  );
}