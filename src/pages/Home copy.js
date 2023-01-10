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
          staggerChildren: 2, //Các phần tử sau đó xuất hiện lần lượt
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
                    Tiến sĩ:{" "}
                  </strong>{" "}
                  08 ngành; 100 chỉ tiêu
                </p>
              </div>
              <div className="col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    Thạc sĩ:{" "}
                  </strong>{" "}
                  14 ngành; 800 chỉ tiêu
                </p>
              </div>
              <div className="col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    Đại học chính quy:{" "}
                  </strong>{" "}
                  8.000 chỉ tiêu; 54 ngành đại trà, 34 ngành CLC, 2 ngành CLCQT, 8 ngành LKQT
                </p>
              </div>
              <div className="col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    Liên thông Đại học:{" "}
                  </strong>{" "}
                  Các ngành bậc ĐHCQ; 500 chỉ tiêu
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
                  <li>Đạt chuẩn chất lượng giáo dục (2016)</li>
                  <li>Top 601+ trường ĐH hàng đầu Châu Á - QS (2021)</li>
                  <li>Đứng thứ 11 những trường tốt nhất Việt Nam (2022)</li>
                  <li>Đạt chuẩn QS Stars 4 sao (2022)</li>
                  <li>Top 5 bảng xếp hạng Webometrics (2022)</li>
                  <li>Đạt 5/8 tiêu chí của UPM (2022)</li>
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
                    ABET - 6 chương trình:
                  </strong>{" "}
                  Sinh học, CNTT, Hệ thống Thông tin, Thực phẩm, Kỹ thuật Cơ
                  khí, Chế tạo máy
                </p>
              </div>
              <div className="flex col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    AUN - 12 chương trình:
                  </strong>{" "}
                  Kỹ thuật điện tử - truyền thông; Kỹ thuật Điện – điện tử, Kỹ
                  thuật môi trường, Kỹ thuật hóa học, Ô tô, Quản trị Kinh doanh,
                  Kế toán, Ngôn ngữ Anh, Kỹ thuật Máy tính, Dệt may, Thương mại
                  điện tử, Kỹ thuật nhiệt
                </p>
              </div>
              <div className="flex col-span-4">
                <p>
                  <strong className="text-xl font-bold text-center text-blue-700 dark:text-yellow-200">
                    MOET - 8 chương trình:
                  </strong>{" "}
                  Quản lý Tài nguyên Môi trường, Kỹ thuật Xây dựng, Luật kinh
                  tế; Hóa phân tích, Kỹ thuật Điện, Kỹ thuật Điện tử, Kế toán và
                  Công nghệ thực phẩm
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
                6 Giáo sư; 45 Phó Giáo sư; 135 Tiến sĩ; 589 Thạc sĩ
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faHouse}
                />
                20 Hội trường; 145 Phòng học đa phương tiện; 165 Phòng lý thuyết
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faLayerGroup}
                />
                Hơn 200 Phòng thực hành; 45 Xưởng thực hành; 04 Trung tâm mô
                phỏng
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faBookOpen}
                />
                100.00 Đầu sách; 500.000 sách điện tử
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4">
                <FontAwesomeIcon
                  className="mr-2 text-blue-700 dark:text-yellow-400"
                  icon={faPeopleRoof}
                />
                Mỗi cơ sở 1 khu KTX có sức chứa trên 3.000 sinh viên
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
