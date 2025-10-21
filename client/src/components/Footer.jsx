import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 pt-12 md:px-16 lg:px-36 w-full text-white bg-gradient-to-b from-gray-900 to-black">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 border-b border-gray-700 pb-12">
        
        {/* Logo + About */}
        <div className="md:max-w-md">
          <img
            alt="logo"
            className="h-12"
            src={assets.logo}
          />
          <p className="mt-6 text-sm leading-relaxed text-gray-300">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            When an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          {/* App Download Buttons */}
          <div className="flex items-center gap-3 mt-6">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="google play"
              className="h-10 w-auto border border-gray-600 rounded hover:scale-105 transition"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="app store"
              className="h-10 w-auto border border-gray-600 rounded hover:scale-105 transition"
            />
          </div>
        </div>

        {/* Links + Contact */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h2 className="font-semibold mb-5 text-lg">Company</h2>
            <ul className="text-sm space-y-2 text-gray-300">
              <li><a className="hover:text-white transition" href="/">Home</a></li>
              <li><a className="hover:text-white transition" href="#">About us</a></li>
              <li><a className="hover:text-white transition" href="#">Contact us</a></li>
              <li><a className="hover:text-white transition" href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-lg">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-300">
              <p>+91-7067163019</p>
              <p>bilalz2005zofficial@gmail.com</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-lg">Follow us</h2>
            <div className="flex gap-4 text-gray-400">
              <a href="#"><Facebook className="w-5 h-5 hover:text-white transition" /></a>
              <a href="#"><Twitter className="w-5 h-5 hover:text-white transition" /></a>
              <a href="#"><Instagram className="w-5 h-5 hover:text-white transition" /></a>
              <a href="#"><Linkedin className="w-5 h-5 hover:text-white transition" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="pt-6 text-center text-sm text-gray-400 pb-6">
        Copyright {new Date().getFullYear()} ©{" "}
        <a href="https://prebuiltui.com" className="hover:text-white transition">
          Seven
        </a>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
