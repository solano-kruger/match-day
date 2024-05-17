import { Router } from 'express';
import CustomerController from '../controller/CustomerController';
import CustomerService from '../service/CustomerService';
import CustomerRepository from '../repository/CustomerRepository';
import db from '../config/database';

const router = Router();
const customerRepository = new CustomerRepository(db);
const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(customerService);

router.post('/customer', (req, res) => customerController.createCustomer(req, res));

export default router;