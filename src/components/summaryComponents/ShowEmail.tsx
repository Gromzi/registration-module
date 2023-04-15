import { Box, Typography } from '@mui/material'
import ReadOnlyProp from '../../types/readOnlyProp'

const ShowEmail = ({ userData }: ReadOnlyProp) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography fontWeight={'bold'} fontSize={'1.25rem'}>
        Email:
      </Typography>
      <Typography fontStyle={'italic'}>{userData.email}</Typography>
    </Box>
  )
}

export default ShowEmail
