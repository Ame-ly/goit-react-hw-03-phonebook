import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onClickDelete }) => (
  <ul>
    <ContactItem contacts={contacts} onClickDelete={onClickDelete} />
  </ul>
);

ContactList.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
};

export default ContactList;
