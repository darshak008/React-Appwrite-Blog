import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { LogOut } from "lucide-react";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 text-red-600 font-medium hover:bg-red-200 hover:text-red-700 transition-all duration-300"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </button>
  );
}

export default LogoutBtn;
