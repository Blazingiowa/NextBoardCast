export default function Header(){
    return (
        <>
            <div className="header">
                <div className="header-bar">
                    <div className="brand">
                        <a href="index.html" className="logo"><span className="text-carolina">siQ</span>theme</a>
                        <a href="index.html" className="logo-sm text-carolina" style={{display:'none'}}>siQ</a>
                    </div>
                    <div className="btn-toggle">
                        <a href="#" className="slide-sidebar-btn" style={{display:'none'}}><i className="ti-menu"></i></a>
                    </div>
                    <div className="navigation d-flex">
                        <form className="navbar-search" role="search" method="post" action="#">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="ti-search"></i></div>
                                </div>
                                <input type="text" placeholder="Search for keywords" className="form-control"
                                       name="top-search"
                                       id="top-search"/>
                            </div>
                        </form>
                        <div className="navbar-menu d-flex">
                            <div className="menu-item">
                                <a href="#" className="btn" data-toggle="dropdown">
                                    <i className="ti-bell"></i>
                                    <span className="badge badge-pill badge-danger">3</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right dropdown-alert">
                                    <li className="dropdown-header text-center"><a href="#"><i
                                        className="ti-comment-alt"></i> View
                                        All Alerts <i className="ti-angle-right"></i></a></li>
                                    <li><a href="#"><i className="fa fa-user"></i> New user
                                        registered <span>Just now</span></a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-calendar-plus-o"></i> New event created <span>5 min
                                            ago</span></a></li>
                                    <li><a href="#"><i className="fa fa-area-chart"></i> Report ready to download <span>1 day
                                            ago</span></a></li>
                                    <li><a href="#"><i className="fa fa-bank"></i> Bill payment reminder <span>1 day
                                            ago</span></a></li>
                                    <li><a href="#"><i className="fa fa-clock-o"></i> Staff
                                        meeting <span>3 days ago</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-item">
                                <a href="#" className="btn" data-toggle="dropdown">
                                    <i className="ti-email"></i>
                                    <span className="badge badge-pill badge-success">7</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right dropdown-message">
                                    <li className="dropdown-header text-center"><a href="#"><i
                                        className="ti-comments"></i> View All
                                        Messages <i className="ti-angle-right"></i></a></li>
                                    <li>
                                        <img src="assets/img/profile/profile-04.jpg"/>
                                            <div className="message-row">
                                                <small>24h ago</small>
                                                <a href="#"><span className="message-user">Pear Appleton</span><br/>
                                                    Staff meeting on Tuesday at 4PM, remember to set date</a>
                                            </div>
                                    </li>
                                    <li>
                                        <img src="assets/img/profile/profile-07.jpg"/>
                                            <div className="message-row">
                                                <small>2h ago</small>
                                                <a href="#"><span className="message-user">siQuang Humbleman</span><br/>
                                                    RE: Remember to generate PNL for October</a>
                                            </div>
                                    </li>
                                    <li>
                                        <img src="assets/img/profile/profile-06.jpg"/>
                                            <div className="message-row">
                                                <small>3d ago</small>
                                                <a href="#"><span className="message-user">Lemony Tang</span><br/>
                                                    Appointment with lawyer, better call Saul!</a>
                                            </div>
                                    </li>
                                    <li>
                                        <img src="assets/img/profile/profile-07.jpg"/>
                                            <div className="message-row">
                                                <small>4d ago</small>
                                                <a href="#"><span className="message-user">siQuang Humbleman</span><br/>
                                                    Theme designed by siQuang for siQthemes</a>
                                            </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-item">
                                <a href="#" className="btn right-sidebar-toggle"><i className="ti-user"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}