export class Library<T extends { id: string }> {
    private items: T[] = [];

    // Додавання об'єкта в колекцію
    public add(item: T): void {
        this.items.push(item);
    }

    // Видалення об'єкта за його id
    public remove(id: string): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    // Пошук одного елемента (наприклад, за id)
    public find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }

    // Пошук кількох елементів (наприклад, пошук книг за автором або назвою)
    public search(predicate: (item: T) => boolean): T[] {
        return this.items.filter(predicate);
    }

    // Отримання всіх елементів (для рендерингу та пагінації)
    public getAll(): T[] {
        return this.items;
    }

    // Завантаження масиву даних (використовуватиметься при старті з LocalStorage)
    public setItems(items: T[]): void {
        this.items = items;
    }
}