import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
          <Link to ='/' className='brand'>React</Link>
          </div>

          <nav className='nav nav-pills'>
            <Link to='/'>Home</Link>
            <Link to='/Products'>Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            
          </nav>

        </div>
      </div>
    </footer>
  )
}

export default Footer;