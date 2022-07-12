import React from 'react'

function Carousel() {
  return (
    <>
       {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{maxHeight: '400px'}}>
                            <img className="w-100" src="finder/bg-4.jpg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="" >
                                    <h6 className="section-title text-light text-uppercase mb-2 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="text-white mb-4 animated slideInDown">Find and rent your store online</h1>
                                    <a href="/info" className="btn btn-primary py-3 px-3 me-3 animated slideInLeft">Rent Store</a>
                                    <a href="/info" className="btn btn-primary py-3 px-3 animated slideInRight">Buy Store</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{maxHeight: '400px'}}>
                            <img className="w-100" src="finder/bg-4.jpg" alt="" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="">
                                    <h6 className="section-title text-light text-uppercase mb-2 animated slideInDown">Online Store Rental Platform</h6>
                                    <h1 className="text-white mb-4 animated slideInDown">Online store rental made easy</h1>
                                    <a href="/info" className="btn btn-primary py-3 px-3  me-3 animated slideInLeft">Rent Store</a>
                                    <a href="/info" className="btn btn-primary py-3 px-3 animated slideInRight">Buy Store</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}
    </>
  )
}

export default Carousel
