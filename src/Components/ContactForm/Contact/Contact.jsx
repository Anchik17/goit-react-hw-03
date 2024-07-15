import { FaUser } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import s from './Contact.module.css';

const Contact = ({ name, number, deleteContact, id }) => {
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
      <button className={s.btn} type='button' onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
