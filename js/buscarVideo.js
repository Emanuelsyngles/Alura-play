import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    if (typeof busca === 'object' && busca !==null) {
        lista.appendChild(
            constroiCard(busca.titulo, busca.descricao, busca.imagem))
        } else {
            lista.innerHTML = '<h2 class="mensagem__titulo">Não foi possivel exibir o video com esse titulo, tente novamente mais tarde</h2>'
        }
    }

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))