import FormValues from './formValues'

interface RegisterFormProps {
  userData: FormValues
  handleSetUserData: (newState: FormValues) => void
  handleSetShowSummary: (newState: boolean) => void
}

export default RegisterFormProps
