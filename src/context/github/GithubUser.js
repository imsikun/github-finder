import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const github_url = process.env.REACT_APP_GITHUB_URL;
const github_token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //for reducer we first have to intialize the value
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //search for the use
  const searchUser = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${github_url}/users?${params}`, {
      Authorization: {
        headers: `token ${github_token}`,
      },
    });
    const data = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };
  return (
    <GithubContext.Provider value={{ users: state.users, searchUser }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
