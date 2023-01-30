import { ContainerCategory, ContainerIcon } from './styles';
import { categories } from '../../common/mocks/categories';
import { Text } from '../Text';
import { FlatList } from 'react-native';
import { useState } from 'react';

export function Categories() {
  const [ isSelectedCategory, setIsSelectedCategory ] = useState<string>();
  function handleSelectCategory(categoryId: string) {
    if(categoryId === isSelectedCategory) {
      setIsSelectedCategory(undefined);
    } else {
      setIsSelectedCategory(categoryId);
    }
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        const isSelected = item._id === isSelectedCategory;

        return (
          <ContainerCategory
            onPress={() => handleSelectCategory(item._id)}
          >
            <ContainerIcon>
              <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
            </ContainerIcon>
            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>{item.name}</Text>
          </ContainerCategory>
        );
      }}
    />
  );
}