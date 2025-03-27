import { useState } from 'react';
import HamIcon from '../assets/images/icon-hamburger.svg';
import CloseIcon from '../assets/images/icon-close-menu.svg';
import Card from './Card';
import { IconButton, Modal, Divider, useMediaQuery } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '29%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'left',
    padding: 0
};

export default function Navbar() {
    // media query for navbar
    const isNavMobile = useMediaQuery("(max-width: 1023px)");

    // modal state for menu list on mobile
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

            {/* conditional rendering for nav menu links */}
            {(isNavMobile ?
                // mobile menu list
                <IconButton onClick={handleOpen}>
                    <img src={openMod ? CloseIcon : HamIcon} />
                </IconButton> : 
                // desktop menu list
                <div className='flex'>
                    <p className='nav-text'>
                        <a
                            href='#main-card'
                            className='nav-link'
                            onClick={handleClose}
                        >About</a>
                    </p>
                    <p className='nav-text'>
                        <a
                            href='#stats-card'
                            className='nav-link'
                            onClick={handleClose}
                        >Discover</a>
                    </p>
                    <p className='nav-text'>
                        <a
                            href='#about-card'
                            className='nav-link'
                            onClick={handleClose}
                        >Get Started</a>
                    </p>
                </div>
            )}
            
            {/* modal for mobile menu */}
            <Modal
                open={openMod}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card style={modalStyle}>
                    <p className='nav-text'>
                        <a
                            href='#main-card'
                            className='nav-link'
                            onClick={handleClose}
                        >About</a>
                    </p>
                    <Divider />
                    <p className='nav-text'>
                        <a
                            href='#stats-card'
                            className='nav-link'
                            onClick={handleClose}
                        >Discover</a>
                    </p>
                    <Divider />
                    <p className='nav-text'>
                        <a
                            href='#about-card'
                            className='nav-link'
                            onClick={handleClose}
                        >Get Started</a>
                    </p>
                </Card>
            </Modal>
        </div>
    )
}