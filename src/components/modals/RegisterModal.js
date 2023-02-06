import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { setWillMountModal } from '../../store/modalSlice';
import { deleteModal, unMountModal } from '../../utils/modal'

const animTime = .2;

const modalVariants = {
    initial: {
        opacity: 0,
        translateX: `-200%`,  //to center fixed elem...
    },
    animate: {
        opacity: 1,
        translateX: `-50%`,
        translateY: `-50%`
    },
    exit: {
        opacity: 0,
        translateX: `-100%`,
        translateY: `-50%`,
    },
    transition: {
        type: 'tween',
        duration: animTime,
        stiffness: 100,
        mass: 0.5
    }
}

export default function RegisterModal({ data }) {


    const close = () => {
        unMountModal(data);
    }

    return (
        <AnimatePresence>
            {!data.willUnMount &&   //requiered for exit anim!
                <motion.div className={'RegisterModal component fixed center-non-static w-40 h-40 bg-red-300'}
                    {...modalVariants}
                >
                    <div className="container">
                        <button className='close-button' onClick={close}>close</button>
                    </div>
                </motion.div>}
        </AnimatePresence>
    )
}
