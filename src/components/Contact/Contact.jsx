import PropTypes from 'prop-types';
import css from './Contact.module.css'
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";


const Contact = ({users, onDelete}) => {
    return <> {users.map(user => (
        <li className={css.item} key={user.id}>
            <div className={css.containerContacts}>
                <div className={css.container}>
                    <AiOutlineUser />
                    <p>
                    {user.name}</p> 
                </div>
                <div className={css.container}>
                    <AiOutlinePhone/>
                    <p>{user.number}</p> 
                </div>
            </div>
            <button className={css.button} onClick={() => onDelete(user.id)}>Delete</button>
        </li>
    ))}
    </>
}

export default Contact;

Contact.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  Contact.propTypes = {
    onDelete: PropTypes.func.isRequired,
  };