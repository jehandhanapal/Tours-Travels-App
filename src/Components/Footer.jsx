import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { FaClock, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white ">
        <div className="mx-auto max-w-screen-xl space-y-8 md:px-8 pb-12 px-8 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <img src="https://drive.google.com/uc?export=view&id=19Gccd91OzpDVitf18mbgc6h9Itg2lA60" alt="kk" width={"40px"} />
                  <span className="ml-3 text-xl font-bold">KK Tours and Travels</span>
                </a>
              </div>

              <p className="mt-4 max-w-xs text-gray-500">We, Kk Tours and Travels have a profound understanding of our consumers travel needs and preferences.</p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <span className=" ">
                    <a className=" " href="https://www.facebook.com/kktravels.kktravels?" target="_blank">
                      <img width="38" height="38" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                    </a>
                  </span>
                </li>

                <li>
                  <span className="i">
                    <a href="https://www.youtube.com/@kktoursandtravels8117" target="_blank">
                      <img width="38" height="38" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play" />
                    </a>
                  </span>
                </li>

                <li>
                  <span className="i">
                    <a href="https://www.instagram.com/kk_toursandtravels/" target="_blank">
                      <img width="38" height="38" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1" />
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8  md:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className="font-bold text-gray-900">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Vehicle Rentals
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Tour Packages
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Hotel Bookings
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      About us
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Gallery
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-900">Contact</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-center">
                    <span>
                      <FaLocationDot />
                    </span>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 ml-2">
                      Manachanallur, Trichy.
                    </a>
                  </li>

                  <li className="flex items-center">
                    <span>
                      <BiSolidPhoneCall />
                    </span>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 ml-2">
                      +91-8754810060
                    </a>
                  </li>

                  <li className="flex items-center">
                    <span>
                      <GrMail />
                    </span>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 ml-2">
                      kktoursandtravels@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="">
                      <FaClock />
                    </span>
                    <a href="#" className="text-gray-700 transition hover:opacity-75 ml-2">
                      Mon - Sat (9.00AM to 9.00PM)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-900 font-bold text-center pt-12 border-t-2">&copy; 2023. KK Tours & Travels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
