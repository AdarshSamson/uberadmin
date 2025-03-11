import React from 'react'

export default function driverMaster() {
  return (
    <div >
    <div className="container-xxl">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="row align-items-center">
                <div className="col">
                  <h4 className="card-title">Export Table</h4>
                </div>
                {/*end col*/}
              </div>{" "}
              {/*end row*/}
            </div>
            {/*end card-header*/}
            <div className="card-body pt-0">
              <div className="table-responsive">
                <table className="table datatable" id="datatable_2">
                  <thead className="">
                    <tr>
                      <th>Name</th>
                      <th>Ext.</th>
                      <th>City</th>
                      <th data-type="date" data-format="YYYY/DD/MM">
                        Start Date
                      </th>
                      <th>Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Unity Pugh</td>
                      <td>9958</td>
                      <td>Curicó</td>
                      <td>2005/02/11</td>
                      <td>37%</td>
                    </tr>
                    <tr>
                      <td>Theodore Duran</td>
                      <td>8971</td>
                      <td>Dhanbad</td>
                      <td>1999/04/07</td>
                      <td>97%</td>
                    </tr>
                    <tr>
                      <td>Kylie Bishop</td>
                      <td>3147</td>
                      <td>Norman</td>
                      <td>2005/09/08</td>
                      <td>63%</td>
                    </tr>
                    <tr>
                      <td>Willow Gilliam</td>
                      <td>3497</td>
                      <td>Amqui</td>
                      <td>2009/29/11</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>Blossom Dickerson</td>
                      <td>5018</td>
                      <td>Kempten</td>
                      <td>2006/11/09</td>
                      <td>17%</td>
                    </tr>
                    <tr>
                      <td>Elliott Snyder</td>
                      <td>3925</td>
                      <td>Enines</td>
                      <td>2006/03/08</td>
                      <td>57%</td>
                    </tr>
                    <tr>
                      <td>Castor Pugh</td>
                      <td>9488</td>
                      <td>Neath</td>
                      <td>2014/23/12</td>
                      <td>93%</td>
                    </tr>
                    <tr>
                      <td>Pearl Carlson</td>
                      <td>6231</td>
                      <td>Cobourg</td>
                      <td>2014/31/08</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>Deirdre Bridges</td>
                      <td>1579</td>
                      <td>Eberswalde-Finow</td>
                      <td>2014/26/08</td>
                      <td>44%</td>
                    </tr>
                    <tr>
                      <td>Daniel Baldwin</td>
                      <td>6095</td>
                      <td>Moircy</td>
                      <td>2000/11/01</td>
                      <td>33%</td>
                    </tr>
                    <tr>
                      <td>Pearl Carlson</td>
                      <td>6231</td>
                      <td>Cobourg</td>
                      <td>2014/31/08</td>
                      <td>100%</td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="btn btn-sm btn-primary csv">
                  Export CSV
                </button>
                <button type="button" className="btn btn-sm btn-primary sql">
                  Export SQL
                </button>
                <button type="button" className="btn btn-sm btn-primary txt">
                  Export TXT
                </button>
                <button type="button" className="btn btn-sm btn-primary json">
                  Export JSON
                </button>
              </div>
            </div>
            {/*end card-body*/}
          </div>
          {/*end card*/}
        </div>{" "}
        {/*end col*/}
      </div>
    </div>
 </div>
  )
}
