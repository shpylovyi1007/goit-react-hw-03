import PropTypes from 'prop-types';
import css from './SearchBox.module.css'

const SearchBox = ({value, onFilter}) => {
    return <div className={css.container}>
    <p>Find contacts by name</p>
    <input className={css.input} type="text" value={value} onChange={e => onFilter(e.target.value)}/>
    </div>
}

export default SearchBox;

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
  };