import React from 'react';

const Title = ({logo, title}) => (
  <div className='navbar nav_title' style={{border: 0}}>
    <a href='#' className='site_title'>
      {logo} <span>{title}</span>
    </a>
  </div>
);

const Profile = ({avatar, name}) => (
  <div className="profile clearfix">
    <div className="profile_pic">
      <img src={avatar} alt="..." className="img-circle profile_img" />
    </div>
    <div className="profile_info">
      <span>Welcome,</span>
        <h2>{name}</h2>
      </div>
      <div className="clearfix"></div>
  </div>
);

const Footer = ({children}) => (
  <div className="sidebar-footer hidden-small">
    {children}
  </div>
);

const Entry = ({icon, title}) => {
  const className = `glyphicon glyphicon-${icon}`;

  return (
    <a data-toggle="tooltip" data-placement="top" title={title}>
      <span className={className} aria-hidden="true"></span>
    </a>
  );
};
Footer.Entry = Entry;

const Menu = ({children}) => (
  <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
    {children}
  </div>
);

const Section = ({children, title}) => (
  <div className="menu_section">
    <h3>{title}</h3>
    <ul className='nav side-menu'>
      {children}
    </ul>
  </div>
);
Menu.Section = Section;

const Category = ({children, icon, title}) => {
  const className=`fa fa-${icon}`;

  return (
    <li>
      <a><i className={className}></i> {title} <span className='fa fa-chevron-down'></span></a>
      <ul className='nav child_menu'>
        {children}
      </ul>
    </li>
  );
};
Menu.Section.Category = Category;

const Sidebar = ({children}) => (
  <div className="col-md-3 left_col">
    <div className="left_col scroll-view">
      {children}
    </div>
  </div>
);

Sidebar.Title = Title;
Sidebar.Profile = Profile;
Sidebar.Footer = Footer;
Sidebar.Menu = Menu;

export default Sidebar;
export { Footer, Menu, Profile, Title };
