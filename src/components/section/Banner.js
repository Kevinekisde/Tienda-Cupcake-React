const Banner = () =>(
    <div className="main-banner img-container dark-color">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2"><img alt ="bannerImg" className="main-banner__img" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFguZ7pY5fq4ExJV7-r3tAsOrvi3YFJOtD5A&usqp=CAU"/>
          <div className="main-banner__data s-center">
            <p className="s-mb-0 t2">Bienvenido A tu tienda de cupcake</p>
            <p>Un sitio lleno de sabor</p>
            <a className="button" href="/cupcake">Comprar cupcake</a>
          </div>
        </div>
      </div>
    </div>

)

export default Banner