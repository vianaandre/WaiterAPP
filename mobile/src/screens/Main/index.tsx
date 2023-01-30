import React from 'react';
import {
  ContainerMain,
  ContainerCategories,
  ContainerMenu,
  ContainerFooter,
  ContainerFooterContent } from './styles';
import { Header } from '../../components/Header';
import { Categories } from '../../components/Categories';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';

export function Main() {
  return (
    <React.Fragment>
      <ContainerMain>
        <Header />

        <ContainerCategories>
          <Categories></Categories>
        </ContainerCategories>

        <ContainerMenu>
          <Menu></Menu>
        </ContainerMenu>

      </ContainerMain>
      <ContainerFooter>
        <ContainerFooterContent>
          <Button onPress={() => console.log('Novo Pedido')}>
            Novo Pedido
          </Button>
        </ContainerFooterContent>
      </ContainerFooter>
    </React.Fragment>
  );
}