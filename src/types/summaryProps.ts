import FormValues from './formValues'

interface SummaryProps {
  userData: FormValues
  handleSetActiveStep: (newState: number) => void
}

export default SummaryProps
