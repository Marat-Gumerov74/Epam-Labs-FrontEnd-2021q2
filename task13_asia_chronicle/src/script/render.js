import {DataCollector} from "./dataCollector.js";

export class Render {
    constructor() {
        this.data = null;
    }

    addListenTitle = () => {
        document.querySelector('.drop-btn-title').addEventListener('click', this.addToggle)
    }

    addListenCategories = () => {
        document.querySelector('.drop-btn-categories').addEventListener('click', this.addToggle)
    }

    addToggle = (e) => {
        let dropdownTitle = document.querySelector('.dropdown-title');
        let dropdownCategories = document.querySelector('.dropdown-categories');
         if (e.target.innerText === 'Title') dropdownTitle.classList.toggle('show');
         if (e.target.innerText === 'Category') dropdownCategories.classList.toggle('show');
    }

    loadData = () =>  {
        const dataCollector = new DataCollector();
        dataCollector.getData()
            .then(data => this.setData(data))
            .catch(({message})=>console.log(`Error `,message));
    }

    setData (data) {
        this.data = data;
        const titles = data.map(el => (el));
    }

    loadTitle() {
        console.log(this.data)
        // const arrTitles = this.data.map(el => el.API)
        // console.log(arrTitles)
    }


}
