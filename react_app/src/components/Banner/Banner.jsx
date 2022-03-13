import React, { useState } from 'react';
import Reservation from '../Reserve/Reservation.jsx'
import Modal from '../Reserve/Modal'
import './Banner.css'

const Banner = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };



  return (
    <div className='content'>
      <div className='header'>
        <img  className='headerImage' src="https://images.unsplash.com/photo-1585325565018-a80fcd1f4c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>

      <div className='headerContent'>
        <h1>Cutcut</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <br></br>
          <button onClick={openModal} className="reserveButton">예약</button>
          <Modal open={modalOpen} close={closeModal} header="고객님의 예약정보를 입력해주세요">
            내용입력하기!
          </Modal>
          <br></br>
          {/* <button className="reserveButton"><Reservation />예약</button> */}
      </div>
      
    </div>

  )
}

export default Banner