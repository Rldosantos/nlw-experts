const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Um estilo de programação",
        "Uma linguagem de programação",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Imprimir algo no console do navegador",
        "Criar uma variável",
        "Executar uma função assíncrona",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um comando de controle de fluxo",
        "Um local para armazenar valores",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um comando de controle de fluxo",
        "Um bloco de código reutilizável",
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let variavel = 10",
        "const variavel: 10",
        "var variavel => 10",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença",
        "'let' é para valores constantes e 'const' é para valores mutáveis",
        "'let' é para valores mutáveis e 'const' é para valores constantes",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Uma linguagem de marcação",
        "A representação da estrutura da página web",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Uma animação na página",
        "Uma ação detectada, como um clique do mouse",
        "Um tipo de dado",
      ],
      correta: 1
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 10; i++)",
        "loop (i = 0; i < 10; i++)",
        "while (i = 0; i < 10; i++)",
      ],
      correta: 0
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Um formato de dados para intercâmbio de informações",
        "Um comando para seleção de elementos HTML",
        "Uma biblioteca JavaScript",
      ],
      correta: 0
    },
];
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
  
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
            corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
        quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
}