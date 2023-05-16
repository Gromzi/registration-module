import { TextField, Typography } from '@mui/material'
import InputProps from '../../types/inputProps'
import DisplayError from './DisplayError'

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
      <DisplayError error={errors.nip?.message} />
    </>
  )
}

export default NipInput
