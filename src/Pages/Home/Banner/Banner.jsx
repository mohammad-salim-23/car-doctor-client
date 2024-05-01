
import image1 from "../../../assets/images/homeCarousel/1.jpg"
import image2 from "../../../assets/images/homeCarousel/2.jpg"
import image3 from "../../../assets/images/homeCarousel/3.jpg"
import image4 from "../../../assets/images/homeCarousel/4.jpg"
const Banner = () => {
    return (
        <div>
          <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full" />
    
    <div className="absolute flex items-center gap-4  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
     <div className="space-y-7 w-1/2 pl-12">
        <h2 className="text-6xl font-medium text-white ">Affordable Price For Car Servicing</h2>
        <p className="text-white text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="flex gap-4">
        <button className="btn bg-[#FF3811]">Discovere More</button> 
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image2} className="w-full" />
    <div className="absolute flex items-center gap-4  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
     <div className="space-y-7 w-1/2 pl-12">
        <h2 className="text-6xl font-medium text-white ">Affordable Price For Car Servicing</h2>
        <p className="text-white text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="flex gap-4">
        <button className="btn bg-[#FF3811]">Discovere More</button> 
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image3} className="w-full" />
    <div className="absolute flex items-center gap-4  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
     <div className="space-y-7 w-1/2 pl-12">
        <h2 className="text-6xl font-medium text-white ">Affordable Price For Car Servicing</h2>
        <p className="text-white text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="flex gap-4">
        <button className="btn bg-[#FF3811]">Discovere More</button> 
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image4} className="w-full" />
    <div className="absolute flex items-center gap-4  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
     <div className="space-y-7 w-1/2 pl-12">
        <h2 className="text-6xl font-medium text-white ">Affordable Price For Car Servicing</h2>
        <p className="text-white text-xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className="flex gap-4">
        <button className="btn bg-[#FF3811]">Discovere More</button> 
        <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;