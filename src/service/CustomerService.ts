import CustomerRepository from '../repository/CustomerRepository';

class CustomerService {
  private customerRepository: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async createCustomer(name: string, email: string, passwordHash: string): Promise<void> {
    await this.customerRepository.create(name, email, passwordHash);
  }
}

export default CustomerService;