import { useState } from "react";
import Card from "./Card";
import {Modal} from "@mui/material";
import checkIcon from '../assets/images/icon-check.svg';

export default function CompletedModal(props) {

    return(
        <Modal
            open={props.openCompleted}
            onClose={props.handleCloseCompleted}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ maxHeight: 'auto', overflowY: 'scroll', marginTop: '80px', textAlign: 'left' }}
        >
            <Card>
                <div style={{padding: '20px 0'}}>
                    {/* Check mark logo */}
                    <img src={checkIcon} />
                    <h2 className="reward-card-title">Thanks for your support!</h2>
                    <p className="card-text">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                    
                    {/* When button is clicked, close modal */}
                    <button 
                        className="reward-btn"
                        onClick={props.handleCloseCompleted}
                    >Got it!</button>

                </div>
            </Card>
        </Modal>
    )
}