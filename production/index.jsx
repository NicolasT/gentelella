import React from 'react';
import ReactDOM from 'react-dom';

import { App, Footer, SideBar, TopNav } from '..';

const pageContent = (
        <div className="right_col" role="main">
          <div className="">
            <div className="page-title">
              <div className="title_left">
                <h3>Plain Page</h3>
              </div>

              <div className="title_right">
                <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Plain Page</h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                      Add content to the page ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
);

ReactDOM.render(
  <App>
    <SideBar />
    <TopNav />
    {pageContent}
    <Footer>
      Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
    </Footer>
  </App>,
  document.getElementById('content'),
);

require('../vendors/jquery/dist/jquery.min.js');
require('../vendors/bootstrap/dist/js/bootstrap.min.js');
require('../vendors/fastclick/lib/fastclick.js');
require('../vendors/nprogress/nprogress.js');
require('../src/js/helpers/smartresize.js');
require('../src/js/custom.js');
