export function display(src = null) {
    let display = document.querySelector('.display');
    let p = document.createElement("p")

    if(src === "clear") {
        display.innerHTML = '';
        p.innerHTML = 'The sum is:';
    } else if (src) {
        p.innerHTML = src;
    }
    display.append(p);

}