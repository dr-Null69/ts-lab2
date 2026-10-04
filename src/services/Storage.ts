export class Storage {
    // Збереження даних
    public static save<T>(key: string, data: T): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Завантаження даних
    public static load<T>(key: string): T | null {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    // Видалення конкретного ключа
    public static remove(key: string): void {
        localStorage.removeItem(key);
    }

    // Очищення всього сховища
    public static clear(): void {
        localStorage.clear();
    }
}