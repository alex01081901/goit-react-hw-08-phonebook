import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Typography from '@mui/material/Typography';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const duplicatedContact = contacts.items.find(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );

    if (duplicatedContact) {
      return alert(`${duplicatedContact.name} is already in contacts`);
    }

    const newContact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    dispatch(addContact(newContact));

    e.target.reset();
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <AddIcCallIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Phonebook
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              type="text"
              id="name"
              label="Name"
              autoFocus
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="tel"
              id="number"
              label="Phone number"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </Grid>
        </Grid>
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          disabled={contacts.isAdding}
          loading={contacts.isAdding}
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </LoadingButton>
      </Box>
    </Box>
  );
}