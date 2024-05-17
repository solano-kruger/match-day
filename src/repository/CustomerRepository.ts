import Database from '../config/database';

class CustomerRepository {
  private database: typeof  Database;

  constructor(database: typeof Database) {
    this.database = database;
  }

  async create(name: string, email: string, passwordHash: string): Promise<void> {
    await this.database.execute('INSERT INTO customer (name, email, password_hash) VALUES (?, ?, ?)', [name, email, passwordHash]);
  }
}

export default CustomerRepository;