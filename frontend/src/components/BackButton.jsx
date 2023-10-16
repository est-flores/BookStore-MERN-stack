import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = '/'}) => {
  return (
    <Link 
    to={destination}
    className='bg-sky-800 text-white px-4 py-1 rounded-1g w-fit'>
      <FontAwesomeIcon icon='back'></FontAwesomeIcon>
    </Link>
  )
}

export default BackButton