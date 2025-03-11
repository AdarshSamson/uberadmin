import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { post, get } from '../helper/helper';
import popularicon from '../../assets/images/popit-logo.png';
import DefaultLayout from "../containers/layout";
import { useAuth } from "../context/AuthContext";

export default function LoginPage({}) {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [branches, setBranches] = useState([]); // State to store branch data
  const [isLoading, setIsLoading] = useState(false); // State to handle loading

  const validationSchema = Yup.object({
    user_name: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    branch_id: Yup.string().required("Branch is required"),
  });

  const initialValues = {
    user_name: "",
    password: "",
    branch_id: "",
  };

  // Function to fetch branch data
  const fetchBranches = async (username, password) => {
    if (!username || !password) return; // Don't call API if username or password is empty

    setIsLoading(true);
    try {
      const response = await post("branch-list", { user_name: username, password });
      if (response.status === 200 && response.data) {
        setBranches(response.data); // Set branch data
      } else {
        setBranches([]); // Clear branches if no data
      }
    } catch (error) {
      console.error("Error fetching branches:", error);
      setBranches([]); // Clear branches on error
    } finally {
      setIsLoading(false);
    }
  };

  // Call fetchBranches whenever username or password changes
  useEffect(() => {
    fetchBranches(formData.username, formData.password);
  }, [formData.username, formData.password]);

  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await post("login", values, true);
      if (response.status === 200 && Array.isArray(response.data) && response.data.length > 0) {

        const { access_token, user_name } = response.data[0];

        localStorage.setItem("token", access_token);
        localStorage.setItem("name", user_name);
        setUser({ token: access_token, userName: user_name });


        navigate("/"); // Redirect after login
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username, password, or branch.");
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className={` ${isDarkMode ? "login-bg-light" : "login-bg-light"}`}>
      <div className="container-xxl ">
        <div className={`row vh-100 d-flex justify-content-center `}>
          <div className="col-10 align-self-center login-bg-dark p-2 rounded-3">
          <div className="card-body">
  <div className="row g-0 justify-content-center"> 

  <div className="col-lg-4 col-md-6 login-card d-none d-sm-block position-relative" >
  <div className="d-flex flex-column align-items-center text-center px-5 py-4">
    <img
      src="assets/images/pmvlogo.png"
      alt="Logo"
      className="img-fluid mb-1"
      style={{ maxWidth: "180px" }}
    />
    <h6 className="mb-4 fw-bold" style={{ color: "#114da3" }}>Popular Motor Ventures LLP</h6>
    <p style={{ color: "rgb(39 39 39)", fontFamily: "monospace" }} className="mb-4">
      Your one-stop solution for seamless management.
    </p>
  </div>

  {/* Footer section fixed at the bottom */}
  <div className="text-center w-100 position-absolute bottom-0  pb-3 " style={{left: "0"}}>
    <hr className="my-1" />
    <h6 className="mb-1 fs-10" style={{ color: "rgb(143 190 255)", letterSpacing: "2px" }}>
      Powered by
    </h6>
    <a href="https://popitsolutions.com/" target="_blank" rel="noopener noreferrer">
      <button className="btn align-items-center">
        <img src={popularicon} alt="Popular Icon" className="img-fluid mb-1" style={{ maxWidth: "100px" }} />
      </button>
    </a>
  </div>
</div>

 {/* Double Blue Stripe */}
 <div className="col-auto position-relative d-none d-md-block">
    <div className="stripe-container">
      <div className="blue-stripe"></div>
      <div className="blue-stripe"></div>
      <div className="stripe-text"><img
          src="assets/images/pmvlogoMain.png" 
          alt="Logo"
          className="img-fluid "
          style={{ maxWidth: "18px" }} 
        /> </div>
      {/* <div className="stripe-text"> <div className='glowing-btn'><span className='glowing-txt'>P<span className='faulty-letter'>M</span>V</span></div></div> */}
    </div>
  </div>

    {/* Right Side: Login Form */}
    <div className="col-lg-4 col-md-6">
      <div className="card login-isomorphic">
        <div className="card-body p-0 auth-header-box rounded-top">
          <div className="text-center p-3">
            <p className=" text-white  fw-medium mb-0 pt-2">Welcome</p>
            <p className="text-gray-100 fw-medium mb-0 pt-2">
              Sign in to continue.
            </p>
          </div>
        </div>
        <div className="card-body pt-0">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              toast.promise(onSubmit(values, { resetForm }), {
                pending: "Logging in...",
                success: "Logged in successfully!",
                error: "Invalid credentials",
              });
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className="form-group mb-2">
                  <label className="form-label text-white" htmlFor="user_name">
                    Username
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="user_name"
                    name="user_name"
                    placeholder="Enter username"
                    onChange={(e) => {
                      handleChange(e);
                      setFormData({ ...formData, username: e.target.value });
                    }}
                  />
                  <ErrorMessage
                    name="user_name"
                    render={(msg) => (
                      <div className="text-danger fs-6">{msg}</div>
                    )}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label text-white" htmlFor="password">
                    Password
                  </label>
                  <div className="position-relative">
                    <Field
                      type={showPassword ? "text" : "password"} // Toggle between text and password
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={(e) => {
                        handleChange(e);
                        setFormData({ ...formData, password: e.target.value });
                      }}
                    />
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y me-1 p-1 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                    >
                      <i
                        className={`fas ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      />{" "}
                      {/* Toggle eye icon */}
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    render={(msg) => (
                      <div className="text-danger fs-6">{msg}</div>
                    )}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label text-white" htmlFor="branch_id">
                    Branch
                  </label>
                  <div className="position-relative">
                    <Field
                      as="select"
                      name="branch_id"
                      className="form-select"
                      disabled={isLoading}
                    >
                      <option value="" disabled>
                        Select Branch
                      </option>
                      {branches.map((branch) => (
                        <option key={branch.Branch_ID} value={branch.Branch_ID}>
                          {branch.Branch_Name}
                        </option>
                      ))}
                    </Field>
                    {isLoading && (
                      <div className={`${isDarkMode ? "bg-dark" : "bg-white"} position-absolute top-50 end-0 translate-middle-y me-1 p-1 rounded-2`}>
                        <div
                          className="spinner-border text-primary spinner-border-sm"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <ErrorMessage
                    name="branch_id"
                    render={(msg) => (
                      <div className="text-danger fs-6">{msg}</div>
                    )}
                  />
                </div>

                <div className="form-group row mt-3">
                  <div className="col-sm-6">
                    <div className="form-check form-switch form-switch-success">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="customSwitchSuccess"
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="customSwitchSuccess"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 text-end">
                    <a
                      href="auth-recover-pw.html"
                      className="bg-gray-200 font-13"
                    >
                      <i className="dripicons-lock fw-bold" /> Forgot password?
                    </a>
                  </div>
                </div>

                <div className="form-group mb-0 row">
                  <div className="col-12">
                    <div className="d-grid mt-3">
                      <button className="btn btn-primary" type="submit">
                        Log In <i className="fas fa-sign-in-alt ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          {/* <div className="text-center mb-2 mt-2">
            <p className="text-white">
              Don't have an account?{" "}
              <a href="auth-register.html" className="text-primary ms-2  fw-bold">
                Free Register
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
   </div>
  );
}