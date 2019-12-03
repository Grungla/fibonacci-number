import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
//Finding nth Fibonacci number
//Navie Recursive Approach
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// console.log(fib(11));

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
