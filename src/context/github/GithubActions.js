import axios from 'axios';
const github_url = process.env.REACT_APP_GITHUB_URL;
const github_token = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: github_url,
  Authorization: { headers: `token ${github_token}` },
});

export const searchUser = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await github.get(`/search/users?${params}`);
  return res.data.items;
};

//get user and repos
export const getUserAndRepos = async (login) => {
  //for getting the latest repos
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);
  if (user.data === 400) {
    window.location = '/notfound';
  } else {
    return { user: user.data, repos: repos.data };
  }
};
