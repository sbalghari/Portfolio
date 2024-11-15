import { About, socialLinks } from "./data/index.js"; // Importing socialLinks

function Footer() {
  return (
    <footer className="p-4 bg-transparent md:p-6 dark:bg-transparent">
      <div className="mx-auto max-w-screen-xl">
        <hr className="my-4 border-gray-200 md:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="md:flex md:items-center justify-items-center md:justify-between">
          <span className="text-sm text-lightText sm:text-center dark:text-darkText">
            © 2024 <a href="#">{About.name}</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 md:justify-center md:mt-0 text-primary">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
