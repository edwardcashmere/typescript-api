import logging from '../config/logging';
import controller from '../controller/sampleHealthCheck';
import express from 'express';

const router = express.Router();

router.get('/home', controller.sampleHealthCheck);

export default router;
