import { useState } from 'react';
function UserSearch() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter some value');
    } else {
      console.log('user');
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                value={text}
                onChange={handleChange}
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
              />
              <button
                type='Submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSearch;