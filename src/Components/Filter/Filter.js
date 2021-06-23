import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find your contacts by name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
