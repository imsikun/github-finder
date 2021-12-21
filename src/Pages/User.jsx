import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubUserContext';

import Spinner from '../components/Layout/Spinner';

function User() {
  const { user, loading, getUser } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='w-full mx-auto lg:w-10/12'>
      <div className='mb-4'>
        <Link to={'/'} className='btn btn-primary rounded '>
          Go Back
        </Link>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 mb-8 md:gap-8'>
        <div className='custom-card-image mb-6 md:mb-0'>
          <div className='rounded-lg shadow-xl card image-full'>
            {avatar_url ? (
              <figure>
                <img src={avatar_url} alt='profile' />
              </figure>
            ) : (
              <p>No Image found</p>
            )}
            {name ? (
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{name}</h2>
                {login ? <p>{login}</p> : <p>No login found</p>}
              </div>
            ) : (
              <p>No name found</p>
            )}
          </div>
        </div>
        <div className='col-span-2'>
          <div className='mb-6'>
            {name ? (
              <h1 className='text-3xl card-title'>{name}</h1>
            ) : (
              <p>No name found</p>
            )}
            {type ? (
              <div className='ml-2 mr-1 badge badge-success'>{type}</div>
            ) : (
              <p>No type found</p>
            )}
            {hireable && <div className='mx-1 badge badge-info'>Hireable</div>}
            {bio ? <p>{bio}</p> : <p>No bio found</p>}
            <div className='mt-4 card-actions'>
              <a href={html_url} rel='noreferrer' className='btn btn-outline'>
                Visit Github Profile
              </a>
            </div>
          </div>
          <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
            {location ? (
              <div className='stat'>
                <div className='stat-title text-md'>Location</div>
                <div className='text-lg stat-value'>{location}</div>
              </div>
            ) : (
              <p>No location found</p>
            )}
            {blog ? (
              <div className='stat'>
                <div className='stat-title text-md'>Website</div>
                <div className='text-lg stat-value'>
                  <a href={blog} rel='noreferrer' target='_blank'>
                    {blog}
                  </a>
                </div>
              </div>
            ) : (
              <p>No location found</p>
            )}
            {twitter_username ? (
              <div className='stat'>
                <div className='stat-title text-md'>Twitter</div>
                <div className='text-lg stat-value'>
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    rel='noreferrer'
                    target='_blank'
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            ) : (
              <p>No location found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
