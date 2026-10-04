import { IBook } from './interfaces/IBook';

export class Book implements IBook {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public year: number,
        public isBorrowed: boolean = false
    ) {}

    public getDetails(): string {
        return `${this.title} (${this.year}), автор: ${this.author}`;
    }

    public markAsBorrowed(): void {
        this.isBorrowed = true;
    }

    public markAsReturned(): void {
        this.isBorrowed = false;
    }
}