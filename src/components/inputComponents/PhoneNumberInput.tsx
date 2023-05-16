import { InputAdornment, TextField, Typography } from '@mui/material'
import InputProps from '../../types/inputProps'
import DisplayError from './DisplayError'

const phoneNumberInput = ({ register, errors }: InputProps) => {
  return (
    <>
      <TextField
        type="tel"
        label="Numer telefonu (pole opcjonalne)"
        placeholder="123 456 789"
        variant="standard"
        sx={{ m: 1 }}
        color={errors.tel?.message ? 'error' : 'info'}
        {...register('tel')}
        defaultValue=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography>+48</Typography>
            </InputAdornment>
          ),
        }}
      />
      <DisplayError error={errors.tel?.message} />
    </>
  )
}

export default phoneNumberInput
