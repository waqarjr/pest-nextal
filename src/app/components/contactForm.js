"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", message: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, "Too short!").required("First name is required"),
      lastName: Yup.string().min(2, "Too short!").required("Last name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full mx-auto p-6 bg-secondary rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-primary font-heading">Contact Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name <span className="text-error">*</span>
          </label>
          <input type="text" id="firstName" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} 
            className={`w-full px-4 py-3 border-b-2 outline-none transition duration-200 bg-secondary ${ formik.errors.firstName ? "border-error" : "border-gray-300 focus:border-primary"}`} />
          { formik.errors.firstName && <p className="text-error text-sm mt-1 font-medium">{formik.errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name <span className="text-error">*</span>
          </label>
          <input type="text" id="lastName" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} 
            className={`w-full px-4 py-3 border-b-2 outline-none transition duration-200 bg-secondary ${ formik.errors.lastName ? "border-error" : "border-gray-300 focus:border-primary"}`} />
          {formik.errors.lastName && <p className="text-error text-sm mt-1 font-medium">{formik.errors.lastName}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email address <span className="text-error">*</span>
        </label>
        <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}
          className={`w-full px-4 py-3 border-b-2 outline-none transition duration-200 bg-secondary ${formik.errors.email ? "border-error" : "border-gray-300 focus:border-primary"}`} />
        {formik.errors.email && <p className="text-error text-sm mt-1 font-medium">{formik.errors.email}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-error">*</span>
        </label>
        <textarea id="message" name="message" rows="4" value={formik.values.message} onChange={formik.handleChange} 
          className={`w-full px-4 py-3 border-b-2 outline-none transition duration-200 bg-secondary ${ formik.errors.message ? "border-error" : "border-gray-300 focus:border-primary"}`} />
        { formik.errors.message && <p className="text-error text-sm mt-1 font-medium">{formik.errors.message}</p>}
      </div>

      <div className="mt-6">
        <button type="submit" className="btn-primary w-full sm:w-auto px-6 py-3 rounded-md font-medium">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
