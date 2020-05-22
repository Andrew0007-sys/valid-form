import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')    
    .required('Required'),

  password: Yup.string()
    .min(8, 'Must be longer than 8 characters')
    .required('Required')
});
export default FormSchema;