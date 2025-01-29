import { FaLinkedin,FaFacebook  ,FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        <FaLinkedin />
        <FaFacebook />
        <FaGithub />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
