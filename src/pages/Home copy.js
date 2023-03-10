import React from "react";

import { motion } from "framer-motion";
// https://www.framer.com/docs/examples/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";

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

function Home() {
  return (
    <div className="mx-auto flex justify-center font-sans h-auto divide-y">
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
        <div >
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
            <div className="grid grid-cols-4 gap-2 items-center">
              <div className="col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    Ti???n s??:{" "}
                  </strong>{" "}
                  08 ng??nh; 100 ch??? ti??u
                </p>
              </div>
              <div className="col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    Th???c s??:{" "}
                  </strong>{" "}
                  14 ng??nh; 800 ch??? ti??u
                </p>
              </div>
              <div className="col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    ?????i h???c ch??nh quy:{" "}
                  </strong>{" "}
                  8.000 ch??? ti??u; 54 ng??nh ?????i tr??, 34 ng??nh CLC, 2 ng??nh CLCQT, 8 ng??nh LKQT
                </p>
              </div>
              <div className="col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    Li??n th??ng ?????i h???c:{" "}
                  </strong>{" "}
                  C??c ng??nh b???c ??HCQ; 500 ch??? ti??u
                </p>
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
            <div className="grid grid-cols-4 gap-2 items-center">
              <div className="col-span-4 ">
                <ul className="list-disc ml-5">
                  <li>?????t chu???n ch???t l?????ng gi??o d???c (2016)</li>
                  <li>Top 601+ tr?????ng ??H h??ng ?????u Ch??u ?? - QS (2021)</li>
                  <li>?????ng th??? 11 nh???ng tr?????ng t???t nh???t Vi???t Nam (2022)</li>
                  <li>?????t chu???n QS Stars 4 sao (2022)</li>
                  <li>Top 5 b???ng x???p h???ng Webometrics (2022)</li>
                  <li>?????t 5/8 ti??u ch?? c???a UPM (2022)</li>
                </ul>
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
            <div className="grid grid-cols-4">
              <div className="flex col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    ABET - 6 ch????ng tr??nh:
                  </strong>{" "}
                  Sinh h???c, CNTT, H??? th???ng Th??ng tin, Th???c ph???m, K??? thu???t C??
                  kh??, Ch??? t???o m??y
                </p>
              </div>
              <div className="flex col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    AUN - 12 ch????ng tr??nh:
                  </strong>{" "}
                  K??? thu???t ??i???n t??? - truy???n th??ng; K??? thu???t ??i???n ??? ??i???n t???, K???
                  thu???t m??i tr?????ng, K??? thu???t h??a h???c, ?? t??, Qu???n tr??? Kinh doanh,
                  K??? to??n, Ng??n ng??? Anh, K??? thu???t M??y t??nh, D???t may, Th????ng m???i
                  ??i???n t???, K??? thu???t nhi???t
                </p>
              </div>
              <div className="flex col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    MOET - 8 ch????ng tr??nh:
                  </strong>{" "}
                  Qu???n l?? T??i nguy??n M??i tr?????ng, K??? thu???t X??y d???ng, Lu???t kinh
                  t???; H??a ph??n t??ch, K??? thu???t ??i???n, K??? thu???t ??i???n t???, K??? to??n v??
                  C??ng ngh??? th???c ph???m
                </p>
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
            <div className="grid grid-cols-4 gap-2 ">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faUsers}
                />
                6 Gi??o s??; 45 Ph?? Gi??o s??; 135 Ti???n s??; 589 Th???c s??
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faHouse}
                />
                20 H???i tr?????ng; 145 Ph??ng h???c ??a ph????ng ti???n; 165 Ph??ng l?? thuy???t
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faLayerGroup}
                />
                H??n 200 Ph??ng th???c h??nh; 45 X?????ng th???c h??nh; 04 Trung t??m m??
                ph???ng
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faBookOpen}
                />
                100.00 ?????u s??ch; 500.000 s??ch ??i???n t???
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faPeopleRoof}
                />
                M???i c?? s??? 1 khu KTX c?? s???c ch???a tr??n 3.000 sinh vi??n
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
