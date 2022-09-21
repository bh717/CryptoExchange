import React, { useState, useEffect } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Styles} from './loginElement';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import './styles.css';
import { login } from "../../services/auth.service";
import {ButtonDiv,ButtonStyle,ServicesH2,TopicDiv} from './loginElement';
const LoginPage = () =>{
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showFlag, setFlag]= useState<boolean>(false);

  let navigate = useNavigate();

  const initialValues: {
    email: string;
    password: string;
  } = {
    email: "",
    password: "",
  };
  const setshow= () =>{
    // alert(1);
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 30
      )
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleLogin = (formValue: { email: string; password: string }) => {
    // alert(1);
    const { email, password } = formValue;
    login(email, password).then(
      (response) => {
        // alert(response.data.message);
        if(response.data.message === "wrong credentials")
        {
          setMessage("Wrong Password");
        }
        else if(response.data.message === "not register")
        {
          setMessage("This user doesn't exist");
        }
        else if(response.data.message === "login success")
        {
          // alert(email);
          localStorage.setItem('user',email);
          return navigate("/Home");
        }
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        console.log(resMessage);
        setMessage(resMessage);
      }
    );
  };

  return (
    <Styles>
      <div className="col-md-12">
        <div className="card card-container" style={{backgroundColor:'bloack'}}>
          <TopicDiv>
            <ServicesH2>LogIn</ServicesH2>
          </TopicDiv>
          <hr/>
          <ButtonDiv>
            <ButtonStyle onClick={()=>setFlag(true)}>Email</ButtonStyle>
            <ButtonStyle onClick={()=>setFlag(false)}>Mobile</ButtonStyle>
          </ButtonDiv>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form>
              <div className="form-group">
                {showFlag && (
                  <label htmlFor="email">Email</label>
                )}
                {showFlag===false && (
                  <label htmlFor="phone">Phone</label>
                )}
                <Field name="email" type="text" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-control" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group" style={{marginTop:'10px'}}>
                <button type="submit" className="btn btn-primary btn-block" style= {{width:'100%'}} disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <span>Don’t have an account? <a href='/signup'>Sign up</a></span>
            </Form>
          </Formik>
        </div>
      </div>
    </Styles>
  );
};
export default LoginPage;