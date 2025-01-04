import { Container } from '@mui/material'
import SignInForm from '../components/auth/SignInForm'

function SignInPage() {
  return (
    <Container maxWidth="sm">
      <SignInForm />
    </Container>
  )
}

export default SignInPage