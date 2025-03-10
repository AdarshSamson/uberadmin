import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
  <>
  <div className="container-xxl">
    <div className="row vh-100 d-flex justify-content-center">
      <div className="col-12 align-self-center">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4 mx-auto">
              <div className="card">
                <div className="card-body p-0 bg-black auth-header-box rounded-top">
                  <div className="text-center p-3">
                    <a href="index.html" className="logo logo-admin">
                      <img
                        src="assets/images/pmvlogoMain.png"
                        height={50}
                        alt="logo"
                        className="auth-logo"
                      />
                    </a>
                    <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">
                      Sorry! Unexpected Server Error
                    </h4>
                    <p className="text-muted fw-medium mb-0">
                      Back to dashboard of Rizz
                    </p>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="ex-page-content text-center">
                    <img
                      src="assets/images/extra/error.svg"
                      alt={0}
                      className=""
                      height={170}
                    />
                    <h1 className="my-2">500!</h1>
                    <h5 className="fs-16 text-muted mb-3">
                      Internal Server Error
                    </h5>
                  </div>
                  <a className="btn btn-primary w-100" href="/dashboard">
                    Back to Dashboard <i className="fas fa-redo ms-1" />
                  </a>
                </div>
                {/*end card-body*/}
              </div>
              {/*end card*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end card-body*/}
      </div>
      {/*end col*/}
    </div>
    {/*end row*/}
  </div>
  {/* container */}
</>

  {/* c
   */}
</>

      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
