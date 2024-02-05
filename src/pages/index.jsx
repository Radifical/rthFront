import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);
  
  const loadStudents = async () => {
    try {
      const response = await axios.get('https://rthbackend.onrender.com/users');
      setStudents(response.data.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };



  return (
    <div className="min-h-screen p-5" style={{ background: 'linear-gradient(to right, #141414, #222222)' }}>
      <h1 className="text-3xl font-bold text-white mb-5">RTH Dashboard 📋</h1>
      
      {/* Stats and Actions Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {/* Student count card */}
        <div className="bg-white rounded-lg p-5 shadow-lg flex items-center hover:shadow-md transition duration-300 ease-in-out hover:border hover:border-blue-500 cursor-pointer" style={{ backgroundColor: 'rgba(36, 36, 62, 0.2)' }}>
          <i className="fas fa-users text-4xl text-orange-500"></i>
          <div className="flex flex-col items-start mb-1 p-2">
               <p className="text-l text-white">Students</p>
            <p className="text-xl text-gray-400 font-bold mb-1">{students.length}</p>

               <Link to={`/manager`}>
                  <button className="text-xl bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded transition duration-300 ease-in-out">
                      +
                     </button>
               </Link>
              </div>

        </div>


      </div>



      </div>

  );
}

export default Home;
