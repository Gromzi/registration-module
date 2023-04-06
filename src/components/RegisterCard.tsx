import {
  Box,
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
  const handleMouseDownPassword = () => setShowPassword(!showPassword)

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Hasło musi zawierać conajmniej 8 znaków, jedną dużą literę, jedną małą literę, jedną cyfrę i jeden znak specjalny'
      ),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('password')]),
  })

  const { register, handleSubmit } = useForm({
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
            type="email"
            label="Email"
            variant="standard"
            sx={{ m: 1 }}
            {...register('email')}
          />

          <TextField
            type={showPassword ? 'text' : 'password'}
            label="Hasło"
            variant="standard"
            sx={{ m: 1 }}
            {...register('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
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

          <TextField
            type="password"
            label="Powtórz hasło"
            variant="standard"
            sx={{ m: 1 }}
            {...register('confirmPassword')}
          />

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
