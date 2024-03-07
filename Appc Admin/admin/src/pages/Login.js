import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { toast } from "react-toastify";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email Should be Valid")
      .required("Email is Required"),
    password: yup.string().required("Password is Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!user === null || isSuccess) {
      navigate("admin");
    } else {
      // alert("Not Success");
      toast.error('Password Incorrect || You Are Not An Admin')
    }
  }, [user, isLoading, isSuccess, isError, message]);
  return (
    <>
      <div
        className="py-5"
        style={{ background: "#8443f5", minHeight: "100vh" }}
      >
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center">Login</h3>
          <p className="text-center">Login To Your Account To Continue</p>
          <form action="" className="form" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="email"
              className="mt-4"
              name="email"
              placeholder="Email Address"
              id="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <CustomInput
              type="password"
              className="mt-4"
              name="password"
              placeholder="Password"
              id="password"
              onChange={formik.handleChange("password")}
              value={formik.values.password}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <div style={{ marginTop: "10px", color: "white" }}>
              <Link to={"/forgot-password"} style={{ textDecoration: "none" }}>
                Forgot Password
              </Link>
            </div>
            <button
              className="border-0 px-3 py-2 mt-4 text-white fs-6 fw-bold w-100 text-decoration-none text-center"
              type="submit"
              style={{ background: "#8443f5" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
