function colors(){
    let red=document.getElementById('red').value
    let green=document.getElementById('green').value
    let blue=document.getElementById('blue').value
    let resultado=document.querySelector('span')
    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'
    resultado.innerText=document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'
}