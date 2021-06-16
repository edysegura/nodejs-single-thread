export function fibonacciRecursion(number) {
    if (number <= 1) {
        return number
    }
    return fibonacciRecursion(number - 1) + fibonacciRecursion(number -2)
}