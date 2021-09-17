export class Info {

    startInfo () {
        document.body.insertAdjacentHTML('afterbegin', `<span class="info"><strong>Играем!</strong> <br> Игрок-1 играет X. Игрок-2  играет O</span>`);
    }

    announcedWinner(src) {
        document.querySelector('.info')
            .insertAdjacentHTML('afterend', `<p class="win"><strong>${src}</strong></p>`);
    }
}