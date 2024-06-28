import Database from '../database/database';
import Reservation from '../models/Reservation';

class ReservationRepository {
    private database: typeof Database;
  
    constructor(database: typeof Database) {
      this.database = database;
    }
  
    async createReservation(sportCourtId: number, status: string): Promise<Reservation> {
      const result: any = await this.database.execute(
        'INSERT INTO reservation (sport_court_id, status) VALUES (?, ?)',
        [sportCourtId, status]
      );
  
      const reservationId = result.insertId;
      return new Reservation(reservationId, sportCourtId, status);
    }

    async updateReservationStatus(reservationId: number, newStatus: string): Promise<boolean> {
      const result: any = await this.database.execute(
          'UPDATE reservation SET status = ? WHERE id = ?',
          [newStatus, reservationId]
      );
      return result.affectedRows > 0;
  }
  
    async getUserReservations(userId: number): Promise<any[]> {
        const query = `
          SELECT 
            r.id AS reservation_id, 
            r.status, 
            r.sport_court_id, 
            sc.name AS court_name, 
            sc.description, 
            sc.size, 
            sc.location, 
            sc.start_datetime, 
            sc.end_datetime, 
            sc.price
          FROM reservation r
          INNER JOIN user_reservation ur ON r.id = ur.reservation_id
          INNER JOIN sport_court sc ON r.sport_court_id = sc.id
          WHERE ur.user_id = ?;
        `;
    
        try {
          const results = await this.database.execute(query, [userId]);
          const rows = Array.isArray(results) ? results : [results]; 
    
          return rows.map((row: any) => ({
            reservationId: row.reservation_id,
            status: row.status,
            sportCourt: {
              id: row.sport_court_id,
              name: row.court_name,
              description: row.description,
              size: row.size,
              location: row.location,
              startDatetime: row.start_datetime,
              endDatetime: row.end_datetime,
              price: row.price
            }
          }));
        } catch ( error: unknown) {
          if (error instanceof Error) {
            console.error('Error getting user reservations:', error.message);
            throw new Error(`Failed to get user reservations: ${error.message}`);
          } else {
            throw new Error('Failed to get user reservations: Unknown error');
          }
        }
      }
    }
    
    export default new ReservationRepository(Database);