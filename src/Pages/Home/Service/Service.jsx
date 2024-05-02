import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Service = () => {
  const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res=>res.json())
        .then(data=>{
               setServices(data);
        })
    },[])
    return (
        <div>
           <div className="text-center mt-4 space-y-6">
           <h2 className="text-[#FF3811] text-xl font-bold">Service</h2>
           <h2 className="text-5xl font-bold">Our Service Area</h2> 
           <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

           </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service=><ServicesCard
              key={service._id}
              service={service}
            ></ServicesCard>)
        }

      </div>
        </div>
    );
};

export default Service;