import React, { useState } from 'react'
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import {PiMusicNoteSimple} from 'react-icons/pi';
import { RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';


const links = 
[
  {name: 'Discover', to: '/', icon: HiOutlineHome},
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

function NavLinks() {

  return(
    <div>
      {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row font-medium hover:text-cyan-400 text-white items-center justify-start mt-6 ml-4"
      >
        <item.icon className="w-6 h-6 mr-4" />
        {item.name}
      </NavLink>
    ))}
    </div>
  );
}

function SideBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='md:flex hidden bg-[#191624] w-[240px] py-10 px-4 flex-col'>
        <PiMusicNoteSimple size={50} className='text-white mx-auto mb-6'/>
        <NavLinks />
      </div>

      {/* For Mobile */}
      <div className='absolute md:hidden top-6 right-3 block'>
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-6 h-6 mr-2 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute w-2/3 h-screen z-10 bg-[#191624]  bg-opacity-100 py-10 px-4 ${mobileMenuOpen ? 'flex flex-col' : 'hidden'}`}>
        <PiMusicNoteSimple size={50} className='text-white mx-auto mb-6'/>
        <NavLinks />
      </div>
    </>
  )
}

export default SideBar