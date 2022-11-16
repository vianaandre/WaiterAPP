import React, { useMemo } from 'react';

import { ContainerOrderModal, ContainerOrderModalBody } from './styles';
import { IOrderModal } from './interface';
import pizza from '../../assets/images/pizza.png';

export const OrderModal: React.FC<IOrderModal> = ({ visible, onClose, order }) => {

    if(!visible) return null;

    const statusOrder = useMemo(() => {
        switch(order.status) {
        case 'IN_PROGRESS':
            return {
                icon: '👩‍🍳',
                text: 'Em produção'
            };
        case 'DONE':
            return {
                icon: '✅',
                text: 'Pronto!'
            };
        case 'WAITING':
            return {
                icon: '🕑',
                text:  'Fila de espera'
            };
        default:
            return {
                icon: '🕑',
                text:  'Fila de espera'
            };
        }
    }, [order]);

    const totalOrder = useMemo(() => {
        let isTotal = 0;

        order.products.forEach(item => {
            isTotal += item.quantity * item.product.price;
        });

        return isTotal;
    }, []);

    return (
        <ContainerOrderModal>
            <ContainerOrderModalBody>
                <header>
                    <strong>Mesa 2</strong>
                    <button type="button" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8L12 12M12 12L16 16M12 12L8 8M12 12L8 16" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </header>
                <div className='container-status'>
                    <span>Status do Pedido</span>
                    <div>
                        <span>{statusOrder.icon}</span>
                        <strong>{statusOrder.text}</strong>
                    </div>
                </div>
                <div className='container-itens'>
                    <span>Itens</span>
                    <ul>
                        {order.products.map(item => (
                            <li key={item._id}>
                                <img src={pizza} alt="Pizza" />
                                <span>{item.quantity}x</span>
                                <div>
                                    <strong>{item.product.name}</strong>
                                    <span>{(item.quantity * item.product.price).toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2 , style: 'currency', currency: 'BRL'
                                    })}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='total'>
                        <span>Total</span>
                        <strong>{totalOrder.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2 , style: 'currency', currency: 'BRL'
                        })}</strong>
                    </div>
                </div>
                <div className='buttons'>
                    <button type="button">
                        <span>✅</span>
                        <strong>Concluir Pedido</strong>
                    </button>
                    <button type="button">
                        <strong>Cancelar Pedido</strong>
                    </button>
                </div>
            </ContainerOrderModalBody>
        </ContainerOrderModal>
    );
};