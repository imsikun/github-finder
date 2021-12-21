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
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${github_url}/search/users?${params}`, {
      Authorization: {
        headers: `token ${github_token}`,
      },
    });
    const { items } = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  const clearUser = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, searchUser, clearUser }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
