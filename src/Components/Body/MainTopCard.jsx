import { useState } from "react";
import Card from "../Card";
import RewardModal from "../RewardModal";
import mastercraftLogo from "../../assets/images/logo-mastercraft.svg";
import bookmarkIcon from "../../assets/images/icon-bookmark.svg";

export default function MainTopCard() {

  const imgStyle = {
    position: "relative",
    top: -45,
  };

  const [openMod, setOpenMod] = useState(false);
  const handleOpen = () => {
    setOpenMod(true);
  }
  const handleClose = () => {
    setOpenMod(false);
  }

  return (
    <>
      <Card>
        <div id="main-card">
          <img src={mastercraftLogo} style={imgStyle} />
          <div style={{ marginTop: '-60px' }}>
            <h1 className="card-title">
              Mastercraft Bamboo Monitor Riser
            </h1>

            <p className="card-text">
              A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>

            <div className="top-buttons">
              <button className="main-btn" onClick={handleOpen}>Back this project</button>
              <button className="bookmark-btn"><img src={bookmarkIcon} /></button>
            </div>
          </div>
        </div>
      </Card>

      {/* Modal card, pass props for open and close functions */}
      <RewardModal openModal={openMod} handleCloseModal={handleClose} />
    </>

  )
}