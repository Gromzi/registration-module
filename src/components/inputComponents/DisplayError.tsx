import { Typography } from '@mui/material'

interface Props {
  error: string | undefined
}

const DisplayError = ({ error }: Props) => {
  return (
    <>
      {error && (
        <Typography variant="caption" color="error" sx={{ ml: 1 }}>
          {error.toString()}
        </Typography>
      )}
    </>
  )
}

export default DisplayError
