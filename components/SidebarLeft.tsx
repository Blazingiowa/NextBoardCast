import Link from "next/link";

export default function SidebarLeft(){
    return (
        <div id="sidebar" className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-menu">
                    <ul>
                        <li className="header-menu">
                            Categories
                        </li>
                        <li className="active">
                            <Link href={'/'}>
                                <i className="ti-dashboard"></i>
                                <span className="menu-text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="maincat ">
                            <a href="#">
                                <i className="ti-plug"></i>
                                <span className="menu-text">Components</span>
                            </a>
                            <div className="subcat">
                                <ul>
                                    <li>
                                        <a href="cp_datetime.html">Date & Time</a>
                                    </li>
                                    <li>
                                        <a href="cp_bstoggle.html">Bootstrap Toggle</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="maincat ">
                            <a href="#">
                                <i className="ti-palette"></i>
                                <span className="menu-text">UI Elements</span>
                            </a>
                            <div className="subcat">
                                <ul>
                                    <li>
                                        <a href="ui_typography.html">Typography</a>
                                    </li>
                                    <li>
                                        <a href="ui_colors.html">Colors</a>
                                    </li>
                                    <li>
                                        <a href="ui_fontawesome.html">Fontawesome Icons</a>
                                    </li>
                                    <li>
                                        <a href="ui_themify.html">Themify Icons</a>
                                    </li>
                                    <li>
                                        <a href="ui_buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="ui_cards.html">Cards</a>
                                    </li>
                                    <li>
                                        <a href="ui_modals.html">Modals</a>
                                    </li>
                                    <li>
                                        <a href="ui_toastr.html">Toastr Notifications</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="maincat ">
                            <a href="#">
                                <i className="ti-layout-grid2"></i>
                                <span className="menu-text">Tables</span>
                            </a>
                            <div className="subcat">
                                <ul>
                                    <li>
                                        <a href="tb_basic.html">Basic Tables</a>
                                    </li>
                                    <li>
                                        <a href="tb_datatables.html">Datatables</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="maincat ">
                            <a href="#">
                                <i className="ti-write"></i>
                                <span className="menu-text">Forms</span>
                            </a>
                            <div className="subcat">
                                <ul>
                                    <li>
                                        <a href="fm_control.html">Form Control</a>
                                    </li>
                                    <li className="tier1 ">
                                        <a href="#"><span className="menu-text">CKEditor</span></a>
                                        <div className="subcat">
                                            <ul>
                                                <li>
                                                    <a href="fm_ckeditor_inline.html">Inline</a>
                                                </li>
                                                <li>
                                                    <a href="fm_ckeditor_classic.html">Classic</a>
                                                </li>
                                                <li>
                                                    <a href="fm_ckeditor_balloon.html">Balloon</a>
                                                </li>
                                                <li>
                                                    <a href="fm_ckeditor_block.html">Balloon Block</a>
                                                </li>
                                                <li>
                                                    <a href="fm_ckeditor_document.html">Document</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="maincat ">
                            <a href="#">
                                <i className="ti-bar-chart"></i>
                                <span className="menu-text">Charts</span>
                            </a>
                            <div className="subcat">
                                <ul>
                                    <li>
                                        <a href="ch_apexcharts.html">Apex Charts</a>
                                    </li>
                                    <li>
                                        <a href="#">amCharts</a>
                                    </li>
                                    <li>
                                        <a href="#">Morris Charts</a>
                                    </li>
                                    <li>
                                        <a href="#">Flot Charts</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="header-menu">
                            Extra
                        </li>
                        <li className="maincat ">
                            <a href="#">
                                <i className="ti-file"></i>
                                <span className="menu-text">Pages</span>
                            </a>
                            <div className="subcat">
                                <ul>
                                    <li>
                                        <a href="pg_login.html" target="_blank">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="maincat">
                            <a href="#">
                                <i className="ti-layers-alt"></i>
                                <span className="menu-text">Multi-Levels Menu</span>
                            </a>
                            <div className="subcat">
                                <ul>
                                    <li className="tier1">
                                        <a href="#">Tier 1</a>
                                        <div className="subcat">
                                            <ul>
                                                <li><a href="#">Level 2</a></li>
                                                <li><a href="#">Level 2</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Submenu</a>
                                    </li>
                                    <li>
                                        <a href="#">Submenu</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="">
                            <a href="documentation.html">
                                <i className="ti-agenda"></i>
                                <span className="menu-text">Documentation</span>
                                <span className="badge badge-pill badge-primary">New</span>
                            </a>
                        </li>
                        <li className="">
                            <a href="ex_calendar.html">
                                <i className="ti-calendar"></i>
                                <span className="menu-text">Calendar</span>
                                <span className="badge badge-pill badge-primary">New</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/siQuang/siqtheme">
                                <i className="ti-github"></i>
                                <span className="menu-text">Github/siQtheme</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}