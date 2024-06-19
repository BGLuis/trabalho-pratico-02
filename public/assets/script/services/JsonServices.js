export default class{
    constructor() {
        this.urlBase = "http://localhost:3000";
    }

    async getContents(){
        const resposta = await fetch(`${this.urlBase}/contents`);
        return resposta.json();
    }

    async getContent(id){
        const resposta = await fetch(`${this.urlBase}/contents/${id}`);
        return resposta.json();
    }

    async getCoworkers(){
        const resposta = await fetch(`${this.urlBase}/coworkers`);
        return resposta.json();
    }

    async getCoworker(id){
        const resposta = await fetch(`${this.urlBase}/coworkers/${id}`);
        return resposta.json();
    }
}