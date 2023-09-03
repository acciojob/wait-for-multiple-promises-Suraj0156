//your JS code here. If required.
const promises = [];

for (let i = 0; i < 3; i++) {
  const delay = Math.random() * 2 + 1;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });

  promises.push(promise);
}

Promise.all(promises).then((results) => {
  const table = document.getElementById("table");

  // Remove the loading text
  const loadingRow = table.rows[0];
  loadingRow.remove();

  // Add the results to the table
  for (let i = 0; i < results.length; i++) {
    const row = table.insertRow(-1);
    row.insertCell(0).textContent = `Promise ${i + 1}`;
    row.insertCell(1).textContent = results[i];
  }

  // Calculate the total time taken to resolve all promises
  const totalTime = results.reduce((sum, value) => sum + value, 0);

  // Add a row for the total time
  const totalRow = table.insertRow(-1);
  totalRow.insertCell(0).textContent = "Total";
  totalRow.insertCell(1).textContent = totalTime.toFixed(2);
});
