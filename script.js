const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const imagemMiniatura = [document.getElementById('0-imagem-miniatura'), document.getElementById('1-imagem-miniatura'), document.getElementById('2-imagem-miniatura')]

const opcoesCores = [
    { nome: 'Verde-cipreste', pasta: 'imagens-verde-cipreste' },
    { nome: 'Azul-inverno', pasta: 'imagens-azul-inverno' },
    { nome: 'Meia-noite', pasta: 'imagens-meia-noite' },
    { nome: 'Estelar', pasta: 'imagens-estelar' },
    { nome: 'Rosa-claro', pasta: 'imagens-rosa-claro' }
]
const opcoesTamanho = ['41mm', '45mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

// Função para evitar repetição de código
function trocaCorImagemMaior() {
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
}

// Função para evitar repetição de código
function ModificaTitulo() {
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    trocaCorImagemMaior();
}

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    ModificaTitulo();
    if (opcoesTamanho[tamanhoSelecionado] === '41mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    ModificaTitulo();
    nomeCor.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
    trocaCorImagemMaior();
    for (let i = 0; i <= 2; i++) {
        imagemMiniatura[i].src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${i}.jpeg`;
    }
}