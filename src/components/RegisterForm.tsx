import EmailInput from './inputComponents/EmailInput'
import PasswordInput from './inputComponents/PasswordInput'
import ConfirmPasswordInput from './inputComponents/ConfirmPasswordInput'
import NipInput from './inputComponents/NipInput'
import PhoneNumberInput from './inputComponents/PhoneNumberInput'
import RoleInput from './inputComponents/RoleInput'

import { useEffect } from 'react'
import { useRegistrationForm } from '../formLogic/useRegistrationForm'
import FormValues from '../types/formValues'
import { Button, Divider } from '@mui/material'
import RegisterFormProps from '../types/registerFormProps'

const RegisterForm = ({
  userData,
  handleSetUserData,
  handleSetShowSummary,
}: RegisterFormProps) => {
  const { register, handleSubmit, errors, setValue } =
    useRegistrationForm()

  const onSubmit = (data: FormValues) => {
    console.log('userData:', data)
    handleSetUserData(data)
    handleSetShowSummary(true)
  }

  useEffect(() => {
    setValue('email', userData.email)
    setValue('password', userData.password)
    setValue('confirmPassword', userData.confirmPassword)
    setValue('nip', userData.nip)
    setValue('tel', userData.tel)
    setValue('role', userData.role)
  }, [setValue])

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <ConfirmPasswordInput register={register} errors={errors} />

      <Divider variant="middle" sx={{ ml: 3, mt: 3, mr: 3, mb: 1 }} />

      <NipInput register={register} errors={errors} />
      <PhoneNumberInput register={register} errors={errors} />
      <RoleInput
        register={register}
        errors={errors}
        roleValue={userData.role}
      />

      <Divider variant="middle" sx={{ m: 3 }} />

      <Button type="submit" variant="contained">
        Dalej
      </Button>
    </form>
  )
}

export default RegisterForm
