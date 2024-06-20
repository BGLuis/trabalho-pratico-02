export default class {
    constructor() {
        this.urlBase = "https://api.github.com";
        this.user = "BGLuis"
        // this.user = "kamranahmedse"
    }

    async getUser() {
        const resposta = await fetch(`${this.urlBase}/users/${this.user}`);
        return resposta.json();
    }

    async getUserSocial() {
        const resposta = await fetch(`${this.urlBase}/users/${this.user}/social_accounts`);
        return resposta.json();
    }

    async getRepositories() {
        const resposta = await fetch(`${this.urlBase}/users/${this.user}/repos`);
        return resposta.json();
    }

    async getRepositorie(name) {
        const resposta = await fetch(`${this.urlBase}/repos/${this.user}/${name}`);
        return resposta.json();
    }

    async getRepositorieTags(name) {
        const resposta = await fetch(`${this.urlBase}/repos/${this.user}/${name}/tags`);
        return resposta.json();
    }

    async getRepositorieContributors(name) {
        const resposta = await fetch(`${this.urlBase}/repos/${this.user}/${name}/contributors`);
        return resposta.json();
    }

    async getRepositorieLanguages(name) {
        const resposta = await fetch(`${this.urlBase}/repos/${this.user}/${name}/languages`);
        return resposta.json();
    }
}