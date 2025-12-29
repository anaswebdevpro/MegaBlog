import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/auth';


const LogoutBtn = () => {

    const dispatch = useDispatch();
const logoutHandler =()=>{
     authService.logout()
     .then(()=>{
        dispatch(logout());
     })

}
    return (
    <div>
        <button onClick={logoutHandler} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Logout
        </button>
    </div>
  )
}

export default LogoutBtn