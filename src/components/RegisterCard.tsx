import {
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

const RegisterCard = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Podaj poprawny email')
      .required('Email jest polem obowiązkowym'),
    password: yup
      .string()
      .required('Hasło jest polem obowiązkowym')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Hasło musi zawierać conajmniej 8 znaków, jedną dużą literę, jedną małą literę, jedną cyfrę i jeden znak specjalny'
      ),
    confirmPassword: yup
      .string()
      .required('Powtórz hasło jest polem obowiązkowym')
      .oneOf([yup.ref('password')], 'Hasła muszą być jednakowe'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: Object) => {
    console.log('Ya bould could NEVER', data)
  }

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
                  <IconButton onClick={handleClickShowPassword}>
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
