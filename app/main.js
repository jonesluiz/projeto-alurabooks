let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI); //espere por uma promessa, que dá tempo de carregar as informações, ou seja, ele irá esperar o carregamento para executar a função
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}