import React, { useCallback, useState } from 'react';

import { ContainerBoard, ContainerButtonsBoard } from './styles';
import { IBoard } from './interface';
import { OrderModal } from '../../OrderModal';
import { Order } from '../../../common/types/Order';

export const Board: React.FC<IBoard> = ({ icon, title, orders }) => {
    const [ isOrder, setIsOrder ] = useState<Order | null>(null);

    const handleOpenOrderModal = useCallback((id: string) => {
        const findOrder = orders.find(item => item._id === id) as Order;

        if(findOrder) setIsOrder(findOrder);
    }, []);

    const handleCloseOrderModal = useCallback(() => {
        setIsOrder(null);
    }, []);

    return (
        <ContainerBoard>
            {isOrder && (
                <OrderModal visible={!!isOrder}  onClose={handleCloseOrderModal} order={isOrder} />
            )}
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>
            {orders.length > 0 && (
                <ContainerButtonsBoard>
                    {orders.map((item) => (
                        <button type="button" key={item._id} onClick={() => handleOpenOrderModal(item._id)}>
                            <strong>Mesa {item.table}</strong>
                            <span>{item.products.length} itens</span>
                        </button>
                    ))}
                </ContainerButtonsBoard>
            )}
        </ContainerBoard>
    );
};