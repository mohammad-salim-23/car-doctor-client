

const BookingRow = ({booking,handleDelete,handleBookingConfirm,status}) => {
    const {img,customerName,service,price,date,email,_id} = booking;
    console.log(status)
    
    return (
        <div>
             <tr>
        <th>
        
        <button onClick={()=>handleDelete(_id)}  className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>

         
        </th>
        <td>
        <div className="avatar ml-3">
              <div className="rounded-full w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
         {service}
        </td>
        <td>
        {email}
        </td>
        <td>{date}</td>
        <td>{price}</td>

        <th>
          {
            status==='confirm'? <span className="font-bold text-[#FF3801]" >Confimed</span> :
            <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
          }
        </th>
      </tr>
     
        </div>
    );
};

export default BookingRow;