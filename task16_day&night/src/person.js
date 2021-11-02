export class Person {
  constructor() {
    this.myStorage = window.localStorage;
    this.name = null
    this.nameButton = ''
    this.isDark = false
  }

  setName = (name) => {
    this.name = name
  }

  setNameButton = (value) => {
    this.nameButton = value
  }

  setIsDark = (value) => {
    this.isDark = value;
  }

  getNameButton = () => this.nameButton;

  getName = () => this.name

  loadStorage = () => this.myStorage.getItem(this.name)

  updateStorage = () => {
    if (this.name) {
      this.myStorage.setItem(`${this.name}`, `${this.isDark}`)
    }
  }
}