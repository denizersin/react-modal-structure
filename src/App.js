import React from 'react'
import { ModalContainer } from './components/modals/ModalContainer';
import { createModal, unMountModal, useModal } from './utils/modal'


document.documentElement.onkeydown = (e) => {
  if (e.key === "Escape") {
    unMountModal();
  }
}

export default function App() {
  const modals = useModal();
  const handleLogin = (e) => createModal('login')
  const handleAskQuestion = (e) => {
    createModal(definedModalData.name, definedModalData)
  }
  console.log(modals)
  return (
    <div className={'App component'}> <span>App</span>

      <ModalContainer />

      <div>
        <button
          className='default-button'
          onClick={handleLogin}
        >login-modal</button>
      </div>
      <div>
        <button onClick={handleAskQuestion}>asq question</button>
      </div>

    </div>
  )
}

//define a modal and component on a spesific module and send as a data
const definedModalData = {
  name: 'ask-quesion',
  component: AskQuestion,
  willUnMount: false,
  duration: .2
}

function AskQuestion({ data }) {
  return (
    <div>
      <button>yes</button>
      <button>no</button>
      <button onClick={() => unMountModal(data)}>exit</button>
    </div>
  )
}




