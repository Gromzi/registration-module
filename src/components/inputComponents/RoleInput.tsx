import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import RoleInputProps from '../../types/roleInputProps'
import DisplayError from './DisplayError'

const RoleInput = ({
  register,
  errors,
  roleValue,
}: RoleInputProps) => {
  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <InputLabel color={errors.role?.message ? 'error' : 'info'}>
          Rola w firmie
        </InputLabel>
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
        <DisplayError error={errors.role?.message} />
      </FormControl>
    </>
  )
}

export default RoleInput
