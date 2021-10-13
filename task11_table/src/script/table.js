import { data as remoteData } from "./data.js"


export class Table {
    constructor() {
        this.data = remoteData;
        this.render(false)
    }

    render(isSetTable = true){
        if (!isSetTable) {
            this.createTable();
            this.onFocusTd()
        } else {
            this.setToTable()
            this.createTable();
            this.onFocusTd()
        }
    }

    setToTable () {
        let data = this.data;
        let tds = [...document.querySelectorAll('.td')];
        for (let i = 0; i < tds.length; ){
            for (let row of data) {
                row.name = tds[i].innerText;
                i++;
                row.age = tds[i].innerText;
                i++;
            }
        }
        this.data = data;
    }

    createTable () {
        const body = document.querySelector('body')
        body.innerText ='';
        let table = document.createElement('table');
            table.className = 'table'
            table.insertAdjacentHTML('afterbegin', `
            <tbody>
                <tr class="head">
                    <th class="head-first">name</th>
                    <th class="head-second">age</th>
                </tr>
            </tbody>
            <tbody>
                <tr class="row-1">
                    <td class="td-name-1 td" contenteditable="true" data-id="340">${this.data[0].name}</td>
                    <td class="td-age-1 td" contenteditable="true" data-id="580">${this.data[0].age}</td>
                </tr>
                 <tr class="row-2">
                    <td class="td-name-2 td" contenteditable="true" data-id="56">${this.data[1].name}</td>
                    <td class="td-age-2 td"  contenteditable="true" data-id="617">${this.data[1].age}</td>
                 </tr>
                 <tr class="row-3">
                    <td class="td-name-3 td" contenteditable="true" data-id="308">${this.data[2].name}</td>
                    <td class="td-age-3 td" contenteditable="true" data-id="658">${this.data[2].age}</td>
                </tr>
            </tbody>
        `)
        body.insertAdjacentElement('afterbegin', table);
        this.onClickTable();
    }

    onClickTable () {
        document.querySelector('.table').addEventListener('click', this.splitListeners);
    }

    onFocusTd = () => {
        const tds =  document.querySelectorAll('.td');
        tds.forEach(el => el.addEventListener('focusout', this.updateTd))
    }

    updateTd = () => {
        const tds =  document.querySelectorAll('.td');
        tds.forEach(el => el.removeEventListener('focusout', this.updateTd))
        this.render();
    }

    splitListeners = (event) => {
        switch (event.target.className) {
            case 'head-first':
                this.sortBy('name', 0)
                this.render(false);
                break;
            case 'head-second':
                this.sortBy('age', 1)
                this.render(false);
                break;
        }
    }

    sortBy = (str) => {
        if (str === 'name') {
            this.data.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
            });
        } else {
            this.data.sort(function (a, b) {
                if (a.age > b.age) {
                    return 1;
                }
                if (a.age < b.age) {
                    return -1;
                }
            });
        }
    }
}