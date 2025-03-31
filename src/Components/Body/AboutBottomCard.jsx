import { useState } from "react";
import Card from "../Card";
import CompletedModal from "../CompletedModal";

export default function AboutBottomCard() {
    const aboutCardStyle = {
        textAlign: 'left'
    }
    const rewardCardsStyle = {
        ...aboutCardStyle,
        width: '280px',
    }

    const rewardCardsData = [
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

    // COMPLETED MODAL 
    const [openCompletedMod, setOpenCompletedMod] = useState(false);

    const handleOpenCompleted = () => {
        setOpenCompletedMod(true);
    }
    const handleCloseCompleted = () => {
        setOpenCompletedMod(false);
    }

    return (
        <>
            <Card style={aboutCardStyle}>
                <div id="about-card">

                    <div className="about-card-container">

                        <div className="about-card-title-container">
                            <h1 className="card-title">About this project</h1>

                            <p className="card-text">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

                            <p className="card-text">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>

                        </div>
                        <br />


                        {rewardCardsData.map((card, i) => {
                            const isOutOfStock = card.units === 0;

                            return (
                                <Card
                                    className={`${isOutOfStock ? "disabled-card" : ""}`}
                                    style={rewardCardsStyle}
                                    key={i}
                                >

                                    <div className="reward-card-title-container">
                                        <h1 className="reward-card-title">{card.title}</h1>
                                        <h2 className="reward-card-sub">{card.subTitle}</h2>

                                    </div>

                                    <p className="card-text">{card.content}</p>

                                    <div className="reward-interaction-box">
                                        <p className="card-text">
                                            <span className="reward-unit">{card.units}</span>
                                            left
                                        </p>

                                        {/* Conditional Reward butt0n */}
                                        <button
                                            className={
                                                isOutOfStock ?
                                                    "disabled-btn" :
                                                    "reward-btn"
                                            }
                                            onClick={handleOpenCompleted}
                                            disabled={isOutOfStock}
                                        >

                                            {isOutOfStock ?
                                                "Out of Stock" :
                                                "Select Reward"
                                            }

                                        </button>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </Card>

            <CompletedModal openCompleted={openCompletedMod} handleCloseCompleted={handleCloseCompleted} />
        </>
    )
}