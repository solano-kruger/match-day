import { Request, Response } from 'express';
import CustomerService from '../service/CustomerService';

class CustomerController {
  private customerService: CustomerService;

  constructor(customerService: CustomerService) {
    this.customerService = customerService;
  }

  async createCustomer(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, passwordHash } = req.body;
      await this.customerService.createCustomer(name, email, passwordHash);
      res.status(201).json({ message: 'Cliente salvo com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao salvar o cliente' });
    }
  }
}

export default CustomerController;