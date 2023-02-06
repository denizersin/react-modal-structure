//helper modal methods

import { useSelector } from "react-redux";
import { LoginModal } from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import { store } from "../store";
import { appendModal, popModal, setWillMountModal } from "../store/modalSlice";


//pre-defined modals
const modalsData = {
    login: {
        name: 'login',
        component: LoginModal,
        willUnMount: false, //requiered for exit anim!
        duration: .2
    },
    register: {
        name: 'register',
        component: RegisterModal,
        willUnMount: false,
        duration: .2
    }
}


export const useModal = () => useSelector(state => state.modal.modals);

export const createModal = (name, data = false) => {
    data = data || modalsData[name]
    data = { ...data }; //redux makes these only read
    data.willUnMount = false;
    store.dispatch(appendModal(data))
}

export const unMountModal = data => {
    data = data || store.getState().modal.modals.at(-1);
    store.dispatch(setWillMountModal());
    setTimeout(() => {
        store.dispatch(popModal())
    }, data.duration * 1000);
}

