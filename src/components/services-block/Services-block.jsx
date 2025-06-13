import React, { useState } from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const ServicesBlock = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLearnMoreClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // Framer Motion Variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3, // Animation duration
        ease: "easeInOut", // Easing function
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <div className="serveces-txt">
        <div className="text-serif20m text-serif16mAd">{title}</div>
        <div className="roboto-reg16">{description}</div>
        <div
          className="roboto-reg14 roboto-reg13Ad"
          onClick={handleLearnMoreClick}
          style={{ cursor: "pointer" }}
        >
          Узнать подробнее
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleCloseModal} // Close on overlay click
          >
            <motion.div
              className="modal-container"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent overlay click when clicking modal
            >
              <div className="modal-header">
                <h2>Продукты 1С</h2>
                <button className="modal-close-button" onClick={handleCloseModal}>
                  &times;
                </button>
              </div>
              <div className="modal-body">
                Программы на платформе нового поколения 1С:Предприятие 8 являются
                мощными и эффективными инструментами для управления и
                автоматизации бизнеса. Они помогут вам оптимизировать
                практически любой бизнес процесс и сэкономить деньги, время и
                ресурсы Вашей компании. С помощью информационных систем 1С Вы
                сможете поднять ваш бизнес на новый качественный уровень.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesBlock;