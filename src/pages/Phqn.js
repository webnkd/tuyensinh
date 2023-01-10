import React from "react";
import { motion } from "framer-motion";
import Tooltip from "@mui/material/Tooltip";


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faHandHolding } from "@fortawesome/free-solid-svg-icons";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Phqn() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" mx-auto flex justify-center font-sans h-auto">
      <motion.div
        className="
       bg-slate-100 border-4 border-black text-black dark:bg-stone-800 dark:border-white dark:text-white
        rounded-lg px-6 py-8 mt-2 shadow-xl
        mobile:w-full tablet:w-11/12 laptop:w-10/12 desktop:w-9/12
        mobile:text-base tablet:text-lg laptop:text-xl desktop:text-xl divide-y
      "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <div className="grid grid-cols-3 gap-2 items-stretch">
          <div className="grid justify-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-12 h-12"
            >
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
            </svg>
          </div>
          <div className="col-span-2 ml-5">
            <p>IUQ: 2 năm đầu</p>
            <p className="text-fuchsia-600">IUH: 2 năm sau</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 items-stretch">
          <div className="grid justify-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-12 h-12"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="col-span-2 ml-5">
            <p>IUQ: CN-12 tr; KT-9,5 tr</p>
            <p className="text-fuchsia-600">IUH: CN-22 tr; KT-20 tr</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 items-stretch">
          <div className="grid justify-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-12 h-12"
            >
              <path
                fill-rule="evenodd"
                d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
              <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
            </svg>
          </div>
          <div className="col-span-2 ml-5">
            <p>IUQ: HB-20.50, ĐGNL-600, ĐT-17 (2022)</p>
            <p>IUQ: HB-19.00, ĐGNL-700, ĐT-18 (2023)</p>
            <p className="text-fuchsia-600">IUH: HB-21, NL-800, ĐT-20</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 justify-items-center items-stretch">
          <div className="grid">
            <Tooltip title="Cơ khí">
              <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className="cokhi"
              >
              <FontAwesomeIcon
                icon={faGear}
                className="w-14 h-14 p-2 text-blue-700 dark:text-yellow-400"
              >
              </FontAwesomeIcon>
              </motion.div>
            </Tooltip>
          </div>
          <div className="grid">
            <Tooltip title="Ô tô">
              <FontAwesomeIcon
                icon={faCar}
                className="w-14 h-14 p-2 text-blue-700 dark:text-yellow-400"
              >

              </FontAwesomeIcon>
            </Tooltip>
          </div>
          <div className="grid">
            <Tooltip title="Điện, điện tử">
              <FontAwesomeIcon
                icon={faPlug}
                className="w-14 h-14 p-2 text-blue-700 dark:text-yellow-400"
              >
                </FontAwesomeIcon>
            </Tooltip>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 justify-items-center items-stretch">
          <div className="grid">
            <Tooltip title="Tin học">
              <FontAwesomeIcon
                icon={faDesktop}
                className="w-14 h-14 p-2 text-blue-700 dark:text-yellow-400"
              >
                </FontAwesomeIcon>
            </Tooltip>
          </div>
          <div className="grid">
            <Tooltip title="Kế toán">
              <FontAwesomeIcon
                icon={faCoins}
                className="w-14 h-14 p-2 text-blue-700 dark:text-yellow-400"
              >
                </FontAwesomeIcon>
            </Tooltip>
          </div>
          <div className="grid">
            <Tooltip title="Quản trị Kinh doanh">
              <FontAwesomeIcon
                icon={faHandHolding}
                className="w-14 h-14 p-2 text-blue-700 dark:text-yellow-400"
              >
                </FontAwesomeIcon>
            </Tooltip>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default Phqn;
