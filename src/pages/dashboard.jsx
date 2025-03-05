import React from "react";

const Dashboard = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center border-dashed-bottom pb-3">
                  <div className="col-9">
                    <p className="text-dark mb-0 fw-semibold fs-14">Sessions</p>
                    <h3 className="mt-2 mb-0 fw-bold">24k</h3>
                  </div>
                  <div className="col-3 align-self-center">
                    <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                      <i className="iconoir-hexagon-dice h1 align-self-center mb-0 text-secondary"></i>
                    </div>
                  </div>
                </div>
                <p className="mb-0 text-truncate text-muted mt-3">
                  <span className="text-success">8.5%</span> New Sessions Today
                </p>
              </div>
            </div>
          </div>
          {/* Add other cards here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;