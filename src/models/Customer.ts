class Customer {
    private id: number;
    private name: string;
    private email: string;
    private passwordHash: string;

    constructor(id: number, name: string, email: string, passwordHash: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getPasswordHash(): string {
        return this.passwordHash;
    }

    setPasswordHash(passwordHash: string): void {
        this.passwordHash = passwordHash;
    }
}