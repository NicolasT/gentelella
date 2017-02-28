import React from 'react';

import '../vendors/bootstrap/dist/css/bootstrap.min.css';
import '../vendors/font-awesome/css/font-awesome.min.css';
import '../src/scss/custom.scss';

import '../vendors/jquery/dist/jquery.min.js';
import '../vendors/bootstrap/dist/js/bootstrap.min.js';

const App = ({children}) => (
  <div id='container' className='nav-md'>
    <div className='container body'>
      <div className='main_container'>
        {children}
      </div>
    </div>
  </div>
);

export default App;
