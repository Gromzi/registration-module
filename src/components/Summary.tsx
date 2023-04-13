import { Box, Button, Card, Divider, Typography } from '@mui/material'
import { useState } from 'react'
import SummaryProps from '../types/summaryProps'

const Summary = ({
  userData,
  handleSetShowSummary,
}: SummaryProps) => {
  const [error, setError] = useState(false)

  const isPhoneNumberEmpty = (): boolean => {
    if (userData.tel === '') return true
    else return false
  }

  const handleDataSubmit = () => {
    // SEND userData to backend
    console.log('Data sent to backend: ', userData)
    // Call to backend generates error:
    setError(true)
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography fontWeight={'bold'} fontSize={'1.25rem'}>
          Email:
        </Typography>
        <Typography fontStyle={'italic'}>{userData.email}</Typography>
      </Box>

      <Divider variant="middle" sx={{ m: 3 }} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography fontWeight={'bold'} fontSize={'1.25rem'}>
          NIP:
        </Typography>
        <Typography fontStyle={'italic'}>{userData.nip}</Typography>
      </Box>

      <Divider variant="middle" sx={{ m: 3 }} />

      {isPhoneNumberEmpty() ? null : (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography fontWeight={'bold'} fontSize={'1.25rem'}>
              Numer telefonu:
            </Typography>
            <Typography fontStyle={'italic'}>
              {userData.tel}
            </Typography>
          </Box>

          <Divider variant="middle" sx={{ m: 3 }} />
        </>
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography fontWeight={'bold'} fontSize={'1.25rem'}>
          Rola w firmie:
        </Typography>
        <Typography fontStyle={'italic'}>{userData.role}</Typography>
      </Box>

      <Divider variant="middle" sx={{ m: 4.5 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          sx={{ width: '120px' }}
          variant="contained"
          onClick={() => {
            handleSetShowSummary(false)
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
