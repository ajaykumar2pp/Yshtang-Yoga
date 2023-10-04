import React from "react";

const Contact = () => {
  return (

    <>
     
  
    <div className="promo space-y-6 md:flex lg:flex-row md:justify-center mt-24 mb-24">
        <div className="item flex items-center mx-4  space-x-3 md:flex-col mt-5 p-12 bg-purple-500 border border-purple-200 rounded-lg shadow hover:bg-purple-500 cursor-pointer">
          <i className="bi bi-telephone-fill text-3xl mb-3 text-white"></i>
          <span className="font-medium mx-10 text-center text-white">
            Phone Number <br />
            +91-6003705908
          </span>
        </div>
        <div className="item flex items-center mx-4  space-x-3 md:flex-col  p-12 bg-purple-500 border border-purple-200 rounded-lg shadow hover:bg-purple-500 cursor-pointer">
          <i className="bi bi-envelope-fill text-3xl mb-3 text-white"></i>
          <span className="font-medium mx-10 text-center text-white">
            Email Address <br />
            info@ashtangyoga.com
          </span>
        </div>
        <div className="item flex items-center mx-4  space-x-3 md:flex-col  p-12 bg-purple-500 border border-purple-200 rounded-lg shadow hover:bg-purple-500 cursor-pointer">
          <i className="bi bi-geo-alt-fill text-3xl mb-3 text-white"></i>
          <span className="font-medium mx-10 text-center text-white">
            Address <br />
            Haridwar, Uttarakhand
          </span>
        </div>
      </div>
    </>
   

  );
};

export default Contact;
