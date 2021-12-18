import { Link } from '@reach/router';
import pp from '../../assets/img/PP.jpeg'

const Layout = (props) => {
    return(
        <>
            <header id="header">
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
                                <a href=''><i className="fa fa-facebook" aria-hidden="true"></i></a>
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

                <nav className="nav-menu">
                <ul>
                    <li className="active"><a ><i className="bx bx-home"></i> <Link to='/' > Home </Link> </a></li>
                    <li><a href="#about"><i className="bx bx-user"></i> About</a></li>
                    <li><a href="#resume"><i className="bx bx-file-blank"></i> Resume</a></li>
                    <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                    <li><a href="#services"><i className="bx bx-server"></i> Services</a></li>
                    <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>
                </ul>
            </nav>
            </header>

            <main className='main'>
                {props.children}
            </main>
            <a href="#home" className="back-to-top"><i class="icofont-simple-up"></i></a>
        </>
       
    )
}

export default Layout;