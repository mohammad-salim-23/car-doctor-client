import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {title,img,price,_id} = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-4" >
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <p className="text-[#FF3811] text-xl">Price: ${price}</p>
    <Link to={`/checkout/${_id}`}>
    <button className="btn font-bold bg-[#FF3811] text-white btn-outline">Buy Now</button>
    </Link>
    
  </div>
</div>
        </div>
    );
};

export default ServicesCard;