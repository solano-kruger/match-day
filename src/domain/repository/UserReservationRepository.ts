import Database from '../database/database';

class UserReservationRepository {
    private database: typeof Database;
  
    constructor(database: typeof Database) {
      this.database = database;
    }
  
    async createUserReservation(userId: number, reservationId: number): Promise<void> {
      await this.database.execute(
        'INSERT INTO user_reservation (user_id, reservation_id) VALUES (?, ?)',
        [userId, reservationId]
      );
    }
  }
  
  export default new UserReservationRepository(Database);
