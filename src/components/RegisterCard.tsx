import {
  Card,
  CardContent,
  Divider,
  Typography,
  Button,
} from '@mui/material'
import { useState } from 'react'
import FormValues from '../types/formValues'
import RegisterForm from './RegisterForm'
import Summary from './Summary'

const RegisterCard = () => {
  const [showSummary, setShowSummary] = useState(false)
  const [userData, setUserData] = useState<FormValues>({
    email: '',
    password: '',
    confirmPassword: '',
    nip: '',
    tel: '',
    role: '',
  })

  const handleSetShowSummary = (newState: boolean) => {
    setShowSummary(newState)
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
        {showSummary ? 'Podsumowanie' : 'Zarejestruj się'}
      </Typography>

      <Divider variant="middle" />

      <CardContent>
        {showSummary ? (
          <Summary
            userData={userData}
            handleSetShowSummary={handleSetShowSummary}
          />
        ) : (
          <RegisterForm
            userData={userData}
            handleSetUserData={handleSetUserData}
            handleSetShowSummary={handleSetShowSummary}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default RegisterCard
