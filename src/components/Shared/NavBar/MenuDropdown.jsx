import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { becomeHost } from "../../../api/auth";
import { Toaster, toast } from "react-hot-toast";
import HostRequestModal from "../../Modal/HostRequestModal";

const MenuDropdown = () => {
  const { user, logOut, role, setRole } = useContext(AuthContext);
  console.log(user);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = (email) => {
    becomeHost(email).then((data) => {
      console.log(data);
      toast.success("You are now a host! Post your rooms!");
      setRole("host");
      closeModal();
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
    <div className="flex flex-row items-center gap-3">
      <div className="hidden md:block px-8">
        {user && !role && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition"
            disabled={!user}
          >
            AirCNC your home
          </button>
        )}
      </div>
      {/* Dropdown btn */}
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <img
            src={
              user && user.photoURL
                ? user.photoURL
                : "https://i.ibb.co/FwG9TmK/placeholder.jpg"
            }
            width="30"
            height="30"
            className="rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
      {isDropdownOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
                <div
                  onClick={() => {
                    setRole(null);
                    logOut();
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <HostRequestModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
      <Toaster />
    </div>
  );
};

export default MenuDropdown;
