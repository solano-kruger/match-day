import mysql from 'mysql2/promise';

class Database {
  private pool: mysql.Pool;

  constructor(config: mysql.PoolOptions) {
    this.pool = mysql.createPool(config);
  }

  async execute(query: string, params: any[]): Promise<any> {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.execute(query, params);
      return rows;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  }
}

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'match_day'
};

export default new Database(dbConfig);