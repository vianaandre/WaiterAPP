import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(request: Request, response: Response) {
    try {
        const { icon, name } = request.body;

        if(!name) {
            return response.status(400).json({
                error: 'Name required'
            });
        }

        if(!icon) {
            return response.status(400).json({
                error: 'Icon required'
            });
        }

        const category = await Category.create({
            icon: icon,
            name: name
        });

        return response.status(201).json(category);
    } catch(error) {
        console.error(error);
        return response.sendStatus(500);
    }
}