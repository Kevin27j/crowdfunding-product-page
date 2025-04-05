import { useState } from "react";
import Card from "./Card";
import CloseIcon from '../assets/images/icon-close-modal.svg';
import { IconButton, Modal, Radio, RadioGroup, FormLabel, FormControlLabel, FormControl, Divider, Accordion, AccordionDetails, InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import PropTypes from 'prop-types';
import CompletedModal from "./CompletedModal";

const aboutCardStyle = {
    textAlign: 'left'
}
const rewardCardsStyle = {
    ...aboutCardStyle,
    width: '280px',
}

const rewardModalData = [
    {
        title: "Pledge with no reward",
        content: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },
    {
        title: "Bamboo Stand",
        subTitle: "Pledge $25 or more",
        content: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        units: 101,
    },
    {
        title: "Black Edition Stand",
        subTitle: "Pledge $75 or more",
        content: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        units: 64,
    },
    {
        title: "Mahogany Special Edition",
        subTitle: "Pledge $200 or more",
        content: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        units: 0,
    }
]


export default function RewardModal(props) {

    // Set radio button input state
    const [input, setInput] = useState(null);
    // Set reward cards state style when radio is pressed
    const [selectedCard, setSelectedCard] = useState(null);

    const handleInputChange = (event) => {
        setInput(event.target.value);
        // console.log(event.target.value)
    }

    const handleSelectedRadioButton = (title) => {
        setSelectedCard(title.target.value);
        // console.log(title.target.value)
    }

    const handleCloseModal = () => {
        // Call parent function to close modal
        props.handleCloseModal();
        setSelectedCard(null);
        setInput(null);
    };

    // COMPLETED MODAL 
    const [openCompletedMod, setOpenCompletedMod] = useState(false);

    const handleOpenCompleted = () => {
        setOpenCompletedMod(true);
    }
    const handleCloseCompleted = () => {
        setOpenCompletedMod(false);
    }

    return (
        <div className="reward-modal">
            <Modal
                open={props.openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ maxHeight: 'auto', overflowY: 'scroll', marginTop: '80px', textAlign: 'left' }}
            >
                <Card style={aboutCardStyle}>
                    <FormControl>

                        <div className="reward-modal-title-container">
                            {/* <FormLabel id="back-project-radio-group" sx={{ color: "black" }}> */}
                            <h1 className="card-title">Back this project</h1>
                            {/* </FormLabel> */}

                            <IconButton
                                onClick={handleCloseModal}
                                sx={{ cursor: "pointer" }}
                            >
                                <img src={CloseIcon} alt="Close Modal" />
                            </IconButton>
                        </div>

                        <p className="card-text">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                        <br />

                        <RadioGroup
                            // aria-labelledby="back-project-radio-group"
                            // name="radio-buttons-group"
                            value={input}
                            onChange={handleInputChange}
                        >
                            <div className="reward-modal-cards-container">
                                {rewardModalData.map((card, i) => {
                                    const isOutOfStock = card.units === 0;
                                    return (

                                        <Card
                                            // If out of stock apply disabled-card class 
                                            // If selected apply reward-modal-card-selected class
                                            className={`${isOutOfStock ? "disabled-card" : ""} ${selectedCard === card.title ? "reward-modal-card-selected" : ""}`}
                                            style={rewardCardsStyle}
                                            key={i}
                                        >
                                            <div className="reward-card-selection-container">
                                                <FormControlLabel
                                                    value={card.title}
                                                    control={<Radio onChange={() => {
                                                        if (card.units == null) {
                                                            handleCloseModal();
                                                            handleOpenCompleted();
                                                        } else {
                                                            // select target value of card title
                                                            handleSelectedRadioButton({ target: { value: card.title } });
                                                        }
                                                    }} />}
                                                    disabled={isOutOfStock}
                                                    sx={{ m: 0 }}
                                                />

                                                <div className="reward-card-title-container">
                                                    <h1 className="reward-card-title">{card.title}</h1>
                                                    {card.subTitle !== undefined && (
                                                        <h2 className="reward-card-sub">{card.subTitle}</h2>
                                                    )}
                                                </div>

                                            </div>

                                            <p className="card-text">{card.content}</p>

                                            {card.units !== undefined && (
                                                <div className="reward-interaction-box">
                                                    <p className="card-text">
                                                        <span className="reward-unit" style={{ fontSize: "18px", marginRight: "5px" }}>
                                                            {card.units}
                                                        </span>
                                                        left
                                                    </p>

                                                </div>
                                            )}

                                            {/* When card reward is selected and there are enough units, expand option to pledge $ amount */}
                                            {(selectedCard === card.title && card.units > 0) && (
                                                <>
                                                    <Divider />
                                                    <Accordion sx={{ border: 'none', boxShadow: 'none', textAlign: 'center' }}>
                                                        <AccordionDetails sx={{ padding: '10px' }}>
                                                            <FormControl>
                                                                <div className="selected-reward-card-accordion">
                                                                    <FormLabel htmlFor="pledge-amount" style={{ fontSize: '14px', fontWeight: 'bold' }}>Enter your pledge</FormLabel>
                                                                    <div className="selected-reward-input-box">
                                                                        <OutlinedInput
                                                                            className="selected-reward-input"
                                                                            sx={{  padding: '20px', margin: '10px 0', borderRadius: '20px' }}
                                                                            type="number"
                                                                            id="pledge-amount"
                                                                            name="pledge-amount"
                                                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                                        />
                                                                        <button
                                                                            className="main-btn selected-reward-input"
                                                                            // style={{ width: '100%', height: '40px' }}
                                                                            onClick={() => {
                                                                                handleCloseModal();
                                                                                handleOpenCompleted();
                                                                            }}
                                                                        >Continue</button>
                                                                    </div>
                                                                </div>
                                                            </FormControl>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </>
                                            )}
                                        </Card>

                                    )
                                })}
                            </div>
                        </RadioGroup>

                    </FormControl>

                </Card>
            </Modal>

            <CompletedModal
                openCompleted={openCompletedMod}
                handleCloseCompleted={handleCloseCompleted}
            />

        </div>
    )

}

// Props validation
RewardModal.propTypes = {
    openModal: PropTypes.bool,
    handleCloseModal: PropTypes.func,
}