import React, { useState } from 'react';
import './usercard.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const UserCard = ({ user }) => {
const [isOpen, setIsOpen] = useState(false)

return (
    <>
        <button className='a-img' type="button" onClick={() => setIsOpen(true)}>
            <img src={user.imageSrc} alt={user.name} />
            <div className='a-datos'>
                <h2 className='titulo-img'>{user.name}</h2>
                <ul className='lista-datos'>
                    <li>Height: {user.height}</li>
                    <li>Clothing: {user.clothing}</li>
                    <li>Shoes: {user.shoes}</li>
                    <li>Chest: {user.chest}</li>
                    <li>Waist: {user.waist}</li>
                    <li>Hips: {user.hips}</li>
                </ul>
            </div>
        </button>

        {isOpen && (
            <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                <div className="modal" onClick={(evento) => evento.stopPropagation()}>
                    <button className="modal-close" type="button" onClick={() => setIsOpen(false)}>
                        ✕
                    </button>
                    <h3 className="modal-title">{user.name}</h3>

                        <div className='icons-contact'>
                            <div className='contenedor-link'>
                            <a className="contact-link" href="tel:+5491112345678">
                                <i className="bi bi-telephone-forward-fill" />
                                <span className='text-link'>+54 9 11 1234 5678</span>
                            </a></div>
                            <div className='contenedor-link'>
                            <a className="contact-link" href="https://www.instagram.com/username" target="_blank" rel="noreferrer">
                                <i className="bi bi-instagram" />
                                <span className='text-link'>@username</span>
                            </a></div>
                            <div className='contenedor-link'>
                            <a className="contact-link" href="mailto:email@example.com">
                                <i className="bi bi-envelope-at-fill" />
                                <span className='text-link'>email@example.com</span>
                            </a></div>
                            <div className='contenedor-link'>
                            <a className="contact-link" href="https://www.facebook.com/username" target="_blank" rel="noreferrer">
                                <i className="bi bi-facebook" />
                                <span className='text-link'>facebook.com/username</span>
                            </a></div>
                        </div>
                </div>
            </div>
        )}
    </>
);
};

export default UserCard