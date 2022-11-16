import { Order } from '../../common/types/Order';

export interface IOrderModal {
    visible: boolean;
    onClose: () => void;
    order: Order
}