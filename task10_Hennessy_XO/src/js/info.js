export class Info {

    startInfo () {
        console.log(1)
        document.body.insertAdjacentHTML('afterbegin', `<span class="info"><strong>Играем!</strong> <br> Игрок-1 играет X. Игрок-2  играет O</span>`);
    }
}