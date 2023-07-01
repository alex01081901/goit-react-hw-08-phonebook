import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export const ShowSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          rowGap: '30px',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '50px',
        }}
      >
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
        <Skeleton animation="wave" height={20} width="40%" />
        <Skeleton animation="wave" variant="rounded" width="100%" height={60} />
        <Skeleton animation="wave" variant="rounded" width="100%" height={60} />
        <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
      </Box>
    </>
  );
};

export const ShowMainSkeleton = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '20px',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '30%',
          }}
        >
          <Skeleton
            animation="wave"
            height={20}
            width="30%"
            sx={{
              marginRight: '20px',
            }}
          />
          <Skeleton animation="wave" height={20} width="40%" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            width: '30%',
          }}
        >
          <Skeleton
            animation="wave"
            variant="rounded"
            width="30%"
            height={30}
            sx={{
              marginLeft: '20px',
            }}
          />

          <Skeleton
            animation="wave"
            height={20}
            width="30%"
            sx={{
              marginLeft: '20px',
            }}
          />
          <Skeleton animation="wave" height={20} width="40%" />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          rowGap: '30px',
          alignItems: 'center',
          width: '100%',
          maxWidth: '400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '30px',
        }}
      >
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
        <Skeleton animation="wave" height={20} width="40%" />
        <Skeleton animation="wave" variant="rounded" width="100%" height={60} />
        <Skeleton animation="wave" variant="rounded" width="100%" height={60} />
        <Skeleton animation="wave" variant="rounded" width="100%" height={30} />
      </Box>
    </>
  );
};