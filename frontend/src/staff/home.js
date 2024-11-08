import React, { useState } from "react";
import SideBar from "./sideBar";
import Bg from "../assets/bg.png";
import UserHomeCard from "../components/UserHomeCard";
import {
  MdCreate,
  MdMeetingRoom,
  MdJoinFull,
  MdOutlineStreetview,
} from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import Meeting from "../room/meeting";
import Button from "../components/button";
import axios from "axios";

const Home = () => {
  const [newOpen, setNewOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [meetingOpen, setMeetingOpen] = useState(false);
  const [shedule, setShedule] = useState({
    subject: "",
    roomid: "",
    batch: "",
    date: "",
  });

  const batch = [2022, 2023, 2024];

  const handleNewOpen = () => setNewOpen(!newOpen);
  const handleJoinOpen = () => setJoinOpen(!joinOpen);
  const handleMeetingOpen = () => setMeetingOpen(!meetingOpen);

  const SheduleHanldeChange = (e) =>
    setShedule({ ...shedule, [e.target.name]: e.target.value });

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/createshedule", shedule);
      alert(res.data.message);
      setShedule({
        subject: "",
        roomid: "",
        batch: "",
        date: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  bg-slate-800 min-h-screen">
      <SideBar />
      <div className="text-white lg:ml-60 flex flex-col  items-center lg:mx-10 w-full">
        <p className="text-2xl mt-6 lg:mt-10">Welcome To John Wick</p>

        {/* Time Display */}
        <div className="w-[90%] lg:w-[75vw] h-[40vh] rounded-xl mt-6 lg:mt-10 shadow-2xl bg-gray-700 flex flex-col lg:flex-row justify-between items-center p-6 lg:px-10">
          <div className="text-center lg:text-left">
            <h1 className="bg-slate-500 rounded-lg px-4 py-3 text-2xl mb-5">
              Current Time
            </h1>
            <p className="text-[40px] lg:text-[50px] font-semibold">10:20 AM</p>
            <p className="text-xl">Wednesday, March 27, 2024</p>
          </div>
          <img
            src={Bg}
            alt="Background"
            className="w-full lg:w-[500px] mt-6 lg:mt-0"
          />
        </div>

        {/* Meeting Modals */}
        {newOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md">
            <div className="bg-gray-800 w-11/12 max-w-lg p-8 rounded-xl shadow-2xl space-y-6 transform transition-all duration-300 hover:scale-105">
              <div className="text-white text-center space-y-2">
                <p className="text-2xl font-semibold">
                  Name: <span className="font-normal">Arsath</span>
                </p>
                <p className="text-2xl font-semibold">
                  Course:{" "}
                  <span className="font-normal">B.Sc. Computer Science</span>
                </p>
              </div>
              <Meeting />
              <Button
                onclick={handleNewOpen}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg"
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {joinOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md">
            <div className="bg-gray-800 w-11/12 max-w-lg p-8 rounded-xl shadow-2xl space-y-6 transform transition-all duration-300 hover:scale-105">
              <div className="text-white text-center space-y-2">
                <h1 className="text-2xl font-bold">Join Meeting</h1>
                <p className="text-xl font-semibold">
                  Name: <span className="font-normal">Arsath</span>
                </p>
                <p className="text-xl font-semibold">
                  Course:{" "}
                  <span className="font-normal">B.Sc. Computer Science</span>
                </p>
              </div>
              <Meeting />
              <Button
                onclick={handleJoinOpen}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg"
              >
                Close
              </Button>
            </div>
          </div>
        )}

        {meetingOpen && (
          <form
            onSubmit={hanldeSubmit}
            className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-md"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 w-11/12 max-w-lg p-8 rounded-xl shadow-2xl space-y-8 transform transition-all duration-300 hover:scale-105">
              <div className="text-white text-center">
                <h1 className="text-3xl font-extrabold">Create Meeting</h1>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-lg font-semibold text-gray-300 mb-1">
                    Time & Date
                  </label>
                  <input
                    name="date"
                    value={shedule.date}
                    onChange={SheduleHanldeChange}
                    type="datetime-local"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={shedule.subject}
                    onChange={SheduleHanldeChange}
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                  />
                </div>

                <div>
                  <select
                    name="batch"
                    value={shedule.batch}
                    onChange={SheduleHanldeChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                  >
                    <option value="">Select Batch</option>
                    {batch.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-300 mb-1">
                    Room Id
                  </label>
                  <input
                    name="roomid"
                    value={shedule.roomid}
                    onChange={SheduleHanldeChange}
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button type="submit">Submit</Button>
                <Button
                  onclick={handleMeetingOpen}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg"
                >
                  Close
                </Button>
              </div>
            </div>
          </form>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <UserHomeCard
            onclick={handleNewOpen}
            Icon={MdCreate}
            Title="New Meeting"
            desc="Start an instant Meeting"
            className="bg-orange-700"
          />
          <UserHomeCard
            onclick={handleJoinOpen}
            Icon={MdJoinFull}
            Title="Join Meeting"
            desc="via invitation link"
            className="bg-blue-500"
          />
          <UserHomeCard
            onclick={handleMeetingOpen}
            Icon={RiCalendarScheduleFill}
            Title="Schedule Meeting"
            desc="Plan your meeting"
            className="bg-green-700"
          />
          <UserHomeCard
            Icon={MdOutlineStreetview}
            Title="View Record"
            desc="Meeting Record"
            className="bg-yellow-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
