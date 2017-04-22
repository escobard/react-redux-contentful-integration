import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'fmi8d7hen0pk';
const API_TOKEN = '8816da8aa2343623f6ff857aad6befbcd083940cc0e0675b79cc1f4dce1111a8';
export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}