import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(request: Request, response: Response) {
    try {
        const { table, products } = request.body;

        if(!products) {
            return response.status(400).json({
                error: 'Products required'
            });
        }

        if(!table) {
            return response.status(400).json({
                error: 'Table required'
            });
        }

        const order = await Order.create({
            table: table,
            products: products
        });

        return response.status(201).json(order);
    } catch(error) {
        console.error(error);
        return response.sendStatus(500);
    }
}