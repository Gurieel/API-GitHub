import axios from 'axios';

import { langColors } from './config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});
export default api;

export const getUser = async (login) => api.get(`/users/${login}`);
export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export const getLangsFrom = (repositories) => {
  // Pegar todo histórico de reposiorios e adicionar em um hashmap
  let stats = repositories
    .map((repository) => repository.language)
    // Para conseguir contar a quantidade de ocorrencias iguais no array
    // data: valor que manipula, language: valor que o map produziu
    .reduce(
      (data, language) => ({
        ...data,
        // Caso seja repetido, adiciona mais 1 ao novo objeto do array
        [language]: (data[language] || 0) + 1,
      }),
      [],
    );

  // Deletar todas as propriedades null do map
  delete stats.null;

  // Keys, criar um array com todas as keys
  // Adicionar as informações das linguagens
  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    // Colocar a linguagem que mais tem ocorrencias primeiro
    .sort((a, b) => b.count - a.count);

  return stats;
};
