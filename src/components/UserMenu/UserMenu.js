import * as React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}</p>
      <Button
        size="small"
        variant="outlined"
        endIcon={<LogoutIcon />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};