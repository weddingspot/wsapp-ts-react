
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