import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from './ContactForm.module.css'
import * as Yup from 'yup'
import PropTypes from 'prop-types';



const userSchema = Yup.object().shape({
        username: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
        usernumber: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
        .required('Required'),
})

const ContactForm = ({onAdd}) => {
  const userId = useId();
  const userNumber = useId();

  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({
            id: Date.now().toString(),
            name: values.username,
            number: values.usernumber,
        });
        actions.resetForm();
    }}
      validationSchema={userSchema}
    >
      <Form className={css.form} >
        <div className={css.container}>
          <label htmlFor={userId}>Name</label>
          <Field className={css.input} name="username" id={userId} />
          <ErrorMessage className={css.span} name="username" component="span"/>
        </div>

        <div className={css.container}>
          <label htmlFor={userNumber}>Number</label>
          <Field className={css.input} name="usernumber" id={userNumber} />
          <ErrorMessage className={css.span} name="usernumber" component="span"/>
        </div>

        <button className={css.button} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};