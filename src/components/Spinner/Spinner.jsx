import React from 'react';
import './Spinner.css'
const Spinner = () => {
    return (
      <div>
        {/* <div className="flex text-[#007BFF] justify-center items-center h-[calc(100vh-68px)]">
          <p className="text-5xl font-bold ">L</p>
          <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400"></div>
          <p className="text-5xl font-bold ">ading....</p>
        </div> */}
        <div className="flex spinner  justify-center items-center h-[calc(100vh-68px)]">
          {/* spinner 2 */}
          {/* <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div> */}
          <div class="lds-hourglass"></div>
        </div>
      </div>
    );
};

export default Spinner;