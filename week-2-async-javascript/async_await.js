function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("Hi");
	await setTimeoutPromisified(3000);
	console.log("Dev");
	await setTimeoutPromisified(5000);
	console.log("Welcome to my Profile");
}

solve();
