import React from 'react';
import ReactDOM from 'react-dom';

import { App, Footer, Sidebar, TopNav } from '..';

import img from './images/img.jpg';

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
    <Sidebar>
      <Sidebar.Title logo={<i className="fa fa-paw"></i>} title='Gentelella Alela!' />
      <div className="clearfix"></div>
      <Sidebar.Profile avatar={img} name="John Doe" />
      <br />

      <Sidebar.Menu>
        <Sidebar.Menu.Section title='General'>
          <Sidebar.Menu.Section.Category icon="home" title="Home">
            <li><a href='#'>Dashboard</a></li>
            <li><a href='#'>Dasboard2</a></li>
            <li><a href='#'>Dasboard3</a></li>
          </Sidebar.Menu.Section.Category>
          <Sidebar.Menu.Section.Category icon='edit' title='Forms'>
            <li><a href='#'>General Form</a></li>
            <li><a href='#'>Advanced Components</a></li>
          </Sidebar.Menu.Section.Category>
        </Sidebar.Menu.Section>
        <Sidebar.Menu.Section title='Live On'>
          <Sidebar.Menu.Section.Category icon='bug' title='Additional Pages'>
            <li><a href='#'>E-commerce</a></li>
          </Sidebar.Menu.Section.Category>
        </Sidebar.Menu.Section>
      </Sidebar.Menu>

      <Sidebar.Footer>
        <Sidebar.Footer.Entry icon='cog' title='Settings' />
        <Sidebar.Footer.Entry icon='fullscreen' title='FullScreen' />
        <Sidebar.Footer.Entry icon='eye-close' title='Lock' />
        <Sidebar.Footer.Entry icon='off' title='Logout' />
      </Sidebar.Footer>
    </Sidebar>

    <TopNav>
      <li>
        <a href='#' className='user-profile dropdown-toggle' data-toggle='dropdown' aria-expanded='false'>
          <img src={img} alt='' />John Doe
          <span className='fa fa-angle-down'></span>
        </a>
        <ul className='dropdown-menu dropdown-usermenu pull-right'>
          <li><a href='#'> Profile</a></li>
          <li><a href='#'> Help</a></li>
          <li><a href='#'><i className='fa fa-sign-out pull-right'></i> Log Out</a></li>
        </ul>
      </li>
    </TopNav>

    {pageContent}

    <Footer>
      Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
    </Footer>
  </App>,
  document.getElementById('content'),
);

require('../vendors/fastclick/lib/fastclick.js');
require('../vendors/nprogress/nprogress.js');
require('../src/js/helpers/smartresize.js');
require('../src/js/custom.js');
