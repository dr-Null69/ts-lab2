export function generateNumericId(): string {
    // Використовуємо поточний час та випадкове число для унікальності
    const timestamp = Date.now().toString();
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return timestamp + randomNum;
}