// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { FiSearch } from "react-icons/fi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { CgProfile } from "react-icons/cg";
// import { MdWhatshot } from "react-icons/md";
// import { GiFamilyHouse } from "react-icons/gi";
// import { MdBedroomParent } from "react-icons/md";
// import { MdOutlinePool } from "react-icons/md";
// import { GiWoodCabin } from "react-icons/gi";
// import { SiHomeassistantcommunitystore } from "react-icons/si";
// import { IoBedOutline } from "react-icons/io5";
// import { FaTreeCity } from "react-icons/fa6";
// import { BiBuildingHouse } from "react-icons/bi";
// import { BsPersonFillLock } from "react-icons/bs";




// const Nav = () => {
//     let [showpopup, setShowpopup] = useState(false);
//   return (
//     <div>
//       <div className="w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] px-[40px] flex items-center justify-between">
//         <div>
//           <img src={logo} alt="" className="w-[120px]" />
//         </div>

//         <div className="w-[35%] relative hidden md:block">
          
//           <input
//             type="text"
//             placeholder="Any Where | Any Location | Any City"
//             className="w-full px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-full text-[17px]"
//           />

//           {/* Search Button */}
//           <button className="absolute p-[10px] bg-red-500 rounded-full right-[3%] top-1/2 transform -translate-y-1/2">
//             <FiSearch className="w-[20px] h-[20px] text-white" />
//           </button>
//         </div>

//         <div className="flex items-center justify-center gap-[10px] relative">
//           <span className="text-[18px] cursor-pointer rounded-[50px] hover:bg-[#ded9d9] px-[8px] py-[5px] hidden md:block">List your home</span>
//           <button className="px-[20px] py-[10px] flex items-center justify-center gap-[5px] border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg" onClick={()=>setShowpopup(prev=>!prev)}>
//             <span><GiHamburgerMenu className="w-[20px] h-[20px]" /></span>
//             <span><CgProfile className="w-[23px] h-[23px]"/></span>
//           </button>

//            {showpopup && <div className="w-[200px] h-[250px] absolute bg-slate-50 top-[110%] right-[10%] border-[1px] border-[#aaa9a9] z-10 rounded-lg">
//                <ul  className="w-[100%]  h-[100%] text-[17px] flex items-center justify-around flex-col py-[10px]">
//                  <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">Login</li>
//                  <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">Logout</li>
//                  <div className="w-[100%] h-[1px] bg-[#c1c0c0]"></div>
//                  <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">List your Home</li>
//                  <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">My Listing</li>
//                  <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">Check Booking</li>
//                </ul>
//             </div>}
            
         
//         </div>
//       </div>

//         <div className="w-[100vw] h-[85px] bg-white flex items-center justify-center cursor-pointer gap-[40px]">
//             <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <MdWhatshot className="w-[30px] h-[30px] text-black"/>
//                 <h3>Trending</h3>
//             </div>

//             <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <GiFamilyHouse className="w-[30px] h-[30px] text-black"/>
//                 <h3>Villa</h3>
//            </div>

//            <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <MdBedroomParent className="w-[30px] h-[30px] text-black"/>
//                 <h3>Rooms</h3>
//            </div>

//            <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <MdOutlinePool className="w-[30px] h-[30px] text-black"/>
//                 <h3>Pool House</h3>
//            </div>

//            <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <GiWoodCabin className="w-[30px] h-[30px] text-black"/>
//                 <h3>Cabins</h3>
//            </div>

//            <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <SiHomeassistantcommunitystore className="w-[30px] h-[30px] text-black"/>
//                 <h3>Shops</h3>
//            </div>

//            <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <IoBedOutline className="w-[30px] h-[30px] text-black"/>
//                 <h3>PG</h3>
//            </div>

//            <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <FaTreeCity className="w-[30px] h-[30px] text-black"/>
//                 <h3>Farm house</h3>
//            </div>

//            <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <BiBuildingHouse className="w-[30px] h-[30px] text-black"/>
//                 <h3>Flat</h3>
//            </div>

//            <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]">
//                 <BsPersonFillLock className="w-[30px] h-[30px] text-black"/>
//                 <h3>Security</h3>
//            </div>

//         </div>
//     </div>
//   );
// };

// export default Nav;





import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu, GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot, MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { BsPersonFillLock } from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import { authDataContext } from "../Context/AuthContext";
import axios from "axios"
import { userDataContext } from "../Context/UserContext";

const Nav = () => {
  const [showpopup, setShowpopup] = useState(false);
  let {userData, setUserData} = useContext(userDataContext)
  let navigate = useNavigate()
  let {serverUrl} =useContext(authDataContext)
  

  const handleLogOut = async ()=>{
    try {
      let result = await axios.post(serverUrl + "/api/auth/logout",{withCredentials:true})
      setUserData(null)
      console.log(result);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="w-full min-h-[80px] border-b border-[#dcdcdc] px-[20px] md:px-[40px] flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
        <div>
          <img src={logo} alt="" className="w-[120px]" />
        </div>

        <div className="w-full md:w-[35%] relative">
          <input
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className="w-full px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-full text-[17px]"
          />
          <button className="absolute p-[10px] bg-red-500 rounded-full right-[3%] top-1/2 transform -translate-y-1/2">
            <FiSearch className="w-[20px] h-[20px] text-white" />
          </button>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-[10px] relative">
          <span className="text-[16px] md:text-[18px] cursor-pointer rounded-full hover:bg-[#ded9d9] px-[8px] py-[5px]">
            List your home
          </span>
          <button
            className="px-[20px] py-[10px] flex items-center justify-center gap-[5px] border border-[#8d8c8c] rounded-full hover:shadow-lg"
            onClick={() => setShowpopup((prev) => !prev)}
          >
            <span><GiHamburgerMenu className="w-[20px] h-[20px]" /></span>
            {userData==null && <span><CgProfile className="w-[23px] h-[23px]" /></span>}

            {/* {userData!==null && <span className="w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center">{userData?.name.slice(0,1)}</span>} */}

            {userData!==null && <span className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center text-[14px] font-medium">
            {userData?.name.charAt(0).toUpperCase()}
</span>
}
          </button>

          {showpopup && (
            <div className="w-[200px] h-[250px] absolute bg-slate-50 top-[110%] right-[0] md:right-[10%] border border-[#aaa9a9] z-10 rounded-lg">
              <ul className="w-full h-full text-[17px] flex items-center justify-around flex-col py-[10px]">
                <li className="w-full px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer" onClick={()=>navigate("/login")}>
                  Login
                </li>
                <li className="w-full px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer"  onClick={handleLogOut}>
                  Logout
                </li>
                <div className="w-full h-[1px] bg-[#c1c0c0]"></div>
                <li className="w-full px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  List your Home
                </li>
                <li className="w-full px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  My Listing
                </li>
                <li className="w-full px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  Check Booking
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-auto md:h-[85px] bg-white flex items-center justify-start md:justify-center overflow-x-auto md:overflow-visible gap-[30px] px-[20px] py-[10px] md:py-0">
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <MdWhatshot className="w-[30px] h-[30px] text-black" />
          <h3>Trending</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <GiFamilyHouse className="w-[30px] h-[30px] text-black" />
          <h3>Villa</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <MdBedroomParent className="w-[30px] h-[30px] text-black" />
          <h3>Rooms</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <MdOutlinePool className="w-[30px] h-[30px] text-black" />
          <h3>Pool House</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <GiWoodCabin className="w-[30px] h-[30px] text-black" />
          <h3>Cabins</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <SiHomeassistantcommunitystore className="w-[30px] h-[30px] text-black" />
          <h3>Shops</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <IoBedOutline className="w-[30px] h-[30px] text-black" />
          <h3>PG</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <FaTreeCity className="w-[30px] h-[30px] text-black" />
          <h3>Farm house</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <BiBuildingHouse className="w-[30px] h-[30px] text-black" />
          <h3>Flat</h3>
        </div>

        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] min-w-[60px]">
          <BsPersonFillLock className="w-[30px] h-[30px] text-black" />
          <h3>Security</h3>
        </div>
      </div>
    </div>
  );
};

export default Nav;
