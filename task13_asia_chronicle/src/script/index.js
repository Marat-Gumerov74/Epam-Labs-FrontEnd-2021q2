// import { dataCollector } from './dataCollector.js';
import { Render } from  './render.js';

window.onload = function() {
    const render = new Render();
    render.addListenTitle();
    render.addListenCategories();
    render.loadData();
     render.loadTitle();
};