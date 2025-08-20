export function calculateFibonacci(number) {
  if (number <= 1) {
    return number
  }
  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2)
}
