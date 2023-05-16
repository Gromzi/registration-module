import { TextField, Typography } from '@mui/material'
import InputProps from '../../types/inputProps'
import DisplayError from './DisplayError'

const ConfirmPasswordInput = ({ register, errors }: InputProps) => {
  return (
    <>
      <TextField
        type="password"
        label="Powtórz hasło"
        variant="standard"
        sx={{ m: 1 }}
        color={errors.confirmPassword?.message ? 'error' : 'info'}
        {...register('confirmPassword')}
        defaultValue=""
      />
      <DisplayError error={errors.confirmPassword?.message} />
    </>
  )
}

export default ConfirmPasswordInput
