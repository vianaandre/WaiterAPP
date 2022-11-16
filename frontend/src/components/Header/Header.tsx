import React from 'react';

import { ContainerHeader } from './styles';
import logo from '../../assets/images/logo.svg';
import { Container } from '../../styles/container';

export const Header: React.FC = () => {
    return (
        <ContainerHeader>
            <Container>
                <div className="header-details">
                    <h1>Pedidos</h1>
                    <h2>Acompanhe os pedidos dos clientes</h2>
                </div>
                <img src={logo} alt="WaiterAPP" />
            </Container>
        </ContainerHeader>
    );
};