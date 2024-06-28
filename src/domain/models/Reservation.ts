class Reservation {
  private id: number;
  private sportCourtId: number;
  private status: string;

  constructor(id: number, sportCourtId: number, status: string) {
    this.id = id;
    this.sportCourtId = sportCourtId;
    this.status = status;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getSportCourtId(): number {
    return this.sportCourtId;
  }

  setSportCourtId(sportCourtId: number): void {
    this.sportCourtId = sportCourtId;
  }

  getStatus(): string {
    return this.status;
  }

  setStatus(status: string): void {
    this.status = status;
  }
}

export default Reservation;
