import pp from '../assets/img/PP.jpeg'

const Profile = () =>{
    return(
        <div className="profile">

            <div className="avatar">
                <img src={pp} alt=""/>
            </div>
            <div className="name">
                <h4><a href="index.html">Jahid Hasan</a></h4>
            </div>

            <div className="social-links text-align-center">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100010894242472" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/jahidbd9x" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

const Nav = () =>{
    return(
        <nav className="nav-menu">
            <ul>
                <li className="active"><a href="#home"><i className="bx bx-home"></i> Home</a></li>
                <li><a href="#about"><i className="bx bx-user"></i> About</a></li>
                <li><a href="#resume"><i className="bx bx-file-blank"></i> Resume</a></li>
                <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                <li><a href="#services"><i className="bx bx-server"></i> Services</a></li>
                <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>
            </ul>
        </nav>
    )
}

const Header = () => {
    return(
        <header id="header">
            <Profile />
            <Nav />
        </header>
    )
}

export default Header;