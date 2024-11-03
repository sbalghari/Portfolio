import { useEffect, useState, useMemo } from "react";
import ProfilePic from "../../assets/pic1.png";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function HomeSection() {
  {
    /* Constants */
  }
  const [typingText, setTypingText] = useState("");
  const [blink, setBlink] = useState(true);
  const typingSpeed = 200;
  const wordDelay = 1500;

  const words = useMemo(
    () => [
      "a Full-Stack Developer",
      "a College Student",
      "an Aspiring ML Engineer",
    ],
    []
  );

  {
    /* Blinking Effect */
  }
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prevBlink) => !prevBlink);
    }, 1000);

    return () => clearInterval(blinkInterval);
  }, []);

  {
    /* Typewriter Logic */
  }
  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      setTypingText(currentWord.slice(0, letterIndex));

      if (!isDeleting && letterIndex < currentWord.length) {
        letterIndex++;
      } else if (isDeleting && letterIndex > 0) {
        letterIndex--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    };

    const delayTimeout = setTimeout(type, wordDelay);

    return () => clearTimeout(delayTimeout);
  }, [words, typingSpeed, wordDelay]);

  return (
    <section className="p-2 sm:p-4 md:p-6 lg:p-12 h-screen bg-transparent dark:bg-transparent flex items-center justify-center font-sans">
      <div className="items-center mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div
          className="relative mx-auto w-80 h-80 sm:h-96 sm:w-96 rounded-full overflow-hidden"
          onMouseMove={(e) => {
            const container = e.currentTarget;
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 20;
            const y = (e.clientY - rect.top - rect.height / 2) / 20;
            container.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
          }}
        >
          {/* Profile Picture */}
          <div className="absolute inset-4 sm:inset-2 md:inset-0 rounded-full p-6 transition-transform duration-500 ease-out">
            <img
              className="w-auto h-auto rounded-full transition-transform duration-500 ease-out transform hover:scale-110"
              src={ProfilePic}
              alt="Profile picture"
            />
          </div>
        </div>
        <div className="px-4 mt-0 lg:px-0 justify-items-center md:justify-items-start">
          <h2 className="mb-2 font-mono text-sm tracking-tight font-bold text-lightText dark:text-darkText">
            Hello, World
            <span className={` ${blink ? "opacity-100" : "opacity-0"}`}>!</span>
          </h2>
          {/* Name Gradient */}
          <h2 className="mb-2 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-lightText dark:text-darkText">
            <span className=" text-primary bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
              Saifullah Balghari
            </span>
          </h2>
          {/* Typewriter */}
          <h2 className="mb-2 text-1xl sm:text-2xl md:text-3xl font-semibold tracking-tight ">
            <span className="text-lightText dark:text-darkText">I&apos;m </span>
            <span className="font-extrabold text-primary">{typingText}</span>
            <span className="cursor">|</span>
          </h2>
          {/* Social Media Section */}
          <div className="mt-8">
            <h3 className="text-sm lg:text-md text-center md:text-start text-lightText dark:text-darkText font-semibold mb-4">
              Let&apos;s Connect
            </h3>
            <div className="flex space-x-6 text-primary">
              <a
                href="https://github.com/Saifullah-Balghari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.instagram.com/saifullahbalghari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/Saifullah.BlghaRi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/saifullah-balghari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
