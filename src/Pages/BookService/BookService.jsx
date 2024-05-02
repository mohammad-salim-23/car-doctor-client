

const BookService = () => {
    const service = useLoaderData();
  const { title, _id } = service;
    return (
        <div>
               <form className="card-body">
      <div className="grid grid-ols-1 md:grid-cols-2 gap-6">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        
        </div>
      </div>
        <div className="form-control mt-6">
         <input className="btn btn-block btn-outline bg-[#FF3811] text-xl font-bold" type="submit" value="Order Confirm" />
        </div>
      </form>
        </div>
    );
};

export default BookService;
