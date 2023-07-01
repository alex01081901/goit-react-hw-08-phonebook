import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { ContactList } from 'components';
import { Avatar } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '400px',
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <ContactPhoneIcon />
      </Avatar>
      <Typography component="h2" variant="h5">
        Contacts
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <TextField
            name="search"
            fullWidth
            type="text"
            id="search"
            label="Find contacts by name"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <ContactList />
    </Box>
  );
};