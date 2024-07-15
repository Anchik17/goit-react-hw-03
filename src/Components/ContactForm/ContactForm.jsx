import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Name must be more than 3 characters!')
      .max(50, 'Name must be less than 50 characters!'),

    number: Yup.string()
      .required('This field is required!')
      .min(3, 'Number must be more than 3 characters!')
      .max(50, 'Number must be less than 50 characters!'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    addContact(values.name, values.number);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} name='name' required />
            <ErrorMessage name='name' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number:</span>
            <Field className={s.input} name='number' required />
            <ErrorMessage name='number' component='span' className={s.error} />
          </label>
          <button className={s.btn} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
