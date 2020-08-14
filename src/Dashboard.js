import React from "react";
import lambdatestlogo from "./logo.svg";
class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <header className="header">
          <div className="top-bar-menu .max-w-full shadow">
            <div className="logo-left px-4 py-4">
              <img src={lambdatestlogo} alt="lamdatest" />
            </div>
          </div>
        </header>
        <aside className="left-menu">
          <ul className="menu-list">
            <li className="child-menu">
              <a href="#">Dashboard</a>
            </li>
            <li className="child-menu">
              <a href="#">Real Time Testing</a>
            </li>
            <li className="child-menu">
              <a href="#">Visual UI Testing</a>
            </li>
            <li className="child-menu">
              <a href="#">Automation</a>
            </li>
            <li className="child-menu">
              <a href="#">Test Logs</a>
            </li>
            <li className="child-menu">
              <a href="#">Issue Tracker</a>
            </li>
            <li className="child-menu">
              <a href="#">Integrations</a>
            </li>
            <li className="child-menu">
              <a href="#">Projects</a>
            </li>
          </ul>
        </aside>
        <section className="main-section">
          <div className="container ml-48 mt-12">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 xl:w-2/5 pl-4 pt-6">
                <div className="bg-white border rounded shadow">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 xl:w-1/2">
                      <div className="dashboard-title p-4">
                        Overview
                        <span className="dashboard-subtitle">
                          Total tests run till date
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2">
                      <div className="p-4">
                        <ul class="overview-list">
                          <li class="automation">
                            0<span>Automation Test</span>
                          </li>
                          <li class="realtime">
                            1<span>Realtime Test</span>
                          </li>
                          <li class="screenshot">
                            0<span>Screenshot Test</span>
                          </li>
                          <li class="responsive">
                            0<span>Responsive Test</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-2/5 p-4 pt-6">
                <div className="bg-white border rounded shadow">
                  <div className="bg-white border rounded shadow">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-1/2 xl:w-1/2">
                        <div className="dashboard-title p-4">
                          Concurrent Sessions
                          <span className="dashboard-subtitle">
                            Total tests run till date
                          </span>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 xl:w-1/2">
                        <div className="p-4">
                          <ul class="overview-list">
                            <li class="automation">
                              0<span>Automation Test</span>
                            </li>
                            <li class="realtime">
                              1<span>Realtime Test</span>
                            </li>
                            <li class="screenshot">
                              0<span>Screenshot Test</span>
                            </li>
                            <li class="responsive">
                              0<span>Responsive Test</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/5 p-2 pt-6">
                <div className="bg-white border rounded shadow">
                  <div className="dashboard-title p-2 pl-5">
                    Minutes & Queue
                  </div>
                  <div className="mb-4">
                    <ul class="consumed-time pb-10">
                      <li class="realtime">
                        1/60
                        <span>Realtime Mins.</span>
                      </li>
                      <li class="automation">
                        0/100
                        <span>Automation Mins.</span>
                      </li>
                      <li class="automation">
                        0/10
                        <span>Automation Queue</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 xl:w-4/5 pl-4">
                <div className="bg-white border rounded shadow">
                  <div className="flex flex-wrap">
                    <div className="w-full">
                    <div class="bg-white border shadow">
                        <div class="border-b p-3">
                            <h5 class="font-bold text-gray-600">DataTable</h5>
                        </div>
                        <div class="p-5">
                            <table class="w-full p-5 text-gray-700">
                                <thead>
                                    <tr>
                                        <th class="text-left text-blue-900">Name</th>
                                        <th class="text-left text-blue-900">TestSide</th>
                                        <th class="text-left text-blue-900">Testrole</th>
                                        <th class="text-left text-blue-900">Testrole</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Obi Kenobi</td>
                                        <td>Obi Kenobi</td>
                                        <td>Light</td>
                                        <td>Jedi</td>
                                    </tr>
                                    <tr>
                                        <td>Greedo</td>
                                        <td>Greedo</td>
                                        <td>South</td>
                                        <td>Scumbag</td>
                                    </tr>
                                    <tr>
                                        <td>Darth Vader</td>
                                        <td>Darth Vader</td>
                                        <td>Dark</td>
                                        <td>Sith</td>
                                    </tr> 
                                    <tr>
                                        <td>Obi Kenobi</td>
                                        <td>Obi Kenobi</td>
                                        <td>Light</td>
                                        <td>Jedi</td>
                                    </tr>
                                    <tr>
                                        <td>Obi Kenobi</td>
                                        <td>Obi Kenobi</td>
                                        <td>Light</td>
                                        <td>Jedi</td>
                                    </tr>
                                    <tr>
                                        <td>Obi Kenobi</td>
                                        <td>Obi Kenobi</td>
                                        <td>Light</td>
                                        <td>Jedi</td>
                                    </tr>                                  
                                </tbody>
                            </table>

                            <p class="py-2"><a href="#">See More issues...</a></p>

                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2">

                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/5 pl-4">
                <div className="bg-white border rounded shadow">
                  <div className="dashboard-title p-2 pl-5">
                  Integrations
                  </div>
                  <div className="mb-4">
                    <div class="integrations-list">
                      <img src="https://integrations.lambdatest.com/assets/images/integration-jira.svg" />
                      Jira
                      <br />
                      <a
                        href="https://integrations.lambdatest.com/jira/install"
                        class="btn"
                      >
                        INSTALL
                      </a>
                    </div>
                    <div class="integrations-list">
                      <img src="https://integrations.lambdatest.com/assets/images/integration-slack.svg" />
                      Slack
                      <br />{" "}
                      <a
                        href="https://integrations.lambdatest.com/slack/install"
                        class="btn"
                      >
                        INSTALL
                      </a>
                    </div>
                    <div class="integrations-list">
                      <img src="https://integrations.lambdatest.com/assets/images/integration-asana.svg" />
                      Asana
                      <br />{" "}
                      <a
                        href="https://integrations.lambdatest.com/asana/install"
                        class="btn"
                      >
                        INSTALL
                      </a>
                    </div>
                    <p class="see-more mt-3"><a href="https://integrations.lambdatest.com">SEE MORE</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
