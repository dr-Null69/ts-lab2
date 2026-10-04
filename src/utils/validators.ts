export namespace Validation {
    // Перевірка на обов'язкові поля (не порожній рядок)
    export function isRequired(value: string): boolean {
        return value.trim().length > 0;
    }

    // Перевірка id користувача: лише цифри
    export function isValidId(id: string): boolean {
        const idRegex = /^\d+$/;
        return idRegex.test(id) && isRequired(id);
    }

    // Перевірка року видання: лише цифри, розумний діапазон років (наприклад, 1000-2099)
    export function isValidYear(year: string): boolean {
        const yearRegex = /^(1[0-9]{3}|20[0-9]{2})$/;
        return yearRegex.test(year) && isRequired(year);
    }
}