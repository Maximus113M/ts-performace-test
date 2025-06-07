
/**
 * isEven
 * Determina si un número es par.
 *
 * @param times - number of iterations.
 * @returns message.
 */
export function startTest(times: number) {
    for (let n = 0; n < times; n++) {
        const numberList: number[] = []
        const evenNumbers: number[] = []
        const oddNumbers: number[] = []

        for (let i = 0; i < 10000000; i++) {
            numberList.push(i)
        }
        for (let i of numberList) {
            if (i % 2 == 0) {
                evenNumbers.push(i)
                continue
            }
            oddNumbers.push(i)
        }
        let totalEvenNumbers = 0
        let totalOddNumbers = 0
        for (const i of evenNumbers) {
            totalEvenNumbers += i
        }
        for (const i of oddNumbers) {
            totalOddNumbers += i
        }
    }

    return { message: 'Success' }
}