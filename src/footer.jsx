import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"; // FontAwesome Icons

function Footer() {
  return (
    <footer className="p-4 bg-background md:p-6 dark:bg-darkBackground">
      <div className="mx-auto max-w-screen-xl ">
        <hr className="my-4 border-gray-200 md:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="md:flex md:items-center justify-items-center md:justify-between">
          <span className="text-sm text-lightText sm:text-center dark:text-darkText">
            © 2024 <a href="#">Saifullah Balghari</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 md:justify-center md:mt-0 text-primary">
            <a href="https://github.com/Saifullah-Balghari" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="https://www.instagram.com/saifullahbalghari/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/Saifullah.BlghaRi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.linkedin.com/in/saifullah-balghari/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
