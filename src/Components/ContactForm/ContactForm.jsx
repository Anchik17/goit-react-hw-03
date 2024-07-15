import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
  return (
    <div>
      <Formik>
        <Form>
          <label>
            <span>Name:</span>
            <Field name='name'></Field>
          </label>
          <label>
            <span>Number:</span>
            <Field name='number'></Field>
          </label>
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
