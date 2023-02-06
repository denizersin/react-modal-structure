import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { unMountModal, useModal } from '../../utils/modal'


const modalVariants = {
    initial: {
        opacity: 0,
        scale: .5
    },
    animate: {
        opacity: 1,
        scale: 1
    },
    exit: {
        opacity: 0,
        scale: 0,
    },
    transition: {
        stiffness: 200,
        duration: .2
    }

}

export const ModalContainer = () => {

    const modals = useModal();
    const handleClick = (e) => {
        if (e.target == containerRef.current) {
            unMountModal();
            //or deleteAllModal
        }
    }
    const containerRef = useRef();
    return (
        <AnimatePresence>
            {
                modals.length !== 0 &&
                <motion.div onClick={handleClick}
                    {...modalVariants}
                    ref={containerRef}
                    className={`ModalContainer component fixed left-0 top-0 flex justify-center items-center min-h-screen min-w-full bg-transparent bg-sky-500/20 `}>
                    {modals.map((modalData, i) =>
                    (
                        <modalData.component
                            key={modalData.name}
                            data={modalData}
                            index={i}
                        />
                    ))
                    }
                </motion.div>
            }
        </AnimatePresence>
    )
}
