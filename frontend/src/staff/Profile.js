import React, { useEffect, useState } from "react";
import Sidebar from "./sideBar";
import axios from "axios";
import Img from "../assets/profile.jpg";
import Button from "../components/button";
import Loading from "../components/Loading";

const Profile = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("/stuffgetdata", { withCredentials: true });
        console.log("API response structure:", res.data);
        if (res.data && Array.isArray(res.data.stuff)) {
          setStaff(res.data.stuff);
        } else if (res.data && res.data.stuff) {
          setStaff([res.data.stuff]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Ensure loading stops in all cases
      }
    };
    getdata();
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen flex">
      <Sidebar />
      {loading ? (
        <Loading />
      ) : staff.length > 0 ? (
        staff.map((item) => (
          <div
            key={item.id} // Use unique key if available
            className="flex flex-col w-full items-center py-10 px-5 lg:px-20"
          >
            <div className="flex flex-col items-center">
              <img
                src={Img}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover shadow-lg mb-5"
              />
              <p className="text-4xl font-bold mb-2">{item.name}</p>
              <p className="text-lg text-gray-400 mb-4 text-center">
                Computer Science Student at Trincomalee Campus
              </p>
            </div>

            <div className="w-full lg:w-1/2 bg-slate-800 p-8 rounded-2xl shadow-2xl mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DetailRow label="Name" value={item.name} />
                <DetailRow label="Course" value="Computer Science" />
                <DetailRow label="Email" value={item.email} />
                <DetailRow label="Batch" value="2024" />
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl">
                  Edit
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-lg">No staff data available.</p>
      )}
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center bg-slate-700 p-4 rounded-lg">
    <p className="text-lg font-semibold text-gray-300">{label}</p>
    <p className="text-lg font-medium text-white">{value}</p>
  </div>
);

export default Profile;
