//  importes
import GithubServices from "./services/GithubServices.js";

//  Carregando servisos
const github = new GithubServices();

//  Variaveis do DOM
const title = document.querySelector("head title");
const description = document.querySelector("meta[name='description']");
const logo = document.querySelector("#logo");
const infoName = document.querySelector("#name span");
const infoDescription = document.querySelector("#description p");
const infoCreate = document.querySelector("#create p");
const infoOwner = document.querySelector("#owner");
const infoLanguage = document.querySelector("#language p");
const infoLink = document.querySelector("#link a");
const infoStar = document.querySelector("#star span");
const infoWatchers = document.querySelector("#watchers span");
const infoTopics = document.querySelector("#topics div");
const infoLicense = document.querySelector("#license p");
const infoLanguages = document.querySelector("#languages div");
const infoContributors = document.querySelector("#Contributors div");


//  Pegar os parametros da url
let querys = location.search.slice(1).split('&');
let params = {};

//  Função para mostra um erro na tela do usuario
function erro(status=500, msg='Algo deu errado por favor tente mais tarde') {
    //  Metadados
    title.innerText = `${status} | GitHub`;
    description.innerText = msg;

    // Subistitue o esqueleto do site para um de erro
    document.body.innerHTML = `<div class="erro">${msg}</div>`
}

//  Pegar as variaveis na url e colocar em um objeto
querys.forEach(function (parte) {
    let chaveValor = parte.split('=');
    params[chaveValor[0]] = chaveValor[1];
});

//  Carregar as informações ao carregar a pagina 
window.addEventListener("load", async ()=>{
    try {
        //  Verificar se foi passada a variavel por url
        if(!params.repos) erro(404,"Essa pagina não existe")

        //  Pegar informações
        const repo = await github.getRepositorie(params.repos);
        const user = await github.getUser();

        if(!repo.status){
            //  Metadados
            title.innerText = `${repo.name} | GitHub`;
            description.innerText = repo.bio;
        
            //  Header
            logo.innerText = user.login;

            //  Infomações
            infoName.innerText = repo.name

            if(repo.description) infoDescription.innerText = repo.description;
            else infoDescription.parentNode.style.display = "none";

            let create = new Date(repo.created_at)
            infoCreate.innerText = create.toLocaleDateString()

            infoOwner.innerHTML += `
                <a href="${repo.owner.html_url}" class="avatar">
                    <div class="perfil-img"><img src="${repo.owner.avatar_url}" alt="avatar do ${repo.owner.login}"></div>
                    <h4>${repo.owner.login}</h4>
                </a>
            `

            infoLanguage.innerText = repo.language

            infoLink.src = repo.url
            infoLink.innerText = repo.url

            infoStar.innerText = repo.stargazers_count
            infoWatchers.innerText = repo.watchers_count

            if(repo.topics.length != 0){
                repo.topics.forEach(topic => {
                    infoTopics.innerHTML +=`<span>${topic}</span>`;
                });
            }
            else infoTopics.parentNode.style.display = "none";

            console.log(repo.license)
            if(repo.license) infoLicense.innerText = repo.license.name;
            else  infoLicense.innerText = 'Não definido';

            const languages = await github.getRepositorieLanguages(params.repos)

            if(languages.length != 0){
                for(let language in languages){
                    infoLanguages.innerHTML +=`<span>${language}</span>`;
                }
            }
            else infoLanguages.parentNode.style.display = "none";

            const contributors = await github.getRepositorieContributors(params.repos)

            if(contributors.length != 0){
                contributors.forEach(contributor => {
                    infoContributors.innerHTML +=`
                        <a href="${contributor.html_url}" class="contributor">
                            <div class="perfil-img"><img src="${contributor.avatar_url}" alt="avatar do ${contributor.login}"></div>
                            <h4>${contributor.login}</h4>
                        </a>
                    `;
                });
            }
            else infoContributors.parentNode.style.display = "none";
        }
    } catch (error) {
        console.log(error)
        erro()
    }

    //  Mostra o site (So para dar um charme)
    document.body.style.opacity = 1
})