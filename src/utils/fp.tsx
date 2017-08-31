
export function first<S>(arr: Array<S>): S {
    if (!arr.length) {
        throw 'Argument of "first" function required to have at least one element.';
    }
    return arr[0];
}

export function range(start: number, end: number): Array<number> {
    const ret: Array<number> = [];
    for (let i = start; i < end; i++) {
        ret.push(i);
    }
    return ret;
}

export interface EqDict {
    [name: string]: string | number;
}

// By "any" i assume comparable type.
// Suppressing tslint warning
// because here we just need a
// "comparable" type and i don't
// know how to achive it yet.
// TODO: don not suppress any
/* tslint:disable:no-any */
export function any(q: any, arr: Array<any>): any | null {
    for (let i = 0, l = arr.length; i < l; i++) {
        if (arr[i] === q) {
            return q;
        }
    }
    return null;
}

export function all(f: (o: any) => boolean, arr: Array<any>): boolean {
    for (let i = 0, l = arr.length; i < l; i++) {
        if (!f(arr[0])) {
            return false;
        }
    }

    return true;
}

export function findExact(q: any, arr: Array<any>): any | null {
    const searchKeys = Object.keys(q);
    for (let i = 0, l = arr.length; i < l; i++) {
        const o = arr[i];
        if ( all(v => v, searchKeys.map((key: string) => o[key] && o[key] === q[key]) ) ) {
            return o;
        }
    }
    return null;
}

export function findIndexByKeyValue(q: any, arr: Array<any>): number {
    const searchKeys = Object.keys(q);
    for (let i = 0, l = arr.length; i < l; i++) {
        const o = arr[i];
        if ( all(v => v, searchKeys.map((key: string) => o[key] && o[key] === q[key]) ) ) {
            return i;
        }
    }
    return -1;
}
/* tslint:enable:no-any */