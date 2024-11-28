import { useState } from 'react';
import HamIcon from '../assets/images/icon-hamburger.svg';
import CloseIcon from '../assets/images/icon-close-menu.svg';
import Card from './Card';
import { IconButton, Modal, Divider } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '29%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'left',
    padding: 0
};

export default function Navbar() {

    const [openMod, setOpenMod] = useState(false);
    const handleOpen = () => {
        setOpenMod(true);
    }
    const handleClose = () => {
        setOpenMod(false);
    }

    return (
        <div className="nav-bar">
            <h1 className="crowdfund-title">crowdfund</h1>
            
            <IconButton onClick={handleOpen}>
                <img src={openMod ? CloseIcon : HamIcon}/>
            </IconButton>

            <Modal
                open={openMod}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card style={modalStyle}>
                    <p className='nav-text'>
                        <a href='#' className='nav-link'>About</a>
                    </p>
                    <Divider />
                    <p className='nav-text'>
                        <a href='#' className='nav-link'>Discover</a>
                    </p>
                    <Divider />
                    <p className='nav-text'>
                        <a href='#' className='nav-link'>Get Started</a>
                    </p>
                </Card>
            </Modal>
        </div>
    )
}