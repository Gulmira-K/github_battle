import axios from 'axios';

export const getPopularRepos = (lang) => {
    const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);
    return axios.get(encodeURI)
        .then(response => response.data.items)
        .catch(error => console.error(error));
}