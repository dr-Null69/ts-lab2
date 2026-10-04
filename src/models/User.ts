import { IUser } from './interfaces/IUser';

export class User implements IUser {
    constructor(
        public id: string,
        public name: string,
        public borrowedBooks: string[] = []
    ) {}

    public getDetails(): string {
        return `Користувач: ${this.name} (ID: ${this.id})`;
    }

    public canBorrow(): boolean {
        return this.borrowedBooks.length < 3;
    }

    public borrowBook(bookId: string): void {
        if (this.canBorrow()) {
            this.borrowedBooks.push(bookId);
        }
    }

    public returnBook(bookId: string): void {
        this.borrowedBooks = this.borrowedBooks.filter(id => id !== bookId);
    }
}