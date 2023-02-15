
// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


/* toda vez que eu clickar, adiciona a classe hide num 
e tira de outro, além de executar a função cookie  */
btnTry.addEventListener("click", openCookieEvent)
function openCookieEvent() {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    cookie()
}

/* toda vez que eu clickar, remove a classe
hide num e tira de outro */
btnReset.addEventListener("click", closeCookieEvent)
function closeCookieEvent() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
}

const text = document.querySelector('.screen2 p')

// array com as mensagens
const messages = [
  'A vida trará coisas boas se tiver paciência.',
  'O amor é a chave que abre qualquer fechadura.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Primeiro você realiza, depois você conta.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Siga os bons e aprenda com eles.',
  'Tudo o que você quer está do outro lado do medo.',
  'O seu resultado é inversamente proporcional a suas desculpas.',
  'Um pequeno passo e tudo muda'  
]

// função que faz aleatória a escolha da mensagem
function cookie() {
    const totalMessage = messages.length
    const randomMessage = Math.floor(Math.random() * totalMessage)
  
    text.innerHTML = messages[randomMessage]
  }

