import React from 'react'
import styled from 'styled-components';


const Modal = ({children,estado,cambiarEstado} ) => {

  return (
    <>
    {estado &&
      <Overlay>
        <ContenedorModal>
          <EncabezadoModal>
            <h1>Modal donts</h1>
          </EncabezadoModal>
          <BotonCerrar onClick={() => cambiarEstado(false)}>X </BotonCerrar>
          {children }

        </ContenedorModal>
      </Overlay>
      }
    </>

  );
};

export default Modal;
const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
top:0px;
left:0px;
background:rgba(0,0,0,.5);
padding:40px;
display:flex;
align-items:center;
justify-content:center;
`;



const ContenedorModal = styled.div`
	width: 500px;
	min-height: 188px;
	position: fixed;

background:#fff;
position:relative;
border-radius:5px;
box-shadow:rgba(100,100,111,8.2) 6px 7px 29px 8px;
padding:20px;
`;


const EncabezadoModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

margin-botton:20px;
padding-botton:20px;
border-botton:1px solid #E8E8E8;

h3 {
  font-weight: 500;
  font-size : 16px;
  color: #1766DC;
}
`;



const BotonCerrar = styled.div`
position: absolute;
top:20px;
right:20px;

width:30px;
height:30px;
border:none;
background:none;
cursor:pointer;
transition : .3s ease all;
border-radius: 5px;
color: #1766DC;

&:hover{
  background: #f2f2f2;
}


`;