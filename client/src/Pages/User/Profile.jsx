import React from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const userData = useSelector((state) => state?.auth?.data);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex items-center justify-center">
        <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <img
            src={userData?.avatar?.secure_url}
            alt="profile-picture"
            className="w-40 m-auto rounded-full border border-black"
          />
          <h3 className="text-xl font-semibold text-center capitalize">
            {userData?.fullName}
          </h3>
          <div className="grid grid-cols-2">
            <p>Email: </p>
            <p>{userData?.email}</p>
            <p>Role: </p>
            <p>{userData?.role}</p>
            <p>subscription: </p>
            <p>
              {userData?.subscription?.status === "created"
                ? "Active"
                : "Inactive"}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Link
              to="/changePassword"
              className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out rounded-sm font-semibold py-2 cursor-pointer text-center"
            >
              <button>Change Password</button>
            </Link>
            <Link
              to="/user/editprofile"
              className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out rounded-sm font-semibold py-2 cursor-pointer text-center"
            >
              <button>Edit Profile</button>
            </Link>
          </div>
          {userData?.subscription?.status === "created" && (
            <button className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out rounded-sm font-semibold py-2 cursor-pointer text-center">
              Cancel Subscription
            </button>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Profile;
