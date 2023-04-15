import { Box, Typography } from '@mui/material'
import ReadOnlyProp from '../../types/readOnlyProp'

const ShowRole = ({ userData }: ReadOnlyProp) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography fontWeight={'bold'} fontSize={'1.25rem'}>
        Rola w firmie:
      </Typography>
      <Typography fontStyle={'italic'}>{userData.role}</Typography>
    </Box>
  )
}

export default ShowRole
