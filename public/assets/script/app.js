//  importes
import GithubServices from "./services/GithubServices.js";
import JsonServices from "./services/JsonServices.js";

//  Carregando servisos
const github = new GithubServices();
const json = new JsonServices();

// Variaveis do DOM
const title = document.querySelector("head title");
const description = document.querySelector("meta[name='description']");
const logo = document.querySelector("#logo");
const infoImage = document.querySelector("#perfil .perfil-img img") ;
const infoName = document.querySelector("#perfil .info h2") ;
const infoBio = document.querySelector("#perfil .info p") ;
const infoLocation = document.querySelector("#location") ;
const infoSite = document.querySelector("#site") ;
const infoCompany = document.querySelector("#company") ;
const infoFollowers = document.querySelector("#perfil .visits span");
const repository = document.querySelector("#repository .container");
const repositoryTiltle = document.querySelector("#repository .divider span");
const slider = document.querySelector("#carousel .carousel-inner");
const sliderIndex = document.querySelector("#carousel .carousel-indicators");
const coworker = document.querySelector("#co-worker .container")

//  Função para mostra um erro na tela do usuario
function erro(status=500, msg='Algo deu errado por favor tente mais tarde') {
    //  Metadados
    title.innerText = `${status} | GitHub`;
    description.innerText = msg;

    //  Subistitue o esqueleto do site para um de erro
    document.body.innerHTML = `<div class="erro">${msg}</div>`
}

window.addEventListener("load", async ()=>{
    //  Para prevenir possiveis erros
    try {
        //  Pegar informações
        const user = await github.getUser();
        
        // Verificar se o usuario exister
        if(!user.status){
        
            //  Metadados
            title.innerText = `${user.login} | GitHub`;
            description.innerText = user.bio;
        
            //  Header
            logo.innerText = user.login;
        
            //  Area do Perfil
            infoName.innerText = user.name;
            infoImage.src = user.avatar_url;
            infoImage.alt = `Avatar do ${user.name}`;
            infoBio.innerText = user.bio;
        
            if(user.location) infoLocation.innerText = user.location;
            else  infoLocation.parentNode.style.display = "none";
        
            if(user.blog) infoSite.innerText = user.blog;
            else  infoSite.parentNode.style.display = "none";
        
            if(user.company) infoCompany.innerText = user.company;
            else  infoCompany.parentNode.style.display = "none";
        
            infoFollowers.innerText = user.followers;
        
            //  Area dos Repositorios
            const repos = await github.getRepositories();
        
            repos.forEach(repo => {
                repository.innerHTML+=`
                    <a href="repo.html/?repos=${repo.name}" class="card" style="width: 16rem;">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                        </div>
                        <div class="statistics">
                            <div>
                                <i class="icons">
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.0004 33.1104L15.0463 37.9021C14.6949 38.1257 14.3275 38.2216 13.9442 38.1896C13.5609 38.1577 13.2254 38.0299 12.9379 37.8063C12.6504 37.5827 12.4268 37.3032 12.2671 36.9677C12.1074 36.6323 12.0754 36.257 12.1713 35.8417L14.2796 26.7854L7.23585 20.7C6.91641 20.4125 6.71676 20.0851 6.63689 19.7177C6.55703 19.3504 6.58099 18.991 6.70877 18.6396C6.83655 18.2882 7.02821 18.0007 7.28377 17.7771C7.53932 17.5535 7.89071 17.4098 8.33794 17.3459L17.6338 16.5313L21.2275 8.00211C21.3872 7.61878 21.6348 7.33128 21.9702 7.13961C22.3056 6.94795 22.649 6.85211 23.0004 6.85211C23.3518 6.85211 23.6952 6.94795 24.0306 7.13961C24.3661 7.33128 24.6136 7.61878 24.7734 8.00211L28.3671 16.5313L37.6629 17.3459C38.1102 17.4098 38.4615 17.5535 38.7171 17.7771C38.9727 18.0007 39.1643 18.2882 39.2921 18.6396C39.4199 18.991 39.4438 19.3504 39.364 19.7177C39.2841 20.0851 39.0845 20.4125 38.765 20.7L31.7213 26.7854L33.8296 35.8417C33.9254 36.257 33.8935 36.6323 33.7338 36.9677C33.574 37.3032 33.3504 37.5827 33.0629 37.8063C32.7754 38.0299 32.44 38.1577 32.0567 38.1896C31.6734 38.2216 31.306 38.1257 30.9546 37.9021L23.0004 33.1104Z"/>
                                    </svg>                       
                                </i>
                                <span>${repo.stargazers_count}</span>
                            </div>
                            <div>
                                <i class="icons">
                                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.417 15.3333C13.417 10.0406 17.7076 5.75 23.0003 5.75C28.2931 5.75 32.5837 10.0406 32.5837 15.3333C32.5837 20.6261 28.2931 24.9167 23.0003 24.9167C17.7076 24.9167 13.417 20.6261 13.417 15.3333ZM23.0003 21.0833C26.176 21.0833 28.7503 18.509 28.7503 15.3333C28.7503 12.1577 26.176 9.58333 23.0003 9.58333C19.8247 9.58333 17.2503 12.1577 17.2503 15.3333C17.2503 18.509 19.8247 21.0833 23.0003 21.0833Z"/>                                    <path d="M12.158 31.3244C9.28246 34.1999 7.66699 38.1 7.66699 42.1667H11.5003C11.5003 39.1167 12.7119 36.1916 14.8686 34.0349C17.0253 31.8783 19.9503 30.6667 23.0003 30.6667C26.0503 30.6667 28.9754 31.8783 31.1321 34.0349C33.2887 36.1916 34.5003 39.1167 34.5003 42.1667H38.3337C38.3337 38.1 36.7182 34.1999 33.8426 31.3244C30.9671 28.4488 27.067 26.8333 23.0003 26.8333C18.9337 26.8333 15.0336 28.4488 12.158 31.3244Z"/>
                                    </svg>                                
                                </i>
                                <span>${repo.watchers_count}</span>
                            </div>
                        </div>
                    </a>
                `;
            });
        
            repositoryTiltle.innerText = repos.length;
        
            //  Area do Slider
            const contents = await json.getContents();
        
            contents.forEach(content => {
                slider.innerHTML+=`
                <div class="carousel-item">
                    <img src="${content.image}" class="d-block w-100" alt="${content.alt}">
                    <a target='_blank' href="${content.link}" class="text">
                        <h2>${content.name}</h2>
                        <p>${content.description}</p>
                    </a>
                </div>
                `;
                sliderIndex.innerHTML +=`<button type="button" data-bs-target="#carousel" data-bs-slide-to="${content.id}" aria-label="Slide ${content.id}"></button>`;
            });
        
            slider.querySelectorAll("div")[0].classList.add("active");
            sliderIndex.querySelectorAll("button")[0].classList.add("active");
        
            //  Area de Colegas
            const coworkers = await json.getCoworkers();
        
            coworkers.forEach(co => {
                coworker.innerHTML+=`
                <a href="${co.link}" class="fellow">
                    <div class="perfil-img"><img src="${co.image}" alt="${co.name}"></div>
                    <h2>${co.name}</h2>
                </a>
                `;
            });
        
        }
        else{
            erro(404,"Não Foi possivel achar os dados do usuario");
        }
    } catch (error) {
        console.log(error)
        erro();
    }
    
    //  Mostra o site (So para dar um charme)
    document.body.style.opacity = 1
})