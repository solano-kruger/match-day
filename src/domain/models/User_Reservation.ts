class UserReservation {
  private id: number;
  private user_id: number;
  private reservation_id: number;

  constructor(id: number, user_id
: number, reservation_id: number) {
    this.id = id;
    this.user_id
 = user_id
;
    this.reservation_id = reservation_id;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getUserId(): number {
    return this.user_id
;
  }

  setUserId(user_id
: number): void {
    this.user_id
 = user_id
;
  }

  getreservation_id(): number {
    return this.reservation_id;
  }

  setreservation_id(reservation_id: number): void {
    this.reservation_id = reservation_id;
  }
}

export default UserReservation;
