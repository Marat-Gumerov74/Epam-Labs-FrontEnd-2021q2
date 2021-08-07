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
    this.addToTable();
  };

  checkElement(prop) {
    (this.analitic[prop])?
      this.analitic[prop] = this.analitic[prop] + 1:
      this.analitic[prop] = 1;
  };

  addToTable() {
    const table = document.querySelector('.table');
    const table2 = document.querySelector('.table2');

    for (let key in this.data) {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      td1.innerHTML = key;
      tr.append(td1);

      let td2 = document.createElement('td');
      td2.innerHTML = this.data[key]
      tr.append(td2);
      table.append(tr);
    };

    for (let key in this.analitic) {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      td1.innerHTML = key;
      tr.append(td1);

      let td2 = document.createElement('td');
      td2.innerHTML = this.analitic[key]
      tr.append(td2);
      table2.append(tr);
    };
  };
};