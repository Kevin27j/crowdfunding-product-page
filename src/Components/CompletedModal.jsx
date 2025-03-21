import { useState } from "react";
import Card from "./Card";
import {Modal, Button} from "@mui/material";

export default function CompletedModal(props) {


    return(
        <Modal
            open={props.openModal}
            onClose={props.handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ maxHeight: 'auto', overflowY: 'scroll', marginTop: '80px', textAlign: 'left' }}
        >
            <Card>
                <h2>Thanks for your support!</h2>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <Button>Got it!</Button>
            </Card>
        </Modal>
    )

}