import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='h1'>Welcome to Limray Library</h1>
          <p className='p'>Manage your books with ease!</p>
          <div className="tg">
          <button className='btn btn-primary m-3'><Link to={`/dashboard`}>Dashboard</Link></button>
          </div>
          <img className='w-2/4' src='https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png'/>
        </div>
      </div>
    </div>
  );
};

export default Home;
