import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(request: Request, response: Response) {
    try {
        const { status } = request.body;
        const { orderId } = request.params;

        if(!['WAITING', 'IN_PRODUCTION', 'DONE', 'CANCELED'].includes(status)) {
            return response.status(400).json({
                error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE, CANCELED'
            });
        }

        await Order.findByIdAndUpdate(orderId, { status: status });

        return response.sendStatus(204);
    } catch(error) {
        console.error(error);
        return response.sendStatus(500);
    }
}