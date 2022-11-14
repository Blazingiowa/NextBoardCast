import {ReactElement} from "react";
import Layout from "../../components/layout/Layout";
import Script from "next/script";

function Home():JSX.Element {
  return (
      <>
        <div className="row">
          <div className="col">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#"><i className="ti-home"></i> Dashboard</a></li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <div className="icon-left text-secondary"><i className="ti-bar-chart"></i></div>
                <div className="number-right text-right">
                  <h6 className="bold text-secondary">Monthly Goal</h6>
                  <h3 className="card-title text-warning bold">$74,502</h3>
                </div>
                <div className="progress progress-bar-sm">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"
                       style={{width:'75%'}} aria-valuenow="75"
                       aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress-text text-secondary">
                  <span className="float-left"><small>$0</small></span>
                  <span className="float-right"><small>$100,000</small></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <div className="icon-left text-secondary"><i className="ti-receipt"></i></div>
                <div className="number-right text-right">
                  <h6 className="bold text-secondary">Monthly Orders</h6>
                  <h3 className="card-title text-primary bold">9,432</h3>
                </div>
                <div className="progress progress-bar-sm">
                  <div className="progress-bar bg-primary" role="progressbar" style={{width:'100%'}} aria-valuenow="100"
                       aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress-text text-secondary">
                  <span className="float-left"><small>Total Monthly Orders</small></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <div className="icon-left text-secondary"><i className="ti-wallet"></i></div>
                <div className="number-right text-right">
                  <h6 className="bold text-secondary">Monthly Expenses</h6>
                  <h3 className="card-title text-bubblegum bold">$2,942</h3>
                </div>
                <div className="progress progress-bar-sm">
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-bubblegum"
                       role="progressbar" style={{width:'30%'}} aria-valuenow="30"
                       aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress-text text-secondary">
                  <span className="float-left"><small>0%</small></span>
                  <span className="float-right"><small>100%</small></span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-3">
              <div className="card-body" id="year-comparison-chart"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-header">
                <div className="caption">
                  <i className="ti-user"></i> Employees Sales
                </div>
                <div className="tools">
                  <a href="#" className="btn btn-round btn-sm btn-outline-secondary">Today</a>
                  <a href="#" className="btn btn-round btn-sm btn-outline-secondary">Week</a>
                  <a href="#" className="btn btn-round btn-sm btn-outline-secondary">Month</a>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6 text-right">
                            <h6 className="bold text-secondary">Daily</h6>
                            <h5 className="card-title text-tuscany bold">$7,524</h5>
                          </div>
                          <div className="col-6">
                            <div id="sparkline-chart1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6 text-right">
                            <h6 className="bold text-secondary">Weekly</h6>
                            <h5 className="card-title text-info bold">$18,852</h5>
                          </div>
                          <div className="col-6">
                            <div id="sparkline-chart2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 scrollbox-md" data-simplebar>
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                          <th>Employee</th>
                          <th className="text-right">Daily</th>
                          <th className="text-right">Totals</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td scope="row"><img src="assets/img/profile/profile-07.jpg" className="rounded-circle mr-2"
                                               width="30" alt=""/> <a href="#">siQuang Humbleman</a></td>
                          <td className="text-right">$2,546</td>
                          <td className="text-right">$14,587</td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="assets/img/profile/profile-02.jpg" className="rounded-circle mr-2"
                                               width="30" alt=""/> <a href="#">Bob OfHope</a></td>
                          <td className="text-right">$2,338</td>
                          <td className="text-right">$8,321</td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="assets/img/profile/profile-03.jpg" className="rounded-circle mr-2"
                                               width="30" alt=""/> <a href="#">Dana Squash</a></td>
                          <td className="text-right">$1,478</td>
                          <td className="text-right">$6,720</td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="assets/img/profile/profile-04.jpg" className="rounded-circle mr-2"
                                               width="30" alt=""/> <a href="#">Pear Appleton</a></td>
                          <td className="text-right">$2,338</td>
                          <td className="text-right">$8,321</td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="assets/img/profile/profile-06.jpg" className="rounded-circle mr-2"
                                               width="30" alt=""/> <a href="#">Lemony Tang</a></td>
                          <td className="text-right">$1,478</td>
                          <td className="text-right">$6,720</td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="assets/img/profile/profile-01.jpg" className="rounded-circle mr-2"
                                               width="30" alt=""/> <a href="#">Duke Turnbull</a></td>
                          <td className="text-right">$1,338</td>
                          <td className="text-right">$4,321</td>
                        </tr>
                        <tr>
                          <td scope="row"><img src="assets/img/profile/profile-05.jpg" className="rounded-circle mr-2"
                                               width="30" alt=""/> <a href="#">Berry Cherry</a></td>
                          <td className="text-right">$978</td>
                          <td className="text-right">$3,720</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-header">
                <div className="caption">
                  <i className="ti-pencil-alt"></i> My Tasks
                </div>
                <div className="tools">
                  <a href="#" className="btn btn-sm btn-primary" data-toggle="tooltip"
                     title="Add New Task"><i className="ti-plus"></i></a>
                  <a href="#" className="btn btn-sm btn-outline-secondary" data-toggle="dropdown"
                     aria-expanded="false">
                    <i className="ti-settings"></i> Settings <i className="ti-arrow-circle-down"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#" className="dropdown-item">Action</a>
                    <a href="#" className="dropdown-item">Another Action</a>
                    <div className="dropdown-divider"></div>
                    <a href="#" className="dropdown-item">Some Setting</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row py-3">
                  <div className="col-md-3 col-6 d-flex flex-column align-items-center">
                    <h2 className="text-primary bold">10</h2>
                    Active
                  </div>
                  <div className="col-md-3 col-6 d-flex flex-column align-items-center">
                    <h2 className="text-success bold">2</h2>
                    In-Progress
                  </div>
                  <div className="col-md-3 col-6 d-flex flex-column align-items-center">
                    <h2 className="text-warning bold">3</h2>
                    On-Hold
                  </div>
                  <div className="col-md-3 col-6 d-flex flex-column align-items-center">
                    <h2 className="text-secondary bold">4</h2>
                    Completed
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 scrollbox-md" data-simplebar>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="d-flex align-items-baseline">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" className="custom-control-input" id="checkbox1" name="checkbox1"/>
                              <label className="custom-control-label" htmlFor="checkbox1">&nbsp;</label>
                          </div>
                          <div className="pl-4">
                            <strong>Doctor Appointment <i className="ti-hand-open text-warning"></i></strong><br/>Annual
                            checkup with doctor
                          </div>
                          <div className="ml-auto text-right">
                            <div className="btn-group btn-group-sm">
                              <a href="#" className="btn btn-sm btn-success"><i className="ti-check"></i></a>
                              <a href="#" className="btn btn-sm btn-secondary"><i
                                  className="ti-trash"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex align-items-baseline">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" className="custom-control-input" id="checkbox2" name="checkbox2"/>
                              <label className="custom-control-label" htmlFor="checkbox2">&nbsp;</label>
                          </div>
                          <div className="pl-4">
                            <strong>Write Unit Test <i className="ti-timer text-success"></i></strong><br/>Unit test for
                            dashboard widgets
                          </div>
                          <div className="ml-auto text-right">
                            <div className="btn-group btn-group-sm">
                              <a href="#" className="btn btn-sm btn-success"><i className="ti-check"></i></a>
                              <a href="#" className="btn btn-sm btn-secondary"><i
                                  className="ti-trash"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex align-items-baseline">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" className="custom-control-input" id="checkbox3" name="checkbox3"/>
                              <label className="custom-control-label" htmlFor="checkbox3">&nbsp;</label>
                          </div>
                          <div className="pl-4">
                            <strong>Annual Report <i className="ti-notepad text-primary"></i></strong><br/>Design annual
                            report cover
                          </div>
                          <div className="ml-auto text-right">
                            <div className="btn-group btn-group-sm">
                              <a href="#" className="btn btn-sm btn-success"><i className="ti-check"></i></a>
                              <a href="#" className="btn btn-sm btn-secondary"><i
                                  className="ti-trash"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex align-items-baseline">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" className="custom-control-input" id="checkbox4" name="checkbox4"/>
                              <label className="custom-control-label" htmlFor="checkbox4">&nbsp;</label>
                          </div>
                          <div className="pl-4">
                            <strong>Management Meeting <i className="ti-notepad text-primary"></i></strong><br/>Coming up
                            meeting with staffs
                          </div>
                          <div className="ml-auto text-right">
                            <div className="btn-group btn-group-sm">
                              <a href="#" className="btn btn-sm btn-success"><i className="ti-check"></i></a>
                              <a href="#" className="btn btn-sm btn-secondary"><i
                                  className="ti-trash"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex align-items-baseline">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" className="custom-control-input" id="checkbox5" name="checkbox5"/>
                              <label className="custom-control-label" htmlFor="checkbox5">&nbsp;</label>
                          </div>
                          <div className="pl-4">
                            <strong>Merge Development <i className="ti-timer text-success"></i></strong><br/>Merge
                            development branch with master
                          </div>
                          <div className="ml-auto text-right">
                            <div className="btn-group btn-group-sm">
                              <a href="#" className="btn btn-sm btn-success"><i className="ti-check"></i></a>
                              <a href="#" className="btn btn-sm btn-secondary"><i
                                  className="ti-trash"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex align-items-baseline">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" className="custom-control-input" id="checkbox6" name="checkbox6"/>
                              <label className="custom-control-label" htmlFor="checkbox6">&nbsp;</label>
                          </div>
                          <div className="pl-4">
                            <strong>Build Report <i className="ti-hand-open text-warning"></i></strong><br/>Build report
                            graph for dashboard
                          </div>
                          <div className="ml-auto text-right">
                            <div className="btn-group btn-group-sm">
                              <a href="#" className="btn btn-sm btn-success"><i className="ti-check"></i></a>
                              <a href="#" className="btn btn-sm btn-secondary"><i
                                  className="ti-trash"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex align-items-baseline">
                          <div className="custom-checkbox custom-control">
                            <input type="checkbox" className="custom-control-input" id="checkbox7" name="checkbox7"/>
                              <label className="custom-control-label" htmlFor="checkbox7">&nbsp;</label>
                          </div>
                          <div className="pl-4">
                            <strong>Add New Vendor <i className="ti-hand-open text-warning"></i></strong><br/>Add new
                            third-party vendor
                          </div>
                          <div className="ml-auto text-right">
                            <div className="btn-group btn-group-sm">
                              <a href="#" className="btn btn-sm btn-success"><i className="ti-check"></i></a>
                              <a href="#" className="btn btn-sm btn-secondary"><i
                                  className="ti-trash"></i></a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" id="articles"></div>

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body" id="product-sales-chart"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body" id="expenses-chart"></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-header">
                <div className="caption text-primary">
                  <i className="ti-panel"></i> Company Timeline
                </div>
              </div>
              <div className="card-body scrollbox-md" data-simplebar>
                <div className="timeline-wrapper">
                  <div className="timeline-item" data-date="04-22-2020">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam nisi distinctio dolorum
                      est tempora.</p>
                    <a href="#" className="btn btn-sm btn-primary">More Info</a>
                  </div>
                  <div className="timeline-item" data-date="04-16-2020">
                    <p>Completed dashboard layout and add all required widgets.</p>
                  </div>
                  <div className="timeline-item" data-date="04-14-2020">
                    <p>Added new page to UI Element category. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sit officiis ut natus et minima expedita.</p>
                    <a href="#" className="btn btn-sm btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-header">
                <div className="caption text-primary">
                  <i className="ti-user"></i> Recent Members
                </div>
                <div className="tools">
                  <a href="#" className="btn btn-sm btn-outline-primary"><i className="ti-import"
                                                                                       data-toggle="tooltip"
                                                                                       title="Download List"></i></a>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card">
                      <img src="assets/img/profile/profile-01.jpg" alt="" className="card-img-top"/>
                        <div className="card-body p-2 text-center">
                          <h5 className="card-title">Jason Crispy</h5>
                          <p className="card-text font-size-12">Lorem Ipsum text placeholder.</p>
                          <a href="#" className="card-link"><i className="ti-twitter"></i> 3.5k</a>
                          <a href="#" className="card-link"><i className="ti-facebook"></i> 2.4k</a>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card">
                      <img src="assets/img/profile/profile-02.jpg" alt="" className="card-img-top"/>
                        <div className="card-body p-2 text-center">
                          <h5 className="card-title">Bob OfHope</h5>
                          <p className="card-text font-size-12">Lorem Ipsum text placeholder.</p>
                          <a href="#" className="card-link"><i className="ti-twitter"></i> 4.1k</a>
                          <a href="#" className="card-link"><i className="ti-facebook"></i> 7.2k</a>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="card">
                      <img src="assets/img/profile/profile-03.jpg" alt="" className="card-img-top"/>
                        <div className="card-body p-2 text-center">
                          <h5 className="card-title">Dana Squash</h5>
                          <p className="card-text font-size-12">Lorem Ipsum text placeholder.</p>
                          <a href="#" className="card-link"><i className="ti-twitter"></i> 6.1k</a>
                          <a href="#" className="card-link"><i className="ti-facebook"></i> 5.5k</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
Home.getLayout=function getLayout(page:ReactElement){
  return (
      <Layout>
        {page}
        <Script src={"assets/scripts/siqtheme.js"}></Script>
        <Script src={"assets/scripts/pages/dashboard1.js"}></Script>
      </Layout>
  )
}
export default Home
