import '../style/style.scss'

window.onload = async function() {
    try {
        const Render = await import('./render')
        console.log(Render)
        new Render.Render()
    } catch (error) {
        const wrapper = document.querySelector('.wrapper')
        wrapper.insertAdjacentHTML('beforeend', `
        <h3>Something got lost in our code along the way. 
        We're sorry and will try to fix it right after lunch.</h3>`)
    }
};