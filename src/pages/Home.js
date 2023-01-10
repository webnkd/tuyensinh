import React from "react";

import { motion } from "framer-motion";
// https://www.framer.com/docs/examples/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";

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

// const lineVariants = {
//   start: { opacity: 0, pathLength: 0 },
//   finished: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 2,
//       ease: "easeInOut",
//     },
//   },
// };

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
        <div className="grid grid-cols-1 divide-y-4 divide-red-700">
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
            <div>
              <div>
                  <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                    Tiến sĩ:{" "}
                  </strong>{" "}
                  08 ngành; 100 chỉ tiêu
              </div>
              <div>
                  <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                    Thạc sĩ:{" "}
                  </strong>{" "}
                  14 ngành; 800 chỉ tiêu
              </div>
              <div>
                <div>
                  <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                    ĐHCQ:{" "}
                  </strong>{" "}
                  8.000 chỉ tiêu; 54 ngành đại trà, 34 ngành CLC, 2 ngành CLCQT, 8 ngành LKQT.{" "}
                  <strong className="underline underline-offset-2">Đào tạo 2+2 tại PHQN</strong>
                </div>
              </div>
              <div>
                  <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                    LT Đại học:{" "}
                  </strong>{" "}
                  500 chỉ tiêu
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              delay: 0.4,
              stiffness: 250,
              //  duration: 0.8,
              // bounce: 0.6,
            }}
          >
            <div>
              <ul className="list-disc ml-5">
                <li>Đạt chuẩn chất lượng giáo dục (2016)</li>
                <li>Top 601+ ĐH hàng đầu Châu Á (QS2021)</li>
                <li>Thứ 11 trường tốt nhất Việt Nam (2022)</li>
                <li>Đạt chuẩn QS Stars 4 sao (2022)</li>
                <li>Top 5 xếp hạng Webometrics (2022)</li>
                <li>Đạt 5/8 tiêu chí của UPM (2022)</li>
              </ul>
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
            <div>
              <div>
                  <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                    ABET - 6 chương trình:
                  </strong>{" "}
                  <strong className="underline underline-offset-2">CNTT, Cơ khí,</strong> Chế tạo máy, Hệ thống Thông tin, Sinh học, Thực phẩm
              </div>
              <div>
                  <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                    AUN - 12 chương trình:
                  </strong>{" "}
                  <strong className="underline underline-offset-2">Điện – điện tử, Ô tô, Kế toán, QTKD, </strong>{" "}
                   Điện tử - truyền thông, Môi trường, Hóa học,  
                   Ngôn ngữ Anh, Kỹ thuật Máy tính, Dệt may, Thương mại điện tử, Kỹ thuật nhiệt
              </div>
              <div>
                <p>
                  <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                    MOET - 8 chương trình:
                  </strong>{" "}
                  QL Tài nguyên Môi trường, Xây dựng, Luật kinh tế; <strong className="underline underline-offset-2">Bậc Thạc sĩ:</strong> Hóa phân tích, Kỹ thuật Điện, Kỹ thuật Điện tử, Kế toán và
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
            <div>
              <div>
                  <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                    Hợp tác:
                  </strong>{" "}
                  Đã ký kết hợp tác với 52 đơn vị trong và ngoài nước về các lĩnh vực: Toàn diện; Trao đổi giảng viên, sinh viên; Hợp tác NCKH và chuyển giao công nghệ
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              delay: 0.4,
              stiffness: 200,
              //  duration: 0.8,
              // bounce: 0.6,
            }}
          >
            <div>
              <FontAwesomeIcon
                className="mr-2 text-blue-700 dark:text-yellow-400"
                icon={faUsers}
              />
              8 Giáo sư; 36 Phó Giáo sư; 281 Tiến sĩ; 714 Thạc sĩ
            </div>

            <div>
              <FontAwesomeIcon
                className="mr-2 text-blue-700 dark:text-yellow-400"
                icon={faHouse}
              />
              20 Hội trường; 145 Phòng học đa phương tiện; 165 Phòng lý thuyết
            </div>
            <div>
              <FontAwesomeIcon
                className="mr-2 text-blue-700 dark:text-yellow-400"
                icon={faLayerGroup}
              />
              Hơn 200 Phòng thực hành; 45 Xưởng thực hành; 04 Trung tâm mô phỏng
            </div>
            <div>
              <FontAwesomeIcon
                className="mr-2 text-blue-700 dark:text-yellow-400"
                icon={faBookOpen}
              />
              100.00 Đầu sách; 500.000 sách điện tử
            </div>
            <div>
              <FontAwesomeIcon
                className="mr-2 text-blue-700 dark:text-yellow-400"
                icon={faPeopleRoof}
              />
              Mỗi cơ sở 1 khu KTX có sức chứa trên 3.000 sinh viên
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
