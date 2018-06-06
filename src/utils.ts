
export type Index<T> = {
    [index: string]: T
}

export function startWithUpperCase(name: string) {
    if (name && name.length) {
        return name[0].toUpperCase() + name.substr(1);
    }
    return name;
}
