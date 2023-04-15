import { Box, Button, Divider, Typography } from '@mui/material'
import { useState } from 'react'
import SummaryProps from '../types/summaryProps'
import ShowEmail from './readOnlyComponents/ShowEmail'
import ShowNip from './readOnlyComponents/ShowNip'
import ShowTel from './readOnlyComponents/ShowTel'
import ShowRole from './readOnlyComponents/ShowRole'

const Summary = ({ userData, handleSetActiveStep }: SummaryProps) => {
  const [error, setError] = useState(false)

  const isPhoneNumberEmpty = (): boolean => {
    if (userData.tel === '') return true
    else return false
  }

  const handleDataSubmit = () => {
    // SEND userData to backend (exclude the 'confirmPassword' and remove whitespaces from 'tel')
    const dataToBackend = {
      email: userData.email,
      password: userData.password,
      nip: userData.nip,
      tel: userData.tel.replace(/\s+/g, ''),
      role: userData.role,
    }
    console.log('Data sent to backend: ', dataToBackend)
    // Call to backend generates error:
    setError(true)
  }

  return (
    <Box sx={{ pt: 2 }}>
      <ShowEmail userData={userData} />
      <Divider variant="middle" sx={{ m: 3 }} />

      <ShowNip userData={userData} />
      <Divider variant="middle" sx={{ m: 3 }} />

      {isPhoneNumberEmpty() ? null : (
        <>
          <ShowTel userData={userData} />
          <Divider variant="middle" sx={{ m: 3 }} />
        </>
      )}

      <ShowRole userData={userData} />
      <Divider variant="middle" sx={{ m: 4.5 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          sx={{ width: '120px' }}
          variant="contained"
          onClick={() => {
            handleSetActiveStep(0)
          }}
        >
          Wróć
        </Button>

        <Button
          sx={{ width: '120px' }}
          variant="contained"
          onClick={() => {
            handleDataSubmit()
          }}
        >
          Potwierdź
        </Button>
      </Box>

      {error ? (
        <Typography
          variant="body2"
          color="error"
          textAlign={'center'}
          sx={{ mt: 3 }}
        >
          Wystąpił problem z połączeniem z serwerem. Spróbuj ponownie
          później
        </Typography>
      ) : null}
    </Box>
  )
}

export default Summary
