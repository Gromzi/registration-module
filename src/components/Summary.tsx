import { Button, Typography } from '@mui/material'

const Summary = ({ userData, setShowSummary }: any) => {
  return (
    <>
      <Typography>{`email: ${userData.email}`}</Typography>
      <Typography>{`nip: ${userData.nip}`}</Typography>
      <Typography>{`tel: ${userData.tel}`}</Typography>
      <Typography>{`rola: ${userData.role}`}</Typography>
      <Button
        onClick={() => {
          setShowSummary(false)
        }}
      >
        Back
      </Button>
    </>
  )
}

export default Summary
