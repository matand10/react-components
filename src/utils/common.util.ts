export function sum(...num: number[]) {
    return num.reduce((acc, item) => {
        return acc += item
    }, 0)
}