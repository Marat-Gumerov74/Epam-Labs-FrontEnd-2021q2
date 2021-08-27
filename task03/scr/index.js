'use strict';

const a = {x: 1, t:5};
const b = {x: 2, y: 2, t: 5};
const c = {x: 4, t: 1};

const resObj = add(a, b, a);
const resInter = intersect(a,b,c);

console.log('result obj:', resObj);
console.log('result resInter:', resInter);


 function add(...collectObj) {
  let result = Object.assign({}, collectObj[0]);

  for (let i = 1; i < collectObj.length; i++) {
    for (let key in collectObj[i]) {
      (result.hasOwnProperty(key)) ?
      result[key] = result[key] + collectObj[i][key]:
      result[key] = collectObj[i][key];
    };
  };

  return result;
};

  function intersect(...collectObj) {
    let copyfirst = Object.assign({}, collectObj[0]);
    let result = Object.create(null);

    for (let i = 0; i < collectObj.length; i++) {
      for (let key in collectObj[i]) {
        if (copyfirst.hasOwnProperty(key)) {
          result[i + key] = collectObj[i][key];
        } else {
          delete copyfirst[key];
        }
      }
    }

  return result;
};