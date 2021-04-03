import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'controller sample';
const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'sample controller test');

    return res.status(200).json({ message: 'I am  working' });
};

export default { sampleHealthCheck };
