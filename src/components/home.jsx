import { Link } from "react-router-dom";
import './home.css';

export function Home() {

    const handlMenuClick = () =>{
       const navbar=document.querySelector('.navbar');
       navbar.classList.toggle('active');
    }

    return (
        <div>
            <header>
                <div>
                    <Link to='#' className='logo'>WebTecH</Link>
                </div>
                <div className='menuIcon' onClick={handlMenuClick}>&#9776;</div>
                <ul className='navbar'>
                    <li><Link to='#' className='link'>Home</Link></li>
                    <li><Link to='#' className='link'>About</Link></li>
                    <li><Link to='#' className='link'>Programs</Link></li>
                    <li><Link to='#' className='link'>Blogs</Link></li>
                    <li><Link to='#' className='link'>Contact</Link></li>
                </ul>
            </header>
            <div className='bgImage' style={{
                height: "100vh",
                width: "100%",
                backgroundImage: 'url("h1_hero1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            </div>
        </div>
    )
}