import { Link } from "react-router-dom";
import './home.css';

export function Home() {

    const handlMenuClick = () => {
        const navbar = document.querySelector('.navbarTag');
        navbar.classList.toggle('active');
    }

    return (
        <div>
            <section>
                <div className="HeadTag">
                    <div className='extra container  p-0 my-0'>
                        <div>
                            <Link to='#' className='logo'>WebTecH</Link>
                        </div>
                        <div className='menuIcon' onClick={handlMenuClick}>&#9776;</div>
                        <ul className='navbarTag'>
                            <li><Link to='#' className='link'>Home</Link></li>
                            <li><Link to='#' className='link'>About</Link></li>
                            <li><Link to='#' className='link'>Blogs</Link></li>
                            <li><Link to='#' className='link'>Contact</Link></li>
                            <li><Link to='#' className='link'>Programs</Link></li>
                        </ul>
                        <ul className='navbarTag'>
                            <li><Link to='#' className='linkIc'><span className='bi bi-instagram fs-4'></span></Link></li>
                            <li><Link to='#' className='linkIc'><span className='bi bi-facebook fs-4'></span></Link></li>
                            <Link to='#' className='linkIc'><span className='bi bi-tweeter fs-4'></span></Link>
                            <li><Link to='#' className='linkIc'><span className='bi bi-youtube fs-4'></span></Link></li>
                            <li><Link to='#' className='linkIc'><span className='bi bi-telegram fs-4'></span></Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            
        </div>
    )
}