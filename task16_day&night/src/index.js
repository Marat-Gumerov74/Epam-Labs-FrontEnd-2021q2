import './style.scss'
import { Person } from "./person";

window.onload = function () {
  const person = new Person()
  let value = null;
  let isDark = document.body.classList.contains('dark') ? true: false;
  person.setIsDark(isDark);

  let changeBodyClass = () => document.body.classList.toggle('dark')

  toggleTheme.onclick = () => {
    document.body.classList.toggle('.dark')
    isDark = document.body.classList.toggle("dark")? true:false;
    person.setIsDark(isDark)
    person.updateStorage()
    let nameButton = document.body.classList.contains('dark') ? "Light":"Dark";
    person.setNameButton(nameButton)
    toggleTheme.innerText = person.getNameButton()
  }

  butt.onclick = function() {
    const name = document.getElementById('elem1').value;
    person.setName(name)
    document.getElementById('str').innerHTML="Введено имя: "+person.getName();
    value = person.loadStorage()
    if (value !== null) {
      changeBodyClass()
    }
    person.updateStorage()
  }
}