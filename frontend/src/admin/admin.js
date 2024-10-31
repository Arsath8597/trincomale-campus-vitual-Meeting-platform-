import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useDispatch } from "react-redux";
import { usergetRequest, usergetSuccess } from "../reducers/AdminReducer";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { IoMdAddCircle } from "react-icons/io";

const User = () => {
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",

    role: "",
  });
  const [open, setOpen] = useState(false);

  const courses = [
    "Computer Science",
    "Business Management",
    "Engineering",
    "Arts",
  ];
  const batch = [2024, 2023, 2022];
  const UserHandleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/adminRegister", userData);
      alert(res.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const { isAuthendicated, loading } = useSelector((state) => state.adminState);

  const getUserData = async () => {
    try {
      // Call the action creator with parentheses
      dispatch(usergetRequest());

      // Make the API call
      const { data } = await axios.get("/admingetalldata");

      // Dispatch success with fetched data
      dispatch(usergetSuccess(data.data));

      setUser(data.data);
      console.log(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // delete User
  const deleteUser = async (id) => {
    try {
      await axios.delete(`/admindeletedata/${id}`);
      setUser(user.filter((u) => u._id !== id));
      alert("user Deleted");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setUpdatedData(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const saveUpdate = async (id) => {
    try {
      await axios.put(`/adminupdatedata/${id}`, updatedData);
      const updateUsers = user.map((u) =>
        u._id === id ? { ...u, ...updatedData } : u
      );
      setUser(updateUsers);
      setEditUser(null);
      alert("user Data succesfully updated");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  console.log(loading);
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className=" bg-[#020617] text-white w-full px-10 h-full">
        <h1 className="text-center text-2xl font-semibold mt-10">
          Student Information
        </h1>
        {open && (
          <div className="absolute inset-0 flex justify-center items-center backdrop-blur-xl">
            <form
              className="flex w-[400px] h-[300px] flex-col"
              onSubmit={hanldeSubmit}
            >
              <h2 className="text-center mb-4">Student Register</h2>
              <div className="flex flex-col space-y-2">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={userData.name}
                  onChange={UserHandleChange}
                  required
                  className="p-2 border border-gray-300 rounded text-black"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={UserHandleChange}
                  required
                  className="p-2 border border-gray-300 rounded text-black"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={UserHandleChange}
                  required
                  className="p-2 border  border-gray-300 rounded text-black"
                />
                <input
                  name="role"
                  type="text"
                  placeholder="Role"
                  value={userData.role}
                  onChange={UserHandleChange}
                  required
                  className="p-2 border border-gray-300 rounded text-black"
                />

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="mt-4 p-2 px-6 bg-blue-500 text-black rounded hover:bg-blue-600"
                  >
                    Submit
                  </button>
                  <button
                    className="mt-4 p-2 px-6 bg-red-400 text-black rounded hover:bg-blue-600"
                    onClick={handleOpen}
                  >
                    Close
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        <div
          onClick={handleOpen}
          className="text-xl cursor-pointer w-52 shadow-xl bg-slate-600 justify-center items-center rounded-lg h-20 font-semibold flex gap-2"
        >
          <h1>Add Student</h1>
          <IoMdAddCircle size={30} />
        </div>

        <div className="h-[100vh] mt-10">
          <div className="grid grid-cols-1  items-center  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && (
              <div className="absolute right-0 left-0 items-center">
                <Loading />
              </div>
            )}

            {user.map((User, index) => (
              <div
                key={index}
                className="bg-slate-700 text-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300"
              >
                {editUser?._id === User._id ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={updatedData.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mb-2"
                    />
                    <input
                      type="email"
                      name="email"
                      value={updatedData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mb-2"
                    />

                    <input
                      type="text"
                      name="role"
                      value={updatedData.role}
                      onChange={handleChange}
                      className="w-full p-2 border rounded mb-2"
                    />
                    <button
                      onClick={() => saveUpdate(User._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="  mb-2 flex justify-between  text-white">
                      <span className="font-semibold">Name:</span> {User.name}
                    </h2>
                    <p className="flex justify-between my-3">
                      <span className="font-semibold">Email:</span> {User.email}
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold">Role:</span> {User.role}
                    </p>
                    <div className="flex justify-between mt-5">
                      <MdDelete
                        size={30}
                        color="red"
                        onClick={() => deleteUser(User._id)}
                      />
                      <MdEdit
                        size={30}
                        color="green"
                        onClick={() => handleEdit(User)}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
