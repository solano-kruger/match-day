export class Review {
    constructor(
      public id: number,
      public reservation_id: number,
      public rating: number,
      public comment: string
    ) {}
  }
  