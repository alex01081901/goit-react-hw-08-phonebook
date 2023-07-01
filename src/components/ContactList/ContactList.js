import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

import { ContactListItem } from 'components';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {contacts.isLoading && (
          <>
            <Box
              sx={{
                display: 'flex',
                padding: '20px',
                columnGap: '20px',
              }}
            >
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
              <Box width="80%">
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 10 }}
                />
                <Skeleton animation="wave" height={10} width="40%" />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                padding: '20px',
                columnGap: '20px',
              }}
            >
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
              <Box width="80%">
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 10 }}
                />
                <Skeleton animation="wave" height={10} width="40%" />
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                padding: '20px',
                columnGap: '20px',
              }}
            >
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
              <Box width="80%">
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 10 }}
                />
                <Skeleton animation="wave" height={10} width="40%" />
              </Box>
            </Box>
          </>
        )}
        {contacts.error && (
          <div>Something went wrong. Error message: {contacts.error}</div>
        )}
        {visibleContacts.map(contact => (
          <React.Fragment key={contact.id}>
            <ListItem alignItems="flex-start">
              <ContactListItem contact={contact} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};