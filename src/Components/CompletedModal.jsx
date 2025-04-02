import { useState } from "react";
import Card from "./Card";
import { Modal } from "@mui/material";
import checkIcon from '../assets/images/icon-check.svg';

export default function CompletedModal(props) {

    return (
        <div className="completed-modal">
            <Modal
                open={props.openCompleted}
                onClose={props.handleCloseCompleted}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ maxHeight: 'auto', overflowY: 'scroll', marginTop: '300px', textAlign: 'left' }}
            >
                  
                <Card className="completed-card">
                    <div >
                        {/* Check mark logo */}
                        <img src={checkIcon} />
                        <div className="completed-reward-text-box">
                            <h2 className="reward-card-title">Thanks for your support!</h2>
                            <p className="card-text">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>

                        </div>

                        {/* When button is clicked, close modal */}
                        <button
                            className="reward-btn"
                            onClick={props.handleCloseCompleted}
                        >Got it!</button>

                    </div>
                </Card>
            </Modal>
        </div>
    )
}