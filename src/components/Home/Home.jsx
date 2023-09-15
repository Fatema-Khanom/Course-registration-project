import Cart from "../Cart/Cart";

const Home = () => {
    return (
        <div className="w-10/12 m-auto">
      <div className="grid">
        <div className="grid grid-cols-3 gap-6">
          
            <div  className="w-[250px] h-[330px] bg-white shadow-lg rounded-lg ">
              <div className="card-img">
                <img className="photo" src="" alt="" />
              </div>
             <div className="p-2 m-2">
             <h2 className="text-xl font-bold">fhjdbvhdgyfghbdc</h2>
              <p>
                <small className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, iure?
                </small>
              </p>
              <div className="flex gap-[4px] ">
                <img src="./public/images/dollar-sign 1.png" alt="" />
                <p className="font-semibold">Price:23000 </p>
                <img src="./public/images/Frame.png" alt="" />
                <p className="font-semibold">Credit:3 </p>
              </div>
              <button className="bg-blue-600 rounded mt-4 w-[100%]">Select</button>
             </div>
              
            </div>
        
        </div>
        <div className="cart">
          <Cart
            
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;