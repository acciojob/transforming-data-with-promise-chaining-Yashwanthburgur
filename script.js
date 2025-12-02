const button = document.getElementById('btn');

button.addEventListener('click', processdata);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function processdata() {
    const output = document.getElementById('output');
    let value = parseInt(document.getElementById('ip').value);
    
    // Start chain
    delay(2000)
    .then(() => {
        // Step 1: Show initial value after 2s
        output.textContent = "Result: " + value;
        return delay(2000); // Wait 2s
    })
    .then(() => {
        // Step 2: Multiply after 2s (total 4s)
        value *= 2;
        output.textContent = "Result: " + value;
        return delay(1000); // Wait 1s
    })
    .then(() => {
        // Step 3: Subtract after 1s (total 5s)
        value -= 3;
        output.textContent = "Result: " + value;
        return delay(1000); // Wait 1s
    })
    .then(() => {
        // Step 4: Divide after 1s (total 6s)
        value /= 2;
        output.textContent = "Result: " + value;
        return delay(1000); // Wait 1s
    })
    .then(() => {
        // Step 5: Add 10 after 1s (total 7s)
        value += 10;
        output.textContent = "Final Result: " + value;
    })
    .catch(error => console.error(error));
}