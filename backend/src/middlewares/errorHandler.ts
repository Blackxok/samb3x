import { NextFunction, Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message || 'Ichki server xatosi' });
};
