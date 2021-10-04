import {DataCollector} from "./dataCollector.js";

export class Render {
    constructor() {
        this.dataCollector = new DataCollector();
        this.dataCategories = null;
        this.dataCategory = {};
        this.loadCategories()
    }

    async loadCategories() {
        this.dataCategories = await this.loadData('https://api.publicapis.org/categories');
        this.renderCategories()
        this.listenerButton()
        this.listenerCategory()
    }

    async loadCategory(name) {
        //this.clearCategory()
        let data = await this.loadData(`https://api.publicapis.org/entries?category=${name}`);
        this.addToDataCategory(name, data.entries)
        //console.log(this.dataCategory)
        this.renderCategory(name)
        // this.listenerButton()
        // this.listenerCategory()
    }

    // clearCategory () {
    //     if (this.dataCategory){
    //
    //     }
    // }

    addToDataCategory = (key, prop) => this.dataCategory.key = prop;

    getFromDataCategory = (key) => {
        let data = this.dataCategory;
        return data.key;
    }


    renderCategory(str) {
        let dataCategories = this.getFromDataCategory(str);
        console.log(dataCategories)
        let category = [...document.querySelectorAll('.dropdown-category')]
            .filter(el => el.innerHTML === str)
            .shift();
        let titleWrapper = document.createElement("div");
        titleWrapper.classList.add("sub-dropdown-menu")

        for (let i = 0; i < 3; i++) {
            let title = Object.values(dataCategories[i])[0]
            titleWrapper.insertAdjacentHTML('beforeend', `<p class="title">${title}</p>`)
            console.log(titleWrapper)
            }

        category.insertAdjacentElement('beforeend', titleWrapper)
    }


    async loadData(url) {
        return await this.dataCollector.getData(`${url}`)
            .then(data => data)
            .then(body => body)
            .catch(({message}) => console.log(`Error `, message));
    }

    renderCategories() {
        let dropdown = document.querySelector('.myDropdown');
        for (let element of this.dataCategories) {
            dropdown.insertAdjacentHTML('beforeend', `<div class="dropdown-category">${element}</div>`);
        }
    }


    listenerButton() {
        document.body.addEventListener('click', function (e) {
            if (e.target.classList.contains("drop-btn")) {
                document.querySelector('.dropdown-categories').classList.toggle("show");
            }
        })
    }


    listenerCategory = () => {
        let categories = document.querySelectorAll('.dropdown-category')
        categories.forEach(category => category.addEventListener('click', this.buildCategory))
    }

    buildCategory = (e) =>  this.loadCategory(`${e.target.innerHTML}`);


        // if (e.target.classList.contains('dropdown-category')) {
        //     this.renderCategory(e.target.innerHTML)
        //     //console.log(e.target.innerHTML)
        // }

}
