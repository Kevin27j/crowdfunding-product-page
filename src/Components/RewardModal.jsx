import { useState } from "react";
import Card from "./Card";
import CloseIcon from '../assets/images/icon-close-modal.svg';
import { IconButton, Modal, Radio, RadioGroup, FormLabel, FormControlLabel, FormControl } from "@mui/material";

export default function RewardModal(props) {
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

    const [input, setInput] = useState('female');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    return (
        // <div className="reward-modal">
        <Modal
            open={props.openModal}
            onClose={props.handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ maxHeight: 'auto', overflowY: 'scroll', marginTop: '80px', textAlign: 'left' }}
        >
            <Card style={aboutCardStyle}>

                <FormControl>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* <FormLabel id="back-project-radio-group" sx={{ color: "black" }}> */}
                        <h1 className="card-title" style={{ marginLeft: '10px' }}>Back this project</h1>
                        {/* </FormLabel> */}

                        <IconButton onClick={props.handleCloseModal} sx={{ cursor: "pointer" }}>
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

                        {rewardModalData.map((card, i) => {
                            // function checkRewardUnits(nil, normal){
                            //     return card.units === 0 ? normal : normal
                            // }

                            return (
                                <Card key={i} style={rewardCardsStyle}>
                                    <div className="reward-card-title-box">
                                        <FormControlLabel
                                            value={card.title}
                                            control={<Radio />}
                                        // label={}
                                        // sx={{ m: 0 }}
                                        />
                                        <div>
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

                                            {/* <button className={checkRewardUnits("disabled-btn", "reward-btn")}>{checkRewardUnits("Out of Stock", "Select Reward")}</button> */}
                                        </div>
                                    )}
                                </Card>
                            )
                        })}
                    </RadioGroup>

                </FormControl>

            </Card>
        </Modal>

        // </div>
    )

}