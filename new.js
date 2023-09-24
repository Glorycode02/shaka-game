let board = document.getElementById("board")

for (let i = 1; i < 101; i++) {
    board.innerHTML += `
  <button>${i}</button>
  `
}

const numbers = [...document.querySelectorAll("button")]

let playerone = {
    index: 0,
    controls: {
        up: "w",
        down: "s",
        right: "d",
        left: "a",
        check: 'CapsLock'
    }
}

let playertwo = {
    index: 9,
    controls: {
        up: "ArrowUp",
        down: "ArrowDown",
        right: "ArrowRight",
        left: "ArrowLeft",
        check: 'Enter'
    }
}
numbers[playerone.index].classList.add("playerone")
numbers[playertwo.index].classList.add('playertwo')

function move() {
    onkeydown = e => {
        // playerone controls
        if (e.key === playerone.controls.left) {
            playerone.index--;
            numbers[playerone.index].classList.add('playerone');
            numbers[playerone.index + 1].classList.remove('playerone');
        }

        else if (e.key === playerone.controls.right) {
            playerone.index++;
            numbers[playerone.index].classList.add('playerone');
            numbers[playerone.index - 1].classList.remove('playerone');
        }

        else if (e.key === playerone.controls.up) {
            playerone.index -= 10;
            numbers[playerone.index].classList.add('playerone');
            numbers[playerone.index + 10].classList.remove('playerone');
        }
        else if (e.key === playerone.controls.down) {
            playerone.index += 10;
            numbers[playerone.index].classList.add('playerone');
            numbers[playerone.index - 10].classList.remove('playerone');
        }
        if (playerone.index === numindex && e.key === playerone.check) {
            numbers[numindex].classList.add('checkedone');
            console.log('actually');
         };

        //    playertwo controls
        if (e.key === playertwo.controls.left) {
            playertwo.index--;
            numbers[playertwo.index].classList.add('playertwo');
            numbers[playertwo.index + 1].classList.remove('playertwo');
        }

        else if (e.key === playertwo.controls.right) {
            playertwo.index++;
            numbers[playertwo.index].classList.add('playertwo');
            numbers[playertwo.index - 1].classList.remove('playertwo');
        }

        else if (e.key === playertwo.controls.up) {
            playertwo.index -= 10;
            numbers[playertwo.index].classList.add('playertwo');
            numbers[playertwo.index + 10].classList.remove('playertwo');
        }
        else if (e.key === playertwo.controls.down) {
            playertwo.index += 10;
            numbers[playertwo.index].classList.add('playertwo');
            numbers[playertwo.index - 10].classList.remove('playertwo');
        }

        //when they meet
        numbers.forEach((element) => element.classList.remove("oneindex"));
        if (playerone.index == playertwo.index) {
            numbers[playerone.index && playertwo.index].classList.add("oneindex");
            numbers[playerone.index].classList.remove('playerone');
            numbers[playertwo.index].classList.remove('playertwo');
        }
        else if (playerone.index !== playertwo.index) {
            numbers[playerone.index].classList.add('playerone');
            numbers[playertwo.index].classList.add('playertwo');
        }
    }

}

move()

numbers[6].classList.add('checkedone');

let numindex = 0
function speaker() {
    if ('speechSynthesis' in window) {
        if (numindex < numbers.length) {
                let numtospeak = numbers[numindex].textContent;
                let currentnum = document.getElementById("currentnum")
                currentnum.innerHTML = numtospeak;
                numtospeak++;
                const utterance = new SpeechSynthesisUtterance();
                utterance.text = `Find ${numtospeak}`;
                speechSynthesis.speak(utterance);
                
        };

    };

};

speaker();