//import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';



export default function Header() {

  return (
  <div>
    <div className=' flex flex-row gap-[230px] bg-sl h-[40px] p-3'>
      <div className="logo">HARSH'S blog</div>
      <input type="text" placeholder='search blog' className=' h-[30px] w-[200px] border rounded-md p-2'/>
        <div>
          <ul className="paths flex flex-row gap-[50px]">
            <Link to='/about'><li>About</li></Link>
            <Link to='/posts'><li>Posts</li></Link>
            <Link to='/signup'><li>Signup</li></Link>
          </ul>
        </div>
        <div className="signin">
          <Link to='/signin'><button className='bg-blue-500 text-white h-[30px] rounded-lg w-[80px]'>Sign In</button></Link>
        </div>
        
   </div>
   <br className='bg-slate-900'/>
  </div>
  );
}