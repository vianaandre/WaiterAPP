import { Product } from './Product';
import { Status } from './Status';

export type Order = {
    _id: string;
    table: string;
    status: Status;
    products: Array<{
        quantity: number;
        _id: string;
        product: Product;
    }>
}