import React from "react";

import { motion } from "framer-motion";
// https://www.framer.com/docs/examples/

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUsers } from "@fortawesome/free-solid-svg-icons";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
// import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
// import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";

// import abet from "../image_video/images/ABET.png";
// import aun from "../image_video/images/AUN.png";
// import vnu from "../image_video/images/vnu.png";

const boxVariants = {
  hidden: { opacity: 0, x: "100vh" },
  visible: {
    opacity: 1,
    x: 0,
    // scale: [0.5, 0.5, 0.5, 1, 1],
    // rotate: [0, 0, 180, 180, 0],
    // borderRadius: ["10%", "0%", "50%", "50%", "10%"],

    // transition: {
    //   type: 'spring',
    //   delay: 0.5,
    //   //  duration: 0.8,
    //   // bounce: 0.6,
    // }
  },
};

const textVariants = {
  hidden: { opacity: 0, x: "90vh" },
  visible: {
    opacity: 1,
    x: 0,
    // scale: [0.5, 0.5, 0.5, 1, 1],
    // rotate: [0, 0, 180, 180, 0],
    // borderRadius: ["10%", "0%", "50%", "50%", "10%"],

    // transition: {
    //   type: 'spring',
    //   delay: 0.5,
    //   // stiffness: 120,
    //   //  duration: 0.8,
    //   // bounce: 0.6,
    // }
  },
};

const lineVariants = {
  start: { opacity: 0, pathLength: 0 },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function XetTuyen() {
  return (
    <div className="mx-auto flex justify-center font-sans h-auto">
      <motion.div
        className="rounded-xl p-4 mt-2 shadow-2xl 
        bg-slate-100 border-4 border-black text-black dark:bg-stone-800 dark:border-white dark:text-white
        mobile:w-full tablet:w-11/12 laptop:w-10/12 desktop:w-9/12
        mobile:text-base tablet:text-lg laptop:text-xl desktop:text-xl
      "
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 2, //C??c ph???n t??? sau ???? xu???t hi???n l???n l?????t
          delay: 0.5,
          stiffness: 120,
        }}
      >
        <div className="divide-y-8 divide-red-700">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              delay: 0.2,
              stiffness: 250,
              //  duration: 0.8,
              // bounce: 0.6,
            }}
          >
            <div className="divide-y-2 divide-gray-400">
              <div className="grid grid-cols-4 gap-2 items-center ">
                <div className="col-span-2">M?? tuy???n sinh</div>
                <div className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                  IUH
                </div>
                <div className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                  IUQ
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-2">Ch??? ti??u</div>
                <div className="text-center">8.000</div>
                <div className="text-center">300</div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-2">?????i tr??</div>
                <div className="text-center">54</div>
                <div className="text-center">6</div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-2">Ch???t l?????ng cao</div>
                <div className="text-center">34</div>
                <div className="text-center">0</div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-2">Ch???t l?????ng cao QT</div>
                <div className="text-center">2</div>
                <div className="text-center">0</div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-2">Li??n k???t Qu???c t???</div>
                <div className="text-center">8</div>
                <div className="text-center">0</div>
              </div>
              <div className="grid grid-cols-4 gap-2 items-center ">
                <div className="col-span-2">H???c ph??</div>
                <div className="text-center">
                  <p>CN: 27tr</p>
                  <p>KT: 25tr</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-700 dark:text-yellow-200 font-bold">
                    CN: 14tr
                  </p>
                  <p className="text-blue-700 dark:text-yellow-200 font-bold">
                    KT: 12tr
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              delay: 0.2,
              stiffness: 250,
              //  duration: 0.8,
              // bounce: 0.6,
            }}
          >
            <div className="divide-y-2 divide-gray-400">
              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-4">
                  X??t tuy???n{" "}
                  <a
                    className="text-blue-700 dark:text-yellow-400"
                    href="https://tuyensinh.iuh.edu.vn/"
                    target="_blank"
                  >
                    [Xem chi ti???t]
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 items-stretch">
                <div className="col-span-2">
                  <p className="">1. Tuy???n th???ng; ??u ti??n tuy???n th???ng</p>
                </div>

                <div className="grid justify-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-12 h-8"
                    // width={40} height={40}
                  >
                    <motion.path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                      variants={lineVariants}
                      initial="start"
                      animate="finished"
                    />
                  </svg>
                </div>

                <div className="grid justify-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-12 h-8"
                    // width={40} height={40}
                  >
                    <motion.path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                      variants={lineVariants}
                      initial="start"
                      animate="finished"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-2">
                  2. X??t ??i???m h???c t???p n??m l???p 12 ??i???m
                </div>
                <div className="text-center">T??? 21</div>
                <div className="text-center">T??? 19</div>
              </div>

              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-2">
                  3. X??t ??i???m thi ????nh gi?? n??ng l???c
                </div>
                <div className="text-center">T??? 650</div>
                <div className="text-center">T??? 600</div>
              </div>

              <div className="grid grid-cols-4 gap-2 items-center">
                <div className="col-span-2">4. X??t ??i???m thi THPT n??m 2023</div>
                <div className="text-center">T??? 19</div>
                <div className="text-center">T??? 17</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default XetTuyen;
