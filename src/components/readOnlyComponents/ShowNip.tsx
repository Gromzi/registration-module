import { Box, Typography } from '@mui/material'
import ReadOnlyProp from '../../types/readOnlyProp'

const ShowNip = ({ userData }: ReadOnlyProp) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography fontWeight={'bold'} fontSize={'1.25rem'}>
        NIP:
      </Typography>
      <Typography fontStyle={'italic'}>{userData.nip}</Typography>
    </Box>
  )
}

export default ShowNip
