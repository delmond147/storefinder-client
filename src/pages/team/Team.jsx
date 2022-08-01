import React from "react";
// import team1 from "../../images/team-1.jpg";
// import team2 from "../../images/team-2.jpg";
import team3 from "../../images/team-3.jpg";
import team4 from "../../images/team-4.jpg";
import team5 from "../../images/team-5.png";
import team6 from "../../images/team-6.jpg";

export default function Team() {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container py-5">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="text-secondary text-uppercase">Our Team</h3>
            {/* <h1 class="mb-5">Expert Team Members</h1> */}
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item p-4">
                <div class="overflow-hidden mb-4">
                  <img class="img-fluid" src={team5} alt="fo" />
                </div>
                <h5 class="mb-0">Delmond Bongha</h5>
                <p>Founder & CEO at Dgitech</p>
                <div class="btn-slide mt-1">
                  <i class="fa fa-share"></i>
                  <span>
                    <a href="fo">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="fo">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="fo">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item p-4">
                <div class="overflow-hidden mb-4">
                  <img class="img-fluid" src={team6} alt="fo" />
                </div>
                <h5 class="mb-0">Tufoin Carissa</h5>
                <p>COO at Dgitech</p>
                <div class="btn-slide mt-1">
                  <i class="fa fa-share"></i>
                  <span>
                    <a href="fo">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="fo">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="fo">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="team-item p-4">
                <div class="overflow-hidden mb-4">
                  <img class="img-fluid" src={team3} alt="fo" />
                </div>
                <h5 class="mb-0">Nsom Jamie</h5>
                <p>Projects Manager</p>
                <div class="btn-slide mt-1">
                  <i class="fa fa-share"></i>
                  <span>
                    <a href="fo">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="fo">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="fo">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
              <div class="team-item p-4">
                <div class="overflow-hidden mb-4">
                  <img class="img-fluid" src={team4} alt="fo" />
                </div>
                <h5 class="mb-0">Fonki Bretny</h5>
                <p>CTO at Dgitech</p>
                <div class="btn-slide mt-1">
                  <i class="fa fa-share"></i>
                  <span>
                    <a href="fo">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="fo">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="fo">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
