//your JS code here. If required.
// const res = document.getElementById("output");

// const promises = [
// 	new Promise((resolve) =>{
// 	const time = Math.floor(Math.random() *3 +1) * 1000;
// 	setTimeOut(() => resolve ({ name:"promise 1", time: time/1000}), 1000);
// 	}),
// 	new Promise((resolve) =>{
// 	const time = Math.floor(Math.random() *3 +1) * 1000;
// 	setTimeOut(() => resolve ({ name:"promise 2", time: time/1000}), 1000);
// 	}),
// 	new Promise((resolve) =>{
// 	const time = Math.floor(Math.random() *3 +1) * 1000;
// 	setTimeOut(() => resolve ({ name:"promise 3", time: time/1000}), 1000);
// 	})
// ];

// async function callfn(){
// 	await Promise.all(promises).then((results)=>{
// 		res.innerHTML=``;
// 		results.forEach((item)=>{
// 			res.innerHTML +=`
//    <tr>
//    <td>$(item.name)</td>
//    <td>$(item.time)</td>
//    </tr>`;
// 	});
// 	}).catch((err)=>{
// 		console.log(err);
// 	});
// }

// callfn();



const res = document.getElementById("output");

const promises = [
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 1", time: time / 1000 }), time);
  }),
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 2", time: time / 1000 }), time);
  }),
  new Promise((resolve) => {
    const time = Math.floor(Math.random() * 3 + 1) * 1000;
    setTimeout(() => resolve({ name: "Promise 3", time: time / 1000 }), time);
  }),
];

async function callfn() {
  res.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

  await Promise.all(promises)
    .then((results) => {
      res.innerHTML = "";
      results.forEach((item) => {
        res.innerHTML += `
          <tr>
            <td>${item.name}</td>
            <td>${item.time}</td>
          </tr>`;
      });
      const totalTime = results.reduce((total, item) => total + item.time, 0);
      res.innerHTML += `
        <tr>
          <td>Total</td>
          <td>${totalTime.toFixed(3)}</td>
        </tr>`;
    })
    .catch((err) => {
      console.log(err);
    });
}

callfn();
