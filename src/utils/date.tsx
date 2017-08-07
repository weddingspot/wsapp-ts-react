import { range } from './fp';

export function getDaysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
}

export function getPrevMonthNumber(month: number): number {
    if (month === 0) {
        return 11;
    }
    return month - 1;
}

export function getNextMonthNumber(month: number): number {
    if (month === 11) {
        return 0;
    }
    return month + 1;
}

export function getWeekDays(): Array<string> {
    return ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
}

export function getMonths(): Array<string> {
    return [
        'January',
        'Fabruary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
}

export function getWeekDay(month: number, year: number, day: number): number {
    return new Date(year, month, day).getDay();
}

export function getDaysArray(month: number, year: number): Array<number> {

    const daysInMonth: number = getDaysInMonth(month, year);
    const daysInPrevMonth: number = getDaysInMonth(getPrevMonthNumber(month), year);

    const firstWeekDay: number = getWeekDay(month, year, 1);
    const lastWeekDay: number = getWeekDay(month, year, daysInMonth);

    const monthDays: Array<number> = range(1, daysInMonth + 1);

    const monthStart: Array<number> = range(daysInPrevMonth - firstWeekDay + 1, daysInPrevMonth + 1);

    const monthEnd: Array<number> = range(1, 7 - lastWeekDay);

    return [...monthStart, ...monthDays, ...monthEnd];
}