import { TextField, Typography } from '@mui/material'
import InputProps from '../../types/inputProps'
import DisplayError from './DisplayError'

const EmailInput = ({ register, errors }: InputProps) => {
  return (
    <>
      <TextField
        type="text"
        label="Email"
        variant="standard"
        sx={{ m: 1 }}
        color={errors.email?.message ? 'error' : 'info'}
        {...register('email')}
        defaultValue=""
      />
      <DisplayError error={errors.email?.message} />
    </>
  )
}

export default EmailInput
