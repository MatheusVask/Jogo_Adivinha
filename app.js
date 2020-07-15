const numRandom = parseInt(Math.random() * 100)
let inputUser = document.getElementById('numeroUser')

let valorUsuario

inputUser.addEventListener('blur', function(){
    valorUsuario = inputUser.value
})


document.querySelector('button').addEventListener('click', function(){
    exibiResultado()
})


document.addEventListener('focusout', function(){
        exibiResultado()
})



function exibiResultado(){

    let teste = async function (){
        
    }

    if(valorUsuario == numRandom){
        document.querySelector('h3').classList.add('entrou')
        document.querySelector('h3').style.background = 'green';
        document.querySelector('h3').textContent = 'Você Adivinhou o Numero!!!';

    }else if(valorUsuario != numRandom && valorUsuario < numRandom){
        if(valorUsuario > 0 && valorUsuario < 100){
            document.querySelector('h3').classList.add('entrou')
            document.querySelector('h3').textContent = 'Você digitou um valor Abaixo!!!'

        }else{
            document.querySelector('h3').classList.add('entrou')
            document.querySelector('h3').textContent = 'ATENÇÃO, VOCÊ DIGITOU UM VALOR FORA DO INTERVALO!!!'
        }

    }else if(valorUsuario != numRandom && valorUsuario > numRandom){
        if(valorUsuario > 0 && valorUsuario < 100){
            document.querySelector('h3').classList.add('entrou')
            document.querySelector('h3').textContent = 'Você digitou um valor Acima!!!'
            console.log(numRandom)

        }else{
            document.querySelector('h3').classList.add('entrou')
            document.querySelector('h3').textContent = 'ATENÇÃO, VOCÊ DIGITOU UM VALOR FORA DO INTERVALO!!!'
        }
    }
}