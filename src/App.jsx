import React, { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router";


const App = () => {
  const [loading, SetLoading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => {
      SetLoading(false);
    });
  }, []);
if(loading){
  return <div>Loading...</div>

}

return (<>
<div className="min-h-screen flex flex-wrap content-between bg-gray-300">
  <div className="w-full block">
    <Header />
   <main>
    <Outlet />
     
   </main>
    <Footer />

  </div>
</div>

</>)

};


export default App;
