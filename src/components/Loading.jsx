import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const Variants =()=> {
  return (
    <Box className="d-flex flex-wrap justify-content-center gap-4 align-items-center mt-3 m-5 ">

    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="text" width={150} height={60} />
      <Skeleton variant="text" width={280} height={40} />
      <Skeleton variant="text" width={280} height={40} />
      <Skeleton variant="text" width={280} height={40} />
    </Stack>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="text" width={150} height={80} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
    </Stack>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="text" width={150} height={80} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
    </Stack>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="text" width={150} height={80} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
    </Stack>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="text" width={150} height={80} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
    </Stack>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="text" width={150} height={80} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
      <Skeleton variant="text" width={310} height={50} />
    </Stack>
   
    </Box>
  );
}
export default Variants;