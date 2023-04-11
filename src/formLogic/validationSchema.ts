import * as yup from 'yup'
import isValidNIP from 'is-valid-nip'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Podaj poprawny email')
    .required('Email jest polem wymaganym'),
  password: yup
    .string()
    .required('Hasło jest polem wymaganym')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Hasło musi zawierać conajmniej 8 znaków, jedną dużą literę, jedną małą literę, jedną cyfrę i jeden znak specjalny'
    ),
  confirmPassword: yup
    .string()
    .required('Powtórz hasło jest polem wymaganym')
    .oneOf([yup.ref('password')], 'Hasła muszą być jednakowe'),
  nip: yup
    .string()
    .required('Numer NIP jest wymagany')
    .test('isValidNIP', 'Niepoprawny numer NIP', function (value) {
      return isValidNIP(value)
    }),
  tel: yup
    .string()
    .matches(
      /^(?:\d{3}[- .]?){2}\d{3}$|^$/,
      'Podaj poprawny numer telefonu'
    ),
  role: yup.string().required('Rola jest wymagana'),
})

export default schema
