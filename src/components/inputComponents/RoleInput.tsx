import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import RoleInputProps from '../../types/RoleInputProps'

const RoleInput = ({
  register,
  errors,
  roleValue,
}: RoleInputProps) => {
  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <InputLabel color="info">Rola w firmie</InputLabel>
        <Select
          label="Rola"
          variant="standard"
          {...register('role')}
          defaultValue={roleValue}
        >
          <MenuItem value={'Administrator'}>Administrator</MenuItem>
          <MenuItem value={'Dyrektor'}>Dyrektor</MenuItem>
          <MenuItem value={'Inspektor'}>Inspektor</MenuItem>
          <MenuItem value={'Kierownik'}>Kierownik</MenuItem>
          <MenuItem value={'Księgowy'}>Księgowy</MenuItem>
          <MenuItem value={'Pełnomocnik'}>Pełnomocnik</MenuItem>
        </Select>
        {errors.role?.message && (
          <Typography variant="caption" color="error" sx={{ ml: 1 }}>
            {errors.role?.message.toString()}
          </Typography>
        )}
      </FormControl>
    </>
  )
}

export default RoleInput
