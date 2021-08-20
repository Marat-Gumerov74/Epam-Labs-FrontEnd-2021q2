export function display(src) {
  if (src) {
    let p = document.createElement("p")
    p.innerHTML = src;
    document.querySelector('.display').append(p);
  }

  if (src == 'clear') {
    let display = document.querySelector('.display');
    display.innerHTML = '';
    let p = document.createElement("p");
    p.innerHTML = 'сумма равна:';
    document.querySelector('.display').append(p);
  }
}