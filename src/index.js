//Finding nth Fibonacci number
//Navie Recursive Approach
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

//Dynamic Programming Solution
//assuming n > 2
function fib_dp(n) {
  let seq = new Array(n).fill(0);
  seq[0] = 1;
  seq[1] = 1; // [1, 1, .......n]

  for (let i = 2; i < n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq[n - 1];
}

console.log(fib_dp(6));
