import React from 'react';
import { Formik, Field, Form } from 'formik';
import FormSchema from './FormSchema';

const App = () => (

  <div className='container'>
    <div className='form-registr'>  
        <h3>SIGN IN TO YOUR ACCOUNT</h3>
        <Formik

          initialValues={{
            email: '',
            username: ''
          }}

          validationSchema={FormSchema}  

            render={({ errors, touched }) => (
            <Form className='form-container'>

              <Field className='inp-val'
                name='email'
                placeholder='example@gmail.com'
                type='email'
              />

              {
                errors.email &&
                touched.email && <div className='field-error'>{errors.email}</div>}   


              <Field className='inp-val' name='password' placeholder='********' type='password' />

              {errors.password &&
                touched.password && (
                  <div className='field-error'>{errors.password}</div>
                )}

              <Field name='checkbox'  type='checkbox' required />
              <label htmlFor='checkbox'>Keep me signed in</label>


              <button type='submit'>SIGN IN</button>
              <a href='#' className='forgot'> Forgot your password? </a>
            </Form>
          )}
        />
    </div>
  </div>
);


export default App;
