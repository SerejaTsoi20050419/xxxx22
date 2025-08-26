import axios from 'axios';

const API_ROOT = 'https://realworld.habsida.net/api';

export const fetchArticles = async (page = 1, limit = 10) => {
  try {
    const offset = (page - 1) * limit;
    const response = await axios.get(`${API_ROOT}/articles?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchArticleBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_ROOT}/articles/${slug}`);
    return response.data.article;
  } catch (error) {
    throw error;
  }
};