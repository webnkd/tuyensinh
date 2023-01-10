import React from "react";

import { motion } from "framer-motion";
// https://www.framer.com/docs/examples/

const boxVariants = {
  hidden: { opacity: 0, x: "-100vh" },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const textVariants = {
  hidden: { opacity: 0, x: "-90vh" },
  visible: {
    opacity: 1,
    x: 0,
  },
};

function Quocte() {
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
            <div>
              <div >
                <div >
                  <p>
                    <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                      I. Chất lượng cao Quốc tế:{" "}
                    </strong>{" "}
                    02 ngành
                  </p>
                </div>
                <div className="flex flex-row text-lg font-bold text-blue-700 dark:text-yellow-200">
                  <div className="basis-2/5">
                    <p>Ngành</p>
                  </div>
                  <div className="basis-1/5">
                    <p>HB</p>
                  </div>
                  <div className="basis-1/5">
                    <p>ĐT</p>
                  </div>
                  <div className="basis-1/5">
                    <p>NL</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="basis-2/5">
                    <p>1. Kế toán</p>
                  </div>
                  <div className="basis-1/5">
                    <p>24.00</p>
                  </div>
                  <div className="basis-1/5">
                    <p>19.00</p>
                  </div>
                  <div className="basis-1/5">
                    <p>675</p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="basis-2/5">
                    <p>2. Kiểm toán</p>
                  </div>
                  <div className="basis-1/5">
                    <p>24.00</p>
                  </div>
                  <div className="basis-1/5">
                    <p>21.00</p>
                  </div>
                  <div className="basis-1/5">
                    <p>690</p>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <p>
                    <strong className="text-lg font-bold text-center text-blue-700 dark:text-yellow-200">
                      II. Liên kết Quốc tế:{" "}
                    </strong>{" "}
                    08 ngành
                  </p>
                </div>
                <div className="flex flex-row text-lg font-bold text-blue-700 dark:text-yellow-200">
                  <div className="basis-2/5">
                    <p>Ngành</p>
                  </div>
                  <div className="basis-1/5">
                    <p>HB</p>
                  </div>
                  <div className="basis-1/5">
                    <p>ĐT</p>
                  </div>
                  <div className="basis-1/5">
                    <p>NL</p>
                  </div>
                </div>
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <p>1. Kế toán</p>
                    </div>
                    <div className="basis-1/5">
                      <p>24.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>650</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <p>2. QTKD</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>20.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>650</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <p>3. KH máy tính</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>23.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>650</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <p>4. TC ngân hàng</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>650</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <p>5. QLTN MTrường</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>19.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>650</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <p>6. Ngôn ngữ Anh</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>650</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <p>7. Marketing</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>23.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>650</p>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <p>8. KD Quốc tế</p>
                    </div>
                    <div className="basis-1/5">
                      <p>21.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>23.00</p>
                    </div>
                    <div className="basis-1/5">
                      <p>650</p>
                    </div>
                  </div>
    
              </div>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Quocte;
