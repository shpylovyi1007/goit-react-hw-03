import Contact from '../Contact/Contact'
import PropTypes from 'prop-types';
import css from './ContactList.module.css'


const ContactList = ({ users, onDelete }) => {
  return (
    <ul className={css.list}>
      {users.map(user => (
        <Contact key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  ContactList.propTypes = {
    onDelete: PropTypes.func.isRequired,
  };