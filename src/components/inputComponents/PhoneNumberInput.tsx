import { TextField, Typography } from '@mui/material'
import InputProps from '../../types/inputProps'

const phoneNumberInput = ({ register, errors }: InputProps) => {
  return (
    <>
      <TextField
        type="tel"
        label="Numer telefonu (pole opcjonalne)"
        variant="standard"
        sx={{ m: 1 }}
        color={errors.tel?.message ? 'error' : 'info'}
        {...register('tel')}
        defaultValue=""
      />
      {errors.tel?.message && (
        <Typography variant="caption" color="error" sx={{ ml: 1 }}>
          {errors.tel?.message.toString()}
        </Typography>
      )}
    </>
  )
}

export default phoneNumberInput
