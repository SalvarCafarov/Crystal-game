let wDom = document.querySelector('#wins')
let lDom = document.querySelector('#losses')
let ntDom = document.querySelector('#point')
let rndDom = document.querySelector('#random-score')
let win = 0
let loss = 0
let point =0
let randomScore = getRnd()
function getRnd(){
    return Math.floor(Math.random()*100)
}

function getInfo(){
    lDom.innerHTML = loss
    ntDom.innerHTML = point
    wDom.innerHTML = win
    
    rndDom.innerHTML = randomScore
}
let diamonds = document.querySelectorAll('.btn-diamond')
diamonds.forEach(item=>{
    item.addEventListener('click',()=>{
        point+=  Number(item.dataset.deyer)
        if(point === randomScore){
            win+=1
            point = 0
            randomScore = getRnd()
            getInfo()
        }
        else if(point > randomScore){
            loss +=1
            point=0
            randomScore = getRnd()
            getInfo()
        }
        else{
            getInfo()
        }
    })
})
getInfo()