import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const formikForm = () => {
    const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });


  return (

  <Formik
    initialValue ={{username: "", email: "", password: ""}}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        resetForm();
    }}
    >
        {(isSubmitting) => {
            <Form>
            <div>
                <Field
                type="text"
                name="username"
                />
                <ErrorMessage
                name="username"
                component="div"
                 />
                 <Field
                type="email"
                name="email"
                />
                <ErrorMessage
                name="email"
                component="div"
                 />
                 <Field
                type="password"
                name="password"
                />
                <ErrorMessage
                name="password"
                component="div"
                 />
                 <button
                 type="submit"
                 disabled={isSubmitting}
                 >
                    {(isSubmitting) ? "submitting...." : "submit"}
                 </button>
            </div>
            </Form>
        }}
    </Formik>
  );
};