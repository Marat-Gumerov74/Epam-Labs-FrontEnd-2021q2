import { data } from "./data.js"

export class Table {
    constructor() {
        this.structure = null;
        this.loadData();
        this.render();
    }

    loadData () {
        this.structure = Object.entries(data).map(el => el[1]);
    }

    render () {
        this.build();
        this.onClick();
    }

    onHead = (event) => {
        if(event.target.innerText === 'name'){
            this.sortBy('name')
            this.render()

        } else if (event.target.innerText === 'age'){
            this.sortBy('age')
            this.render()
        }
    }

    sortBy = (str) => {
        this.structure =  this.structure.sort(function(x, y){
            if (x[str] < y[str]) {
                return -1;
            }
            if (x[str] > y[str]) {
                return 1;
            }
                return 0;
            });
    }

    onClick () {
        document.addEventListener('click', this.onHead );
        const tds = document.querySelectorAll('td');

        for (let i = 0; i < tds.length; i++) {
            tds[i].addEventListener('click', function func() {
                let input = document.createElement('input');
                input.value = this.innerHTML;
                this.innerHTML = '';
                this.appendChild(input);
                let td = this;
                input.addEventListener('blur', function() {
                    td.innerHTML = this.value;
                    td.addEventListener('click', func);
                });

                this.removeEventListener('click', func);
            });
        }
    }

    build () {
        let table = document.querySelector('.table');
        this.clearAttachment(table);
        this.buildHeader(table);

        for (let element of this.structure) {
            let tr = document.createElement('tr')
            tr.className = 'tr';
            let name = document.createElement('td');
            name.innerHTML = `${element.name}`
            let age = document.createElement('td');
            age.innerHTML = `${element.age}`
            tr.prepend(name);
            tr.append(age)
            table.append(tr)
        }
    }

    clearAttachment = tag => tag.innerHTML = '';

    buildHeader = tag => tag.insertAdjacentHTML('afterbegin',
                    `<tr class="head"><th>name</th><th>age</th></tr>`);
}