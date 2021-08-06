import "./reset.scss";
import "./style.scss";


function randn_bm() {
    let u = 0,
      v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
}


function addBase() {
  let array = [];

  for (let i = 0; i < 11; i++) {
    array.push([i, randn_bm()]);
    
  }
  return array;
}

let resultArr = addBase();

 const ul = document.querySelector('.counts');
 for (let i = 0; i < resultArr.length; i++) {
   let li = document.createElement('li');
   li.innerHTML += ` номер ${resultArr[i][0]} значение ${resultArr[i][1]} `;
   ul.append(li);
 }

 console.log(resultArr);