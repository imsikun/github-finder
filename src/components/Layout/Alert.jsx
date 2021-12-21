import { useContext } from 'react';
import AlertContext from '../../context/Alert/AlertContext';

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className='flex items-star mb-4 space-x-2'>
        {alert.type === 'error' && (
          <p className='flex-1 text-base font-semibold leading-7 text-white'>
            <strong>{alert.msg}</strong>
          </p>
        )}
      </p>
    )
  );
}

export default Alert;
