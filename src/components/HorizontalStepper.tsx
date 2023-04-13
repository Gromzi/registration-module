import { Stepper, Step, StepLabel } from '@mui/material'
import HorizontalStepperProp from '../types/horizontalStepperProp'

const HorizontalStepper = ({ activeStep }: HorizontalStepperProp) => {
  return (
    <Stepper alternativeLabel activeStep={activeStep} sx={{ pb: 2 }}>
      <Step>
        <StepLabel>Rejestracja</StepLabel>
      </Step>
      <Step>
        <StepLabel>Podsumowanie</StepLabel>
      </Step>
    </Stepper>
  )
}

export default HorizontalStepper
