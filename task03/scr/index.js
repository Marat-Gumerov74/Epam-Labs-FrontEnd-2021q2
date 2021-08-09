'use strict';

const a = {x: 1};
const b = {x: 2, y: 2, t: 5};
const resObj = add(a, b, a);
const resInter = intersect(a,b);

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
    let result = Object.assign({}, collectObj[0]);

    for (let i = 1; i < collectObj.length; i++) {
      for (let key in collectObj[i]) {
        if (result.hasOwnProperty(key)) {
           result["new" + key] = collectObj[i][key];
        };
      };
    };

  return result;
};