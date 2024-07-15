import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = ({ name, number }) => {
  return (
    <li>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <BsFillTelephoneFill /> {number}
        </p>
      </div>
      <button type='button'>Delete</button>
    </li>
  );
};

export default Contact;
