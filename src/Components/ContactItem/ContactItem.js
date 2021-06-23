import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts, onClickDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li key={id}>
      <button onClick={() => onClickDelete(id)} type="button">
        delete
      </button>
      {name}: {number}
    </li>
  ));

ContactItem.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
};

export default ContactItem;
