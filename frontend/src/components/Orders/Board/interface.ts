import { Order } from '../../../common/types/Order';

export interface IBoard {
    icon: string;
    title: string;
    orders: Order[]
}