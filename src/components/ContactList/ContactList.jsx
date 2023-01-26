import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
// import shortid from 'shortid';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={ css.contactList}>
        {contacts.map((contact, id) => (
            <li
                key={id}
                className={css.item}>
                {contact.name} : {contact.number}
                <button
                    type="button"
                    className={css.btnContactList}
                    onClick={() => onDeleteContact(contact.id)}
                >
                    Delete
                </button>
            </li>
        ))}
        </ul>
);

ContactList.propTypes = {
    contact: PropTypes.shape(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;