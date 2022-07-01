import React from 'react'
export default function Team() {
    return (
        <>
            {/* Team Start */}
            <div className="container-xxl ">
                <div className="container">
                    <div className="text-center wow fadeInUp mb-5" data-wow-delay="0.1s">
                        <h1 className="mb-3">Our Team</h1>
                        <p>Meet our partners and team members with the most prominent stores for you</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-6.jpg" alt="" style={{maxHeight: '55px'}} />
                                </div>
                                <h5 className="mb-0">Tufoin Carissa</h5>
                                <p>CFO at "FINDER"</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="/team"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/team"><i className="fab fa-twitter"></i></a>
                                        <a href="/team"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-5.png" alt="" style={{maxHeight: '55px'}} />
                                </div>
                                <h5 className="mb-0">Delmond Bongha</h5>
                                <p>CEO & Founder at "FINDER"</p>
                                <div className="btn-slide mt-1" >
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="/team"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/team"><i className="fab fa-twitter"></i></a>
                                        <a href="/team"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-3.jpg" alt="" style={{maxHeight: '55px'}} />
                                </div>
                                <h5 className="mb-0">Nfor Nadia</h5>
                                <p>Sales Manager</p>
                                <div className="btn-slide mt-1" >
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="/team"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/team"><i className="fab fa-twitter"></i></a>
                                        <a href="/team"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/team-4.jpg" alt="" style={{maxHeight: '55px'}} />
                                </div>
                                <h5 className="mb-0">Fonki Britney</h5>
                                <p>COO at "FINDER"</p>
                                <div className="btn-slide mt-1" >
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="/team"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/team"><i className="fab fa-twitter"></i></a>
                                        <a href="/team"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}

        </>
    )
}
