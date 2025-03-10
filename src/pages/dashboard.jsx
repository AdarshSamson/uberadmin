import React from "react";
import AudienceOverviewChart from '../ui/AudienceOverviewChart';
import VisitorsReportChart from '../ui/VisitorsReportChart';
import TrafficSourcesChart from '../ui/TrafficSourcesChart';
import WorldMap from '../ui/WorldMap';

const Dashboard = () => {
  return (
   

    <div >
      <div className="container-xxl">
        <div className="row justify-content-center mb-4">
          <div className="col-md-6 col-lg-4">
            
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center border-dashed-bottom pb-3">
                  <div className="col-9">
                    <p className="text-dark mb-0 fw-semibold fs-14">Sessions</p>
                    <h3 className="mt-2 mb-0 fw-bold">24k</h3>
                  </div>
                  {/*end col*/}
                  <div className="col-3 align-self-center">
                    <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                      <i className="iconoir-hexagon-dice h1 align-self-center mb-0 text-secondary" />
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <p className="mb-0 text-truncate text-muted mt-3">
                  <span className="text-success">8.5%</span>
                  New Sessions Today
                </p>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center border-dashed-bottom pb-3">
                  <div className="col-9">
                    <p className="text-dark mb-0 fw-semibold fs-14">
                      Avg.Sessions
                    </p>
                    <h3 className="mt-2 mb-0 fw-bold">00:18</h3>
                  </div>
                  {/*end col*/}
                  <div className="col-3 align-self-center">
                    <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                      <i className="iconoir-clock h1 align-self-center mb-0 text-secondary" />
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <p className="mb-0 text-truncate text-muted mt-3">
                  <span className="text-success">1.5%</span>
                  Weekly Avg.Sessions
                </p>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center border-dashed-bottom pb-3">
                  <div className="col-9">
                    <p className="text-dark mb-0 fw-semibold fs-14">
                      Bounce Rate
                    </p>
                    <h3 className="mt-2 mb-0 fw-bold">36.45%</h3>
                  </div>
                  {/*end col*/}
                  <div className="col-3 align-self-center">
                    <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                      <i className="iconoir-percentage-circle h1 align-self-center mb-0 text-secondary" />
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <p className="mb-0 text-truncate text-muted mt-3">
                  <span className="text-danger">8%</span>
                  Up Bounce Rate Weekly
                </p>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6 col-lg-8">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Audience Overview</h4>
                  </div>
                  {/*end col*/}
                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn bt btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icofont-calendar fs-5 me-1" />
                        This Year
                        <i className="las la-angle-down ms-1" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
              <AudienceOverviewChart />

              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <p className="text-dark mb-0 fw-semibold fs-14">
                      New Visitors
                    </p>
                    <h2 className="mt-0 mb-0 fw-bold">1,282</h2>
                  </div>
                  {/*end col*/}
                  <div className="col-auto align-self-center">
                    <div className="img-group d-flex">
                      <a
                        className="user-avatar position-relative d-inline-block"
                        href="#"
                      >
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt="avatar"
                          className="thumb-md shadow-sm rounded-circle"
                        />
                      </a>
                      <a
                        className="user-avatar position-relative d-inline-block ms-n2"
                        href="#"
                      >
                        <img
                          src="assets/images/users/avatar-2.jpg"
                          alt="avatar"
                          className="thumb-md shadow-sm rounded-circle"
                        />
                      </a>
                      <a
                        className="user-avatar position-relative d-inline-block ms-n2"
                        href="#"
                      >
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          alt="avatar"
                          className="thumb-md shadow-sm rounded-circle"
                        />
                      </a>
                      <a
                        className="user-avatar position-relative d-inline-block ms-n2"
                        href="#"
                      >
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt="avatar"
                          className="thumb-md shadow-sm rounded-circle"
                        />
                      </a>
                      <a
                        href=""
                        className="user-avatar position-relative d-inline-block ms-1"
                      >
                        <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                          +6
                        </span>
                      </a>
                    </div>
                    <small className="text-muted">Logined Visitors</small>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <VisitorsReportChart />
                <button
                  type="button"
                  className="btn btn-primary w-100 btn-lg fs-14"
                >
                  More Detail <i className="fa-solid fa-arrow-right-long" />
                </button>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row ">
          <div className="col-lg-6">
            <div className="card card-h-100">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">
                      Browser Used &amp; Traffic Reports
                    </h4>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="table-responsive browser_users">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="border-top-0">Browser</th>
                        <th className="border-top-0">Sessions</th>
                        <th className="border-top-0">Bounce Rate</th>
                        <th className="border-top-0">Transactions</th>
                      </tr>
                      {/*end tr*/}
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/chrome.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Chrome
                        </td>
                        <td>
                          10853<small className="text-muted">(52%)</small>
                        </td>
                        <td> 52.80%</td>
                        <td>
                          566<small className="text-muted">(92%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/micro-edge.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Microsoft Edge
                        </td>
                        <td>
                          2545<small className="text-muted">(47%)</small>
                        </td>
                        <td> 47.54%</td>
                        <td>
                          498<small className="text-muted">(81%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/in-explorer.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Internet-Explorer
                        </td>
                        <td>
                          1836<small className="text-muted">(38%)</small>
                        </td>
                        <td> 41.12%</td>
                        <td>
                          455<small className="text-muted">(74%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/opera.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Opera
                        </td>
                        <td>
                          1958<small className="text-muted">(31%)</small>
                        </td>
                        <td> 36.82%</td>
                        <td>
                          361<small className="text-muted">(61%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/chrome.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Chrome
                        </td>
                        <td>
                          10853<small className="text-muted">(52%)</small>
                        </td>
                        <td> 52.80%</td>
                        <td>
                          566<small className="text-muted">(92%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                    </tbody>
                  </table>
                  {/*end table*/}
                </div>
                {/*end /div*/}
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-lg-6">
            <div className="card card-h-100">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Total Visits</h4>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="border-top-0">Channel</th>
                        <th className="border-top-0">Sessions</th>
                        <th className="border-top-0">Prev.Period</th>
                        <th className="border-top-0">% Change</th>
                      </tr>
                      {/*end tr*/}
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Organic search
                          </a>
                        </td>
                        <td>
                          10853<small className="text-muted">(52%)</small>
                        </td>
                        <td>
                          566<small className="text-muted">(92%)</small>
                        </td>
                        <td>
                          {" "}
                          52.80%{" "}
                          <i className="fas fa-caret-up text-success font-16" />
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Direct
                          </a>
                        </td>
                        <td>
                          2545<small className="text-muted">(47%)</small>
                        </td>
                        <td>
                          498<small className="text-muted">(81%)</small>
                        </td>
                        <td>
                          {" "}
                          -17.20%{" "}
                          <i className="fas fa-caret-down text-danger font-16" />
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Referal
                          </a>
                        </td>
                        <td>
                          1836<small className="text-muted">(38%)</small>
                        </td>
                        <td>
                          455<small className="text-muted">(74%)</small>
                        </td>
                        <td>
                          {" "}
                          41.12%{" "}
                          <i className="fas fa-caret-up text-success font-16" />
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Email
                          </a>
                        </td>
                        <td>
                          1958<small className="text-muted">(31%)</small>
                        </td>
                        <td>
                          361<small className="text-muted">(61%)</small>
                        </td>
                        <td>
                          {" "}
                          -8.24%{" "}
                          <i className="fas fa-caret-down text-danger font-16" />
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Social
                          </a>
                        </td>
                        <td>
                          1566<small className="text-muted">(26%)</small>
                        </td>
                        <td>
                          299<small className="text-muted">(49%)</small>
                        </td>
                        <td>
                          {" "}
                          29.33% <i className="fas fa-caret-up text-success" />
                        </td>
                      </tr>
                      {/*end tr*/}
                    </tbody>
                  </table>
                  {/*end table*/}
                </div>
                {/*end /div*/}
                <p className="m-0 fs-12 fst-italic ps-2 text-muted">
                  Last data updated - 13min ago{" "}
                  <a href="#!" className="link-danger ms-1 ">
                    <i className="align-middle iconoir-refresh" />
                  </a>
                </p>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row justify-content-center mb-4">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Traffic Sources</h4>
                  </div>
                  {/*end col*/}
                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn bt btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icofont-search-user fs-5 me-1" />
                        Direct
                        <i className="las la-angle-down ms-1" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Email
                        </a>
                        <a className="dropdown-item" href="#">
                          Referral
                        </a>
                        <a className="dropdown-item" href="#">
                          Direct
                        </a>
                        <a className="dropdown-item" href="#">
                          Organic
                        </a>
                        <a className="dropdown-item" href="#">
                          Campaign
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="">
                  <div
                    id="traffic_sources"
                    className="apex-charts d-block w-90 mx-auto"
                  />
                   <TrafficSourcesChart />
                  <hr className="hr-dashed border-secondary w-25 mt-0 mx-auto" />
                </div>
                <div className="text-center">
                  <h4>Direct Visitors</h4>
                  <p className="text-muted mt-2">
                    This is a simple hero unit, a simple jumbotron-style
                    component
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary px-3 mt-2"
                  >
                    More details
                  </button>
                </div>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-md-6 col-lg-8">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Organic Traffic In World</h4>
                  </div>
                  {/*end col*/}
                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn bt btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icofont-calendar fs-5 me-1" />
                        Today
                        <i className="las la-angle-down ms-1" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="row">
                {/* <WorldMap /> */}
                  {/*end col*/}
                  <div className="col-lg-4 align-self-center">
                    <div className="d-flex align-items-center my-3">
                      <img
                        src="assets/images/flags/us_flag.jpg"
                        className="thumb-sm align-self-center rounded-circle"
                        alt="..."
                      />
                      <div className="flex-grow-1 ms-2">
                        <h5 className="mb-1">35,365</h5>
                        <p className="text-muted mb-0">
                          USA . Last Month
                          <span className="text-success">
                            2.5%
                            <i className="mdi mdi-arrow-up" />
                          </span>
                        </p>
                      </div>
                      {/*end media-body*/}
                    </div>
                    {/*end media*/}
                    <div className="d-flex align-items-center my-3">
                      <img
                        src="assets/images/flags/germany_flag.jpg"
                        className="thumb-sm align-self-center rounded-circle"
                        alt="..."
                      />
                      <div className="flex-grow-1 ms-2">
                        <h5 className="mb-1">24,865</h5>
                        <p className="text-muted mb-0">
                          Germany . Last Month
                          <span className="text-success">
                            1.2%
                            <i className="mdi mdi-arrow-up" />
                          </span>
                        </p>
                      </div>
                      {/*end media-body*/}
                    </div>
                    {/*end media*/}
                    <div className="d-flex align-items-center my-3">
                      <img
                        src="assets/images/flags/spain_flag.jpg"
                        className="thumb-sm align-self-center rounded-circle"
                        alt="..."
                      />
                      <div className="flex-grow-1 ms-2">
                        <h5 className="mb-1">18,369</h5>
                        <p className="text-muted mb-0">
                          Spain . Last Month
                          <span className="text-success">
                            0.8%
                            <i className="mdi mdi-arrow-up" />
                          </span>
                        </p>
                      </div>
                      {/*end media-body*/}
                    </div>
                    {/*end media*/}
                    <div className="d-flex align-items-center my-3">
                      <img
                        src="assets/images/flags/baha_flag.jpg"
                        className="thumb-sm align-self-center rounded-circle"
                        alt="..."
                      />
                      <div className="flex-grow-1 ms-2">
                        <h5 className="mb-1">11,325</h5>
                        <p className="text-muted mb-0">
                          Bahamas . Last Month
                          <span className="text-success">
                            2.5%
                            <i className="mdi mdi-arrow-up" />
                          </span>
                        </p>
                      </div>
                      {/*end media-body*/}
                    </div>
                    {/*end media*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
     
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="Appearance"
        aria-labelledby="AppearanceLabel"
      >
        <div className="offcanvas-header border-bottom justify-content-between">
          <h5 className="m-0 font-14" id="AppearanceLabel">
            Appearance
          </h5>
          <button
            type="button"
            className="btn-close text-reset p-0 m-0 align-self-center"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <h6>Account Settings</h6>
          <div className="p-2 text-start mt-3">
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch1"
              />
              <label className="form-check-label" htmlFor="settings-switch1">
                Auto updates
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="settings-switch2">
                Location Permission
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch3"
              />
              <label className="form-check-label" htmlFor="settings-switch3">
                Show offline Contacts
              </label>
            </div>
            {/*end form-switch*/}
          </div>
          {/*end /div*/}
          <h6>General Settings</h6>
          <div className="p-2 text-start mt-3">
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch4"
              />
              <label className="form-check-label" htmlFor="settings-switch4">
                Show me Online
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch5"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="settings-switch5">
                Status visible to all
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch6"
              />
              <label className="form-check-label" htmlFor="settings-switch6">
                Notifications Popup
              </label>
            </div>
          </div>
        </div>
      </div>
     </div>
    
 
  );
};

export default Dashboard;