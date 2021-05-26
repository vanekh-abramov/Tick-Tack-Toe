const container = document.getElementById('container')
const $windowResult = document.querySelector('.window-result')
const $result = document.querySelector('.result')
const $btn = document.querySelector('.btn')
const boxes = document.getElementsByClassName('box');

// preloader 

const $preloader = document.querySelector('.preloader')
const $startBtn = document.querySelector('.start-btn')
const $xName = document.getElementById('x-name')
const $oName = document.getElementById('o-name')

// counter 

let $firstPlayer = document.querySelector('.players-counter-first')
let $secondPlayer = document.querySelector('.players-counter-second')







let firstPlayerCounter = 0;
let secondPlayerCounter = 0;

let move = 0; 
let result = ' ';

container.addEventListener('click', e => {
    if(e.target.className = 'box'){
        if(move % 2 === 0){
            e.target.innerHTML = 'X' 
        }else{
            e.target.innerHTML = 'O'
             }
        move++ 
        check()
    }
})

const check = () => {
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i<arr.length; i++){
        if(boxes[arr[i][0]].innerHTML === 'X' && boxes[arr[i][1]].innerHTML === 'X' && boxes[arr[i][2]].innerHTML === 'X'){
            result = `${$xName.value}`
            firstPlayerCounter++
            showResoult(result)
        }else if(boxes[arr[i][0]].innerHTML === 'O' && boxes[arr[i][1]].innerHTML === 'O' && boxes[arr[i][2]].innerHTML === 'O'){
            result = `${$oName.value}`
            secondPlayerCounter++
            showResoult(result)
        }else if(boxes[arr[0][0]].innerHTML !== '' && boxes[arr[0][1]].innerHTML !== '' && boxes[arr[0][2]].innerHTML !== '' && boxes[arr[1][0]].innerHTML !== '' && boxes[arr[1][1]].innerHTML !== '' && boxes[arr[1][2]].innerHTML !== '' && boxes[arr[2][0]].innerHTML !== '' && boxes[arr[2][1]].innerHTML !== '' && boxes[arr[2][2]].innerHTML !== ''){
            result = 'ничья'
            showResoult(result)
        }    
    }
    
}
    function showResoult (result){
        $result.innerHTML = `${result} Won !!! `
        $windowResult.style.display = ('block')
    }
    

$btn.addEventListener('click', e => {
    if(localStorage.length > 0){
        $windowResult.style.display = ('none')
        for (let bx of boxes) {
            bx.innerHTML = ''
            $firstPlayer.innerHTML = `${firstPlayerCounter} ${$xName.value}`
            $secondPlayer.innerHTML = `${secondPlayerCounter} ${$oName.value}`
          }
    }
})


// preloader

$startBtn.addEventListener('click', e => {
    if($xName.value !== '' || $oName.value !== ''){
        localStorage.setItem('nameOfX', $xName.value)
        localStorage.setItem('nameOfO', $oName.value)
        $preloader.style.top = ('-2000px')
    }
})
