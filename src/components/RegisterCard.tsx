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
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nip: '',
    tel: '',
    role: '',
  })

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
            setShowSummary={setShowSummary}
          />
        ) : (
          <RegisterForm
            userData={userData}
            setUserData={setUserData}
            setShowSummary={setShowSummary}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default RegisterCard
