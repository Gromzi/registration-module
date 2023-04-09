import {
  Card,
  CardContent,
  Divider,
  Typography,
  Button,
} from '@mui/material'

import { useEffect } from 'react'
import { useRegistrationForm } from '../formLogic/useRegistrationForm'

import EmailInput from './inputComponents/EmailInput'
import FormValues from '../types/formValues'
import PasswordInput from './inputComponents/PasswordInput'
import ConfirmPasswordInput from './inputComponents/ConfirmPasswordInput'
import NipInput from './inputComponents/NipInput'
import PhoneNumberInput from './inputComponents/PhoneNumberInput'
import RoleInput from './inputComponents/RoleInput'

const RegisterCard = () => {
  const { register, handleSubmit, errors, setValue } =
    useRegistrationForm()

  const onSubmit = (data: FormValues) => {
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
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <ConfirmPasswordInput register={register} errors={errors} />

          <Divider variant="middle" sx={{ ml: 3, mt: 3, mr: 3 }} />

          <NipInput register={register} errors={errors} />
          <PhoneNumberInput register={register} errors={errors} />
          <RoleInput register={register} errors={errors} />

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
