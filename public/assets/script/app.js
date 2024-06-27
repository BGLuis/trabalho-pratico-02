//  importes
import GithubServices from "./services/GithubServices.js";
import JsonServices from "./services/JsonServices.js";

//  Carregando serviços
const github = new GithubServices();
const json = new JsonServices();

// Icones
const icons = []
icons['twitter'] = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.3233 12.8187C40.0415 11.7915 41.327 10.1741 41.94 8.2685C40.3255 9.22645 38.5591 9.90126 36.7171 10.2637C34.1633 7.56226 30.1171 6.90484 26.8394 8.65884C23.5617 10.4128 21.8639 14.144 22.6948 17.7675C16.0815 17.4355 9.92014 14.3116 5.74379 9.17317C3.56423 12.9326 4.67803 17.7383 8.28912 20.1557C6.98332 20.1137 5.70647 19.7601 4.56504 19.1245C4.56504 19.159 4.56504 19.1935 4.56504 19.228C4.5658 23.144 7.32576 26.5172 11.1641 27.2933C9.95291 27.6229 8.68244 27.6714 7.44963 27.4352C8.52909 30.7841 11.6156 33.0784 15.1335 33.1468C12.2199 35.4337 8.62162 36.6738 4.91771 36.6678C4.26119 36.6687 3.60519 36.6309 2.95312 36.5547C6.71437 38.9716 11.092 40.2545 15.5629 40.25C21.7829 40.2927 27.7606 37.8406 32.1588 33.442C36.5569 29.0435 39.0086 23.0656 38.9654 16.8456C38.9654 16.4891 38.9571 16.1345 38.9405 15.7818C40.5513 14.6177 41.9416 13.1755 43.046 11.523C41.5452 12.1882 39.9534 12.6249 38.3233 12.8187Z" fill="#fff"/></svg>`;
icons['linkedin'] = `<svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill="#fff"/></svg>`;
icons['facebook'] = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83691 23.0038C3.83914 32.4327 10.6955 40.4609 20.0078 41.9386V28.543H15.1452V23.0038H20.0136V18.7872C19.7959 16.7891 20.4784 14.7978 21.8759 13.3533C23.2734 11.9088 25.241 11.1608 27.2452 11.3122C28.6837 11.3354 30.1186 11.4635 31.5385 11.6955V16.4086H29.1158C28.2818 16.2994 27.4433 16.5748 26.8365 17.1574C26.2297 17.7399 25.9203 18.5665 25.9955 19.4043V23.0038H31.3066L30.4575 28.5449H25.9955V41.9386C36.0666 40.347 43.1288 31.1493 42.0658 21.0087C41.0029 10.8682 32.1869 3.33488 22.0047 3.86627C11.8224 4.39767 3.83853 12.8078 3.83691 23.0038Z" fill="#fff"/></svg>`;
icons['instagram'] = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0039 40.3286C18.2889 40.3286 17.7331 40.3037 15.8931 40.2232C14.4582 40.176 13.0419 39.8843 11.7052 39.3607C9.39234 38.4606 7.56351 36.6311 6.66432 34.3179C6.16083 32.9763 5.88926 31.5589 5.86124 30.1262C5.75391 28.29 5.75391 27.6882 5.75391 23.0096C5.75391 18.2812 5.77882 17.7292 5.86124 15.8987C5.88987 14.468 6.16143 13.0525 6.66432 11.7127C7.56253 9.39651 9.39433 7.56541 11.7109 6.66808C13.05 6.16247 14.4658 5.89019 15.8969 5.86308C17.7273 5.75958 18.3292 5.75958 23.0039 5.75958C27.7572 5.75958 28.3035 5.7845 30.1147 5.86308C31.5495 5.89043 32.9691 6.16268 34.3122 6.66808C36.6282 7.56643 38.4596 9.39718 39.3588 11.7127C39.8708 13.072 40.1438 14.5096 40.1657 15.962C40.2731 17.7982 40.2731 18.3981 40.2731 23.0748C40.2731 27.7514 40.2462 28.3648 40.1657 30.1798C40.1372 31.6139 39.865 33.0326 39.3607 34.3754C38.4593 36.6902 36.6277 38.5204 34.3122 39.4201C32.971 39.9226 31.5544 40.1942 30.1224 40.2232C28.292 40.3286 27.6921 40.3286 23.0039 40.3286ZM22.9387 8.79367C18.2506 8.79367 17.7637 8.81667 15.9333 8.89908C14.8408 8.91356 13.7588 9.11517 12.7344 9.49517C11.2217 10.074 10.0247 11.2662 9.43966 12.7765C9.05673 13.8121 8.85509 14.9059 8.84357 16.0099C8.74199 17.8672 8.74199 18.354 8.74199 23.0096C8.74199 27.6096 8.75924 28.1673 8.84357 30.0131C8.86073 31.106 9.06226 32.1881 9.43966 33.2139C10.0255 34.7233 11.2223 35.9145 12.7344 36.4933C13.7581 36.8759 14.8405 37.0775 15.9333 37.0894C17.7887 37.1968 18.2774 37.1968 22.9387 37.1968C27.6403 37.1968 28.1272 37.1738 29.9422 37.0894C31.0355 37.0761 32.1183 36.8745 33.1431 36.4933C34.6466 35.9095 35.8358 34.721 36.4206 33.2178C36.8028 32.1813 37.0044 31.087 37.0167 29.9824H37.0377C37.1202 28.1501 37.1202 27.6613 37.1202 22.9789C37.1202 18.2965 37.0991 17.8039 37.0167 15.9735C36.9995 14.8819 36.7979 13.801 36.4206 12.7765C35.8372 11.2711 34.6478 10.0803 33.1431 9.49517C32.1185 9.11325 31.0356 8.91158 29.9422 8.89908C28.0888 8.79367 27.6039 8.79367 22.9387 8.79367ZM23.0039 31.8627C19.4197 31.865 16.1871 29.7078 14.8137 26.3972C13.4403 23.0866 14.1966 19.2746 16.7299 16.7391C19.2633 14.2036 23.0746 13.444 26.3864 14.8146C29.6982 16.1851 31.8581 19.4158 31.8589 23C31.8536 27.8895 27.8934 31.8532 23.0039 31.8627ZM23.0039 17.2462C19.8283 17.2462 17.2539 19.8205 17.2539 22.9962C17.2539 26.1718 19.8283 28.7462 23.0039 28.7462C26.1795 28.7462 28.7539 26.1718 28.7539 22.9962C28.7465 19.8236 26.1765 17.2535 23.0039 17.2462ZM32.2039 15.8796C31.0643 15.8754 30.1433 14.9492 30.1454 13.8096C30.1475 12.67 31.072 11.7473 32.2116 11.7473C33.3512 11.7473 34.2756 12.67 34.2777 13.8096C34.2782 14.3594 34.0598 14.8868 33.6707 15.2752C33.2815 15.6636 32.7537 15.8811 32.2039 15.8796Z" fill="#fff"/></svg>`;

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
const infoSocial = document.querySelector("#perfil .media");
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
            description.content = user.bio;
        
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

            // Mostra as rede sociais
            const social = await github.getUserSocial();
            infoSocial.innerHTML = ""
            social.forEach(icon => {
                infoSocial.innerHTML += `
                    <a href="${icon.url}" class="icons">
                        ${icons[icon.provider]}
                    </a>
                `
            });
        
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