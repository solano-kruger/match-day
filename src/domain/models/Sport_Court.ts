class Sport_Court {
  private id: number;
  private name: string;
  private reservated: boolean;
  private description: string | null;
  private size: string;
  private location: string;
  private start_datetime: Date;
  private end_datetime: Date;
  private price: number;

  constructor(
    id: number,
    name: string,
    reservated: boolean,
    description: string | null,
    size: string,
    location: string,
    start_datetime: Date,
    end_datetime: Date,
    price: number,
  ) {
    this.id = id;
    this.name = name;
    this.reservated = reservated;
    this.description = description;
    this.size = size;
    this.location = location;
    this.start_datetime = start_datetime;
    this.end_datetime = end_datetime;
    this.price = price;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getReservated(): boolean {
    return this.reservated;
  }

  getDescription(): string | null {
    return this.description;
  }

  getSize(): string {
    return this.size;
  }

  getLocation(): string {
    return this.location;
  }

  getStartDateTime(): Date {
    return this.start_datetime;
  }

  getEndDateTime(): Date {
    return this.end_datetime;
  }

  getPrice(): number {
    return this.price;
  }

  setId(id: number): void {
    this.id = id;
  }

  setName(name: string): void {
    this.name = name;
  }

  setReservated(reservated: boolean): void {
    this.reservated = reservated;
  }

  setDescription(description: string | null): void {
    this.description = description;
  }

  setSize(size: string): void {
    this.size = size;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  setStartDateTime(start_datetime: Date): void {
    this.start_datetime = start_datetime;
  }

  setEndDateTime(end_datetime: Date): void {
    this.end_datetime = end_datetime;
  }

  setPrice(price: number): void {
    this.price = price;
  }
}

export default Sport_Court;
