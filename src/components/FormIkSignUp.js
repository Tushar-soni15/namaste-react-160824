import { Formik } from "formik";
import { useNavigate } from "react-router";

// Custom validation function
const validate = (values) => {
  const errors = {};

  // Name validation (at least two words)
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(values.name)) {
    errors.name = "Name must be at least two words";
  }

  // Email validation (valid email format)
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  // Password validation (minimum 8 characters)
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  // Confirm password validation (must match password)
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};

const FormIkSignUp = () => {
  const navigate = useNavigate(); //initialize navigate
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validate={validate}  // Apply custom validation
      onSubmit={(values) => {
        console.log('Form data:', values);
        // On successful form submission, redirect to home page
        navigate('/');  // Redirects to the home page
      }}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 flex flex-col space-y-4">
          <h1 className="font-bold text-lg mb-6 text-center">
            Sign up and get healthy food delivered to your doorstep
          </h1>
          
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            className={`border p-2 rounded ${errors.name && touched.name ? 'border-red-500' : ''}`}
          />
          {errors.name && touched.name && <div className="text-red-500 text-sm">{errors.name}</div>}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className={`border p-2 rounded ${errors.email && touched.email ? 'border-red-500' : ''}`}
          />
          {errors.email && touched.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            className={`border p-2 rounded ${errors.password && touched.password ? 'border-red-500' : ''}`}
          />
          {errors.password && touched.password && <div className="text-red-500 text-sm">{errors.password}</div>}
          
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            className={`border p-2 rounded ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : ''}`}
          />
          {errors.confirmPassword && touched.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword}</div>}
          
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      )}
    </Formik>
  );
};

export default FormIkSignUp;
