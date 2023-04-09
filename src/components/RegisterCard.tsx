import {
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { useEffect, useState } from 'react'
import { useRegistrationForm } from '../formLogic/useRegistrationForm'

const RegisterCard = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const { register, handleSubmit, errors, setValue } =
    useRegistrationForm()

  const onSubmit = (data: Object) => {
    console.log('Ya boy could NEVER', data)
  }

  useEffect(() => {
    setValue('role', '')
  }, [setValue])

  return (
    <Card
      className="formCard"
      elevation={16}
      sx={{ backgroundColor: 'primary.main' }}
    >
      <Typography
        variant="h1"
        sx={{ textAlign: 'center', fontWeight: 'bold', p: 2 }}
      >
        Zarejestruj się
      </Typography>

      <Divider variant="middle" />

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <TextField
            type="text"
            label="Email"
            variant="standard"
            sx={{ m: 1 }}
            color={errors.email?.message ? 'error' : 'info'}
            {...register('email')}
          />
          {errors.email?.message && (
            <Typography
              variant="caption"
              color="error"
              sx={{ ml: 1 }}
            >
              {errors.email?.message.toString()}
            </Typography>
          )}

          <TextField
            type={showPassword ? 'text' : 'password'}
            label="Hasło"
            variant="standard"
            sx={{ m: 1 }}
            color={errors.password?.message ? 'error' : 'info'}
            {...register('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors.password?.message && (
            <Typography
              variant="caption"
              color="error"
              sx={{ ml: 1 }}
            >
              {errors.password?.message.toString()}
            </Typography>
          )}

          <TextField
            type="password"
            label="Powtórz hasło"
            variant="standard"
            sx={{ m: 1 }}
            color={errors.confirmPassword?.message ? 'error' : 'info'}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword?.message && (
            <Typography
              variant="caption"
              color="error"
              sx={{ ml: 1 }}
            >
              {errors.confirmPassword?.message.toString()}
            </Typography>
          )}

          <Divider variant="middle" sx={{ ml: 3, mt: 3, mr: 3 }} />

          <TextField
            type="text"
            label="NIP"
            variant="standard"
            sx={{ m: 1 }}
            color={errors.nip?.message ? 'error' : 'info'}
            {...register('nip')}
          />
          {errors.nip?.message && (
            <Typography
              variant="caption"
              color="error"
              sx={{ ml: 1 }}
            >
              {errors.nip?.message.toString()}
            </Typography>
          )}

          <TextField
            type="tel"
            label="Numer telefonu (pole opcjonalne)"
            variant="standard"
            sx={{ m: 1 }}
            color={errors.tel?.message ? 'error' : 'info'}
            {...register('tel')}
          />
          {errors.tel?.message && (
            <Typography
              variant="caption"
              color="error"
              sx={{ ml: 1 }}
            >
              {errors.tel?.message.toString()}
            </Typography>
          )}

          <FormControl sx={{ m: 1 }}>
            <InputLabel color="info">Rola w firmie</InputLabel>
            <Select
              label="Rola"
              variant="standard"
              {...register('role')}
              defaultValue=""
            >
              <MenuItem value={'Administrator'}>
                Administrator
              </MenuItem>
              <MenuItem value={'Dyrektor'}>Dyrektor</MenuItem>
              <MenuItem value={'Inspektor'}>Inspektor</MenuItem>
              <MenuItem value={'Kierownik'}>Kierownik</MenuItem>
              <MenuItem value={'Księgowy'}>Księgowy</MenuItem>
              <MenuItem value={'Pełnomocnik'}>Pełnomocnik</MenuItem>
            </Select>
            {errors.role?.message && (
              <Typography
                variant="caption"
                color="error"
                sx={{ ml: 1 }}
              >
                {errors.role?.message.toString()}
              </Typography>
            )}
          </FormControl>

          <Divider variant="middle" sx={{ m: 3 }} />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default RegisterCard
