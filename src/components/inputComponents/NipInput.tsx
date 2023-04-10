import { TextField, Typography } from '@mui/material'
import InputProps from '../../types/inputProps'

const NipInput = ({ register, errors }: InputProps) => {
  return (
    <>
      <TextField
        type="text"
        label="NIP"
        variant="standard"
        sx={{ m: 1 }}
        color={errors.nip?.message ? 'error' : 'info'}
        {...register('nip')}
        defaultValue=""
      />
      {errors.nip?.message && (
        <Typography variant="caption" color="error" sx={{ ml: 1 }}>
          {errors.nip?.message.toString()}
        </Typography>
      )}
    </>
  )
}

export default NipInput
