import { data } from "./data.js"

export class Table {
    constructor() {
        this.structure = null;
        this.loadData();
        this.render()
    }

    loadData () {
        this.structure = Object.entries(data).map(el => el[1]).map(el => Object.entries(el));
        console.log(`take data`, this.structure);
    }

    render () {
        this.build();
        this.onClick();
    }

    onHead = (event) => {
        if(event.target.innerText === 'name'){
            console.log("name")
            console.log(` sort by name`)
        } else if (event.target.innerText === 'age'){
            console.log("age")
            console.log(` sort by age`)
        } else if (event.target.nodeName === 'TD') {
            console.log(event.target.nodeName)
            console.log(`edit td`)
        }
    }

    onClick () {
        document.addEventListener('click', this.onHead )

    }

    build () {
        let table = document.querySelector('.table')
        for (let element of this.structure) {
            let tr = document.createElement('tr')
            tr.className = 'tr';
            let name = document.createElement('td');
            name.innerHTML = `${element[0][1]}`
            let age = document.createElement('td');
            age.innerHTML = `${element[1][1]}`
            tr.prepend(name);
            tr.append(age)
            table.append(tr)
        }
    }


}