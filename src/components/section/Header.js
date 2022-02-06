import {NavLink} from 'react-router-dom'

const Header = () =>(
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center"><a href="/"><img alt="logoCupcake" className="main-logo" 
        src="https://image.freepik.com/vector-gratis/plantilla-logotipo-cupcake_59362-45.jpg"/></a></div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav className="main-menu" id="main-menu">
            <ul>
              <li><NavLink to="/">Incio</NavLink></li>
              <li><NavLink to="/cupcake">Productos</NavLink></li>
              <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
)

export default Header