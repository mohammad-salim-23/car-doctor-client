import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'

const OurProducts = () => {
    return (
        <div className="space-y-5">
            <h2 className="text-xl font-bold text-[#FF3811]text-center">Popular Products</h2>
            <h3 className="text-3xl font-bold text-center">Browse Our Products</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div>
                <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="rating flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
  <div className="card-body">
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='font-bold text-[#FF3811]'>$20.00</p>
    
  </div>
</div>
                </div>
                <div>  <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="rating flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
  <div className="card-body">
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='font-bold text-[#FF3811]'>$20.00</p>
    
  </div>
</div></div>
                <div> 
                     <div className="card bg-base-100 shadow-xl">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className="rating flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
  <div className="card-body">
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='font-bold text-[#FF3811]'>$20.00</p>
    
  </div>
</div></div>
                <div> 
                     <div className="card bg-base-100 shadow-xl">
  <figure><img src={img4} alt="Shoes" /></figure>
  <div className="rating flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
  <div className="card-body">
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='font-bold text-[#FF3811]'>$20.00</p>
    
  </div>
</div></div>
                <div> 
                     <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img5} alt="Shoes" /></figure>
  <div className="rating flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
  <div className="card-body">
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='font-bold text-[#FF3811]'>$20.00</p>
    
  </div>
</div></div>
                <div>  
                    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img6} alt="Shoes" /></figure>
  <div className="rating flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
  <div className="card-body">
    <h2 className="card-title">Car Engine Plug</h2>
    <p className='font-bold text-[#FF3811]'>$20.00</p>
    
  </div>
</div></div>
            </div>
        </div>
    );
};

export default OurProducts;