import { useState } from 'react';
import HamIcon from '../assets/images/icon-hamburger.svg'
import CloseIcon from '../assets/images/icon-close-menu.svg'
import { IconButton } from '@mui/material';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '29%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 330,
    bgcolor: 'background.paper',
    border: '1px solid rgba(214, 209, 209, 0.504)',
    borderRadius: '10px'
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
                <Box sx={modalStyle}>
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
                </Box>
            </Modal>
        </div>
    )
}