import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import schema from './validationSchema'

export const useRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  })

  return { register, handleSubmit, errors, setValue }
}
