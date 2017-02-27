import React from 'react';

import '../vendors/bootstrap/dist/css/bootstrap.min.css';
import '../vendors/font-awesome/css/font-awesome.min.css';
import '../src/scss/custom.scss';

const App = ({children}) => (
  <div className='nav-md'>
    <div className='container body'>
      <div className='main_container'>
        {children}
      </div>
    </div>
  </div>
);

export default App;
