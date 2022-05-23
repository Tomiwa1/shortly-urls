import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import work from './images/work.svg';
import axios from 'axios';

function App() {
  // const [shortly, setShortly] = useState({});
  const [value, setValue] = useState('');

  // const shorten = async () => {
  //   const {
  //     apiCall: { data }
  //   } = await axios.post(
  //     'https://api.rebrandly.com/v1/links?apikey=7f0741c75ac549159aac4fc715c6db7d',
  //     {
  //       params: {
  //         destination: value,
  //         domain: { fullName: 'rebrand.ly' }
  //       }
  //     }
  //   );
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    // shorten();
  };
  return (
    <div className="App bg-slate-50">
      <Navbar />
      <div className="mt-7 md:items-center flex flex-col-reverse  md:flex-row ">
        <div className="md:mb-10 px-20 md:px-3  ">
          <span className="text-6xl md:text-8xl text-slate-900 font-bold">
            More than just shorter links
          </span>
          <p className="text-slate-400 font-bold mt-3 px-1 ">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="bg-cyan-400 text-slate-100 rounded-full border-2 mt-5 px-20 py-5 p-1">
            Get Started
          </button>
        </div>
        <div className="flex md:justify-end ml-3">
          <img src={work} alt="" />
        </div>
      </div>
      <div className=" mt-5">
        <div className="bg-indigo-900 flex justify-center rounded-md flex items-center  flex-col  md:flex-row ">
          <form
            className="md:mx-20 w-3/4 h-30 ml-2 md:h-24 md:w-3/4 md:ml-44 ml-16"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              placeholder="  Shorten a link here..."
              className="mt-3 h-10 rounded-md py-5 w-72 md:h-11 md:w-3/4"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="bg-cyan-400 md:ml-4 md:px-4 md:px-6 md:w-48 text-slate-100 rounded-md md:mt-7  md:h-11 w-72 py-2 mt-3 mb-3 md:mb-4">
              Shorten It!
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
