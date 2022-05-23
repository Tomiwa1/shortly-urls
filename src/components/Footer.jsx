import React from 'react';
import './style.css';
import brand from '../images/brand.svg';
import detailed from '../images/detailed.svg';
import customize from '../images/customize.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import pinterest from '../images/pinterest.svg';
import instagram from '../images/instagram.svg';

function Footer() {
  return (
    <div className="bg-gray-100" style={{ marginTop: '-120px' }}>
      <div className="mt-10 md:mt-36 flex flex-col items-center">
        <h1 className="text-4xl text-slate-900 font-bold flex justify-center mt-52 md:mt-28">
          Advanced Statistics
        </h1>
        <p className="flex justify-center max-w-sm md:max-w-xl text-center text-slate-500 mt-4 md:mt-5">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex items-center flex-col md:flex-row md:pl-40 h-fit text-center">
        <div className="bg-white  w-96 h-60 p-4 mt-40">
          <img
            src={brand}
            alt=""
            className="p-3 rounded-full bg-purple-900 ml-36 md:ml-0"
            style={{ marginTop: '-44px' }}
          />
          <h1 className="text-xl text-slate-900 mt-2 mb-4">
            Brand Recognition
          </h1>
          <p className="text-slate-500">
            Boost your brand recognition with each click.Generic links don't
            mean a thing Branded links help until confidence in your content
          </p>
        </div>
        <div className="bg-cyan-400 h-10 w-2 md:w-7 md:h-1"></div>
        <div className="bg-white w-96 h-60 p-4 md:mt-24">
          <img
            src={detailed}
            alt=""
            className="p-3 rounded-full bg-purple-900  mb-4 ml-36 md:ml-0"
            style={{ marginTop: '-44px' }}
          />
          <h1 className="text-xl text-slate-900 mt-2 mb-4">Detailed Records</h1>
          <p className="text-slate-500">
            Gain insights into who is clicking your links.Knowing when and where
            people engage with your content helps inform better decisions
          </p>
        </div>
        <div className="bg-cyan-400 h-10 w-2 md:w-7 md:h-1"></div>
        <div className="bg-white w-96 h-60 p-4  md:mt-44">
          <img
            src={customize}
            alt=""
            className="p-3 rounded-full bg-purple-900  mb-4 ml-36 md:ml-0"
            style={{ marginTop: '-44px' }}
          />
          <h5 className="text-xl text-slate-900 mt-2 mb-4">
            Fully Customizable
          </h5>
          <p className="text-slate-500">
            Improve brand awareness and content discoverability through
            customizable links. Supercharging audience engagement
          </p>
        </div>
      </div>
      <div className="bg-violet-900 min-w-full h-48 pt-10 mt-40">
        <h1 className="text-4xl text-white font-bold px-10  items-center  flex md:justify-center">
          Boost your links today
        </h1>
        <div className="flex justify-center">
          <button className="bg-cyan-400  rounded-full border-2 mt-5 px-20 py-5 p-1">
            Get Started
          </button>
        </div>
      </div>
      <footer className=" bg-zinc-900 min-w-screen h-fit" id="foot">
        <div className="container flex flex-col md:flex-row flex-wrap justify-around items-center">
          <ul className="">
            <div className="mt-10">
              <span
                className="self-center text-4xl text-white font-bold whitespace-nowrap mr-16 md:ml-44
              "
              >
                Shortly
              </span>
            </div>
          </ul>
          <ul className=" font-semibold mr-7">
            <li className="mt-10  mb-4">
              <span className="text-white">Features</span>
            </li>
            <li className="text-slate-400">Link Shortening</li>
            <li className="text-slate-400">Branded Links</li>
            <li className="text-slate-400">Analytics</li>
          </ul>
          <ul className=" font-semibold mr-7">
            <li className="mt-10  mb-4 mr-10">
              <span className="text-white">Resources</span>
            </li>
            <li className="text-slate-400">Blog</li>
            <li className="text-slate-400">Developers</li>
            <li className="text-slate-400">Support</li>
          </ul>
          <ul className=" font-semibold mr-7">
            <li className="mt-16  mb-4 mr-10">
              <span className="text-white ">Company</span>
            </li>
            <li className="text-slate-400">About</li>
            <li className="text-slate-400">Our Team</li>
            <li className="text-slate-400">Careers</li>
            <li className="text-slate-400">Contact</li>
          </ul>
          <div className="mt-4 p-1 md:flex justify-end">
            <ul className="flex   md:flex-row md:mb-10">
              <li className="p-4">
                <img src={facebook} alt="" />
              </li>
              <li className="p-4">
                <img src={twitter} alt="" />
              </li>
              <li className="p-4">
                <img src={pinterest} alt="" />
              </li>
              <li className="p-4">
                <img src={instagram} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
