import Card from "../Card"
import mastercraftLogo from "../../assets/images/logo-mastercraft.svg"
import bookmarkIcon from "../../assets/images/icon-bookmark.svg"

export default function MainTopCard() {
  const imgStyle = {
    position: "relative",
    top: -60,
  };

  return (
    <Card className="top-card">
      <img src={mastercraftLogo} style={imgStyle} />
      <div style={{ marginTop: '-60px' }}>
        <h1 className="card-title">
          Mastercraft Bamboo Monitor Riser
        </h1>

        <p className="card-text">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>

        <div className="top-buttons">
          <button className="main-btn">Back this project</button>
          <button className="bookmark-btn"><img src={bookmarkIcon}/></button>
        </div>
      </div>
    </Card>
  )
}