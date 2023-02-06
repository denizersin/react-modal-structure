import React from 'react'
import { createModal, unMountModal } from '../../utils/modal'

export const LoginModal = () => {
    const hanldeClose = (e) => {
        unMountModal('login')
    }
    const handleRegister=(e) => {
        createModal('register')
    }
    return (
        <div className={'LoginModal component fixed center-non-static w-96 h-96 bg-sky-300 rounded-xl'}>
            <div className="close ">
                <button className='close-button' onClick={hanldeClose}>close</button>
            </div>
            <div>
                <button  className={'default-button'}
                    onClick={handleRegister}>register?</button>
            </div>
        </div>
    )
}
