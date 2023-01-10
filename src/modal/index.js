import { motion } from "framer-motion";
import Backdrop from "../backdrop";

const dropIn = {
    hidden:{
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};


const Modal = ({ handleClose, text }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
            >
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    )
};

export default Modal;