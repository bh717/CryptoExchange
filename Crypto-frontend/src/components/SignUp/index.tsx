import React, { useState, useEffect } from 'react';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {Styles} from './SignupElement';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import './styles.css';
import IUser from '../../types/user.type';
import {register} from '../../services/auth.service';

import {ButtonDiv,ButtonStyle,ServicesH2,TopicDiv} from './SignupElement';

const SignupPage = () =>{
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showFlag, setFlag]= useState<boolean>(false);
  let navigate = useNavigate();
  const initialValues: IUser= {
    firstname:"",
    lastname:"",
    invitecode:"",
    email:"",
    password: "",
    confirm:"",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    lastname: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    invitecode: Yup.string()
      .test(
        "len",
        "Invitecde is not correct",
        (val: any) =>
          (val === "CTA_00HIA0FD8S" ||
          val === "CPA_s566hgsS" ||
          val === "Hh1_d667bdjkLM" ||
          val === "KaLLF_bxo6500hfvl") &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
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
    confirm: Yup.string()
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
 
  const handleRegister= (formValue: IUser) => {
    const { firstname, lastname, invitecode, email, password, confirm } = formValue;
    // console.log(firstname, lastname, invitecode, email, password, confirm);

    if(password===confirm)
    {
      // alert('yes');
      register(firstname,lastname,invitecode, email, password).then(
        (response) =>{
          console.log(response.data.message);
          if(response.data.message==="user already exist")
          {
              // alert('1');
              setMessage(response.data.message);
          }
          else
          {
            setSuccessful(true);
            return navigate("/login");
          }
        }
        );
    }
    else
    {
      setMessage("Password is not same");
    }

    
    // return navigate("/");

  };

  return (
    <Styles>
      <div className="col-md-12">
        <div className="card card-container">
          <TopicDiv>
            <ServicesH2>SignUp</ServicesH2>
          </TopicDiv>
          <hr/>
          {! successful &&(
            <ButtonDiv>
              <ButtonStyle onClick={()=>setFlag(true)}>Email</ButtonStyle>
              <ButtonStyle onClick={()=>setFlag(false)}>Mobile</ButtonStyle>
            </ButtonDiv>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <Form>
              {!successful && (
                <div>
              <div className="form-group" style={{display:'flex'}}>
                <div style={{marginRight:'10px'}}>
                  <label htmlFor="firstname">First Name</label>
                  <Field name="firstname" type="text" className="form-control" />
                  <ErrorMessage 
                    name="firstname"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
                <div>
                  <label htmlFor="lastname">Last Name</label>
                  <Field name="lastname" type="text" className="form-control" />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="invitecode">Invitecode</label>
                <Field name="invitecode" type="text" className="form-control" />
                <ErrorMessage
                  name="invitecode"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
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

              <div className="form-group">
                <label htmlFor="confirm">Confirm Password</label>
                <Field name="confirm" type="password" className="form-control" />
                <ErrorMessage
                  name="confirm"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form-group" style={{marginTop:'10px'}}>
                <button type="submit" className="btn btn-primary btn-block" style= {{width:'100%'}}>
                  SignUp
                </button>
              </div>
              </div>
              )}
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </Styles>
  );
};
export default SignupPage;