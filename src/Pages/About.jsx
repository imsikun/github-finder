import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='container mx-auto'>
      <div className='about_body'>
        <div className='mb-8'>
          <h1 className='mb-4 text-4xl capitalize'>what is this proect?</h1>
          <p className='capitalize subpixel-antialiased'>
            this is simply a github finder for the student or in genral for the
            people.
          </p>
        </div>
        <div className='y_this mb-8'>
          <h1 className='mb-4 text-4xl capitalize'>y this project made?</h1>
          <p className='capitalize'>
            i came across the problem to find the user or the project directly
            from the github. unless and until the user have a github account
            they can't able to reach out their destination.
          </p>
        </div>
        <div className='w_benefit mb-8'>
          <h1 className='mb-4 text-4xl capitalize'>
            who are going to be benifited?
          </h1>
          <p className='capitalize'>
            lot of people can get the benefit from this including the students
            who just started and getting to know about the project. a recrutier
            who wants to have a look at the persons github and unless and until
            the person doesn't have a github account they couldn't able to see
            the result.
          </p>
        </div>
        <div className='w_r_u mb-8'>
          <h1 className='mb-4 text-4xl capitalize'>who made this website?</h1>
          <p className='capitalize'>
            to get to more about the person please{' '}
            <Link to='/author' className='link'>
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
