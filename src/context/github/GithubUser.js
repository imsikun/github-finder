import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubUserContext = createContext();

const github_url = process.env.REACT_APP_GITHUB_URL;
const github_token = process.env.REACT_APP_GITHUB_TOKEN;

export default GithubProvider = ({ children }) => {
  

  //for reducer we first have to intialize the value 
  const initialState = {
    users: [],
    loading:false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)
    
    //search for the use
  const searchUser = async (text) => {
    
    const params = new URLSearchParams({
      q:text
    })

    const res = await fetch(`${github_url}/users?${params}`)
    const data = await res.json()

    dispatch = ({
      type: 'GET_USER',
      payload:data
    })





    }


  <GithubUserContext.Provider>
    {children}
  </GithubUserContext.Provider>
}


export default GithubUserContext;
