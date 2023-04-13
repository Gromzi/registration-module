import {
  Card,
  CardContent,
  Divider,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material'
import { useState } from 'react'
import FormValues from '../types/formValues'
import RegisterForm from './RegisterForm'
import Summary from './Summary'
import HorizontalStepper from './HorizontalStepper'

const RegisterCard = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const [userData, setUserData] = useState<FormValues>({
    email: '',
    password: '',
    confirmPassword: '',
    nip: '',
    tel: '',
    role: '',
  })

  const handleSetActiveStep = (newState: number) => {
    setActiveStep(newState)
  }
  const handleSetUserData = (newState: FormValues) => {
    setUserData(newState)
  }

  return (
    <Card
      className="formCard"
      elevation={16}
      sx={{ backgroundColor: 'primary.main', borderRadius: 3 }}
    >
      <Typography
        variant="h1"
        sx={{ textAlign: 'center', fontWeight: 'bold', p: 2 }}
      >
        {activeStep === 1 ? 'Podsumowanie' : 'Zarejestruj się'}
      </Typography>

      <Divider variant="middle" />

      <CardContent>
        <HorizontalStepper activeStep={activeStep} />

        {activeStep === 1 ? (
          <Summary
            userData={userData}
            handleSetActiveStep={handleSetActiveStep}
          />
        ) : (
          <RegisterForm
            userData={userData}
            handleSetUserData={handleSetUserData}
            handleSetActiveStep={handleSetActiveStep}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default RegisterCard
