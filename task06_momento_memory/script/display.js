export function display(src = null) {
  let display = document.querySelector('.display');
  let p = document.createElement("p")

  if(src === "clear") {
    display.innerHTML = '';
    p.innerHTML = 'Variants of words:';
  } else if (src) {
    p.innerHTML = src;
  }
  display.append(p);
}