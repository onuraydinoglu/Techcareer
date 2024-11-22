import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Css/Navbar.css';
import logo from "../Img/logo.svg";

const Navbar = () => {
    return (
        <div>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="bootstrap.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet"/>
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
            <link rel="stylesheet" href="style.css"/>
            <title>Tech Career | HomePage</title>
            <header>
                <div className="container header-container">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{height: '68px'}}>
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="mb-2">
                                <a className="navbar-brand" href="#">
                                    <img src={logo} alt="Arama" />
                                </a>
                            </div>
                            <div className="w-100 d-flex justify-content-space-between align-items-center">
                                <div className="search-wrapper">
                                    <i className="bi bi-search search-icon"/>
                                    <input className="form-control me-2" type="search"
                                           placeholder="Etkinlikler, İş İlanı, Blog Ara" aria-label="Search"
                                           style={{width: '250px'}}/>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-space-center align-items-center">
                                        <li className="nav-item dropdown me-3">
                                            <a className="nav-link dropdown-toggle"
                                               href="https://www.techcareer.net/courses" id="educationDropdown"
                                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <b>Etkinlikler</b>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="educationDropdown">
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/bootcamp">Bootcamp</a></li>
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/hackathon">Hackathon</a></li>
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/hiring-challenge">Hiring
                                                    Challenge</a></li>
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/events">Tüm Etkinlikler</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item me-3 position-relative">
                                            <a className="nav-link job-link" href="https://www.techcareer.net/jobs"><b>İş
                                                İlanları</b></a>
                                            <span className="tooltip-text">
                          Yeni işinle sen de hayalindeki kariyere kavuşabilirsin! <br/>
                          Senin için topladığımız iş fırsatlarını şimdi incele!
                        </span>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link" href="https://www.techcareer.net/courses"><span
                                                className="me-1" style={{color: '#00c26d'}}>●</span><b>Eğitimler</b></a>
                                        </li>
                                        <li className="nav-item dropdown me-3">
                                            <a className="nav-link dropdown-toggle" href="#" id="communityDropdown"
                                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <b>Komünite</b>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="communityDropdown">
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/community">Komüniteye Katıl</a>
                                                </li>
                                                <li><a className="dropdown-item"
                                                       href="https://tr.techcareer.net/community/techcareernet-developer-clubs/?_gl=1*gh5pvp*_gcl_aw*R0NMLjE3MzE1NzIzODAuQ2p3S0NBaUEzTmE1QmhBWkVpd0F6cmZhZ0ppNURIRWljcFo3Nmh3M0pQZmdzQXgwNy1HTk1NeDd6bEtIcWJLRmw4WnFLMkdKblNiSXZob0NIaW9RQXZEX0J3RQ..*_gcl_au*ODMxMDQxODA3LjE3MzE0MDgyOTU.*_ga*MzYxMzMxMTExLjE2OTY5NTU5NTg.*_ga_E0FGSHPKVP*MTczMTY1NzI0Mi4zMi4xLjE3MzE2NTkyNTcuNjAuMC4w*_fplc*R1YxT1QlMkJ3eEdVJTJGUHFJbnpCSnklMkZzNlVZQ2NzeXJ0d2h1ZUJlSTRvNFhxT24xSCUyQlV5SzhjamxnODlkWXp6QnJZdU1QU2I3RUZQWGR3aEpqNEtJUiUyQmlsNVB4YWZtTnhqdHlwQUNvOVVTQiUyQldkeU9LZzBlOWlHWFd4MSUyQiUyQjI4USUzRCUzRA..">TDC</a>
                                                </li>
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/blog">Blog</a></li>
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/podcast">Podcast</a></li>
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/kariyer-rehberi-fikirleri-ve-basamaklari">Kariyer
                                                    Rehberi</a></li>
                                                <li><a className="dropdown-item"
                                                       href="https://www.techcareer.net/dictionary">Teknik Sözlük</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item me-3">
                                            <a className="nav-link"
                                               href="https://www.techcareer.net/sirketler-icin"><b>Şirketler</b></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-success loginbtn" type="submit">Giriş / Üye Ol</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Navbar;