import '../App.css';
import logo from '../asset/logo-white.png'

function navbar() {
    return (
        <div>
            <ul className='nav'>
                <li><img className='logo' src={logo}/></li>
                <li className='navlist'>Home</li>
                <li className='navlist'>About</li>
                <li className='navlist'>Experince</li>
                <li className='navlist'>Contact</li>
            </ul>
        </div>
    )
}

export default navbar;