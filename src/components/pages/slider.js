import React from 'react';
import '../css/eventcss.css'
import s1 from '../../img/s1.png'
import s2 from '../../img/s2.png'
import s3 from '../../img/s3.png'
import s4 from '../../img/s4.png'

function slider() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={s1} class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src={s2} class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src={s3} class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

  );
}

export default slider;
