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
      this.analitic[prop] = this.analitic[prop] + 1:    //checked && correct
      this.analitic[prop] = 1;
  };


  fillTable(selector, collection){
    const table = document.querySelector(`.${selector}`);
    if (table) {
      for (let key in collection) {
        this.createRow(table, key, collection[key]);
      }
    }
  };

  createRow(table, key, prop) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = key;
    tr.append(td);

    let td2 = document.createElement('td');
    td2.innerHTML = prop;
    tr.append(td2);
    table.append(tr);
  }
};