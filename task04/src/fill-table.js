import { randn_bm } from "./generic-count";

export class FillTable {
  constructor(number) {
    this.amauntElements = number;
    this.data = {};
    this.fillData(this.amauntElements);
  }

  fillData(num) {
    for (let i = 0; i < num; i++) {
      this.data[i] = randn_bm();
    }
  }

  addToTable() {
    const table = document.querySelector('.table');
    for (let key in this.data) {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      td1.innerHTML = key;
      tr.append(td1);

      let td2 = document.createElement('td');
      td2.innerHTML = this.data[key]
      tr.append(td2);
      table.append(tr);
    }
  }
};