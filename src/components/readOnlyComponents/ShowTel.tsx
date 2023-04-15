import { Box, Typography } from '@mui/material'
import ReadOnlyProp from '../../types/readOnlyProp'

const ShowTel = ({ userData }: ReadOnlyProp) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography fontWeight={'bold'} fontSize={'1.25rem'}>
        Numer telefonu:
      </Typography>
      <Typography fontStyle={'italic'}>
        {userData.tel.replace(/\s+/g, '')}
      </Typography>
    </Box>
  )
}

export default ShowTel
