import { randn_bm } from "./generic-count";

export class FillTable {
  constructor(number) {
    this.amauntElements = number;
    this.data = {};
    this.analitic = {};
    this.fillData(this.amauntElements);
  }

  fillData(num) {
    for (let i = 1; i <= num; i++) {
      this.data[i] = randn_bm();
      this.checkElement(this.data[i]);
    }

    this.fillTable('table', this.data);
    this.fillTable('table2', this.analitic);

  };

  checkElement(prop) {
    (this.analitic[prop])?
      this.analitic[prop] +=1:
      this.analitic[prop] = 1;
  };


  fillTable(selector, collection){
    const table = document.querySelector(`.${selector}`);
    for (let key in collection) {
      table.append(this.createCastomRow(key, collection[key]));
    }
  };

  createCastomRow(first, second) {
    let row = document.createElement('tr');
    row.append(this.createCastomElement(first));
    row.append(this.createCastomElement(second));
    return row;
  }

  createCastomElement(str) {
    let td = document.createElement('td');
    td.innerHTML = str;
    return td;
  }
};