import React from 'react';
import { Container } from '../../styles/container';

import { ContainerOrders } from './styles';
import { Board } from './Board';
import { orders } from '../../common/mock/orders';

export const Orders: React.FC = () => {
    return (
        <ContainerOrders>
            <Container>
                <Board
                    icon='🕑'
                    title="Fila de espera!"
                    orders={orders}
                />
                <Board
                    icon='👩‍🍳'
                    title="Em produção!"
                    orders={[]}
                />
                <Board
                    icon='✅'
                    title="Pronto!"
                    orders={orders}
                />
                <Board
                    icon='🛑'
                    title="Cancelados!"
                    orders={orders}
                />
            </Container>
        </ContainerOrders>
    );
};