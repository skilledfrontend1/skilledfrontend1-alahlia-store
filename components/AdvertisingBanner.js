import Image from 'next/image'
import slide1 from "../public/images/Slider/1.jpg"

const AdvertisingBanner = ()=>{
    return(
        <div className="advertising-banner" >
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-inner" >
                <div className="carousel-item active centerIngImage"  >
                    <Image src={slide1} className="d-block w-100  "  alt="..." style={{width : "100%"}}  />
                </div>
                <div className="carousel-item">
                    <Image src={slide1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <Image src={slide1} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                    <i className="fas fa-chevron-left"></i>
                </span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">
                    <i className="fas fa-chevron-right"></i>
                </span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    
    )
}

export default AdvertisingBanner