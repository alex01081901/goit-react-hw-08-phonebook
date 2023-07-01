import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { stringAvatar } from 'utils/coloredAvatar';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <ListItemAvatar>
        <Avatar {...stringAvatar(contact.name)} />
      </ListItemAvatar>
      <ListItemText
        primary={contact.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {contact.number}
            </Typography>
          </React.Fragment>
        }
      />

      <LoadingButton
        type="button"
        size="small"
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
        disabled={contacts.isDeleting}
        loading={contacts.isDeleting}
        loadingPosition="start"
      >
        Delete
      </LoadingButton>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};