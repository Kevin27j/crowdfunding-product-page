import Card from "../Card"

export default function AboutBottomCard() {
    const aboutCardStyle = {
        textAlign: 'left'
    }
    const rewardAboutStyle = {
        textAlign: 'left',
        width: '280px',
    }


    return (
        <Card style={aboutCardStyle}>
            <div id="about-card">

                <h1 className="card-title">About this project</h1>

                <p className="card-text">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

                <p className="card-text">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                <br />
                <Card style={rewardAboutStyle}>
                    <h1 className="reward-card-title">Bamboo Stand</h1>
                    <h2 className="reward-card-sub">Pledge $25 or more</h2>

                    <p className="card-text">You get an ergonomic stand made of natural bamboo. You&apos;ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>

                    <div className="reward-interaction-box">
                        <p className="card-text"><span className="reward-unit">101</span> left</p>
                        <button className="main-btn">Select Reward</button>
                    </div>
                </Card>

                <Card style={rewardAboutStyle}>
                    <h1 className="reward-card-title">Black Edition Stand</h1>
                    <h2 className="reward-card-sub">Pledge $75 or more</h2>

                    <p className="card-text">You get a Black Special Edition computer stand and a personal thank you. You&apos;ll be added to our Backer member list. Shipping is included.</p>

                    <div className="reward-interaction-box">
                        <p className="card-text"><span className="reward-unit">64</span> left</p>
                        <button className="main-btn">Select Reward</button>
                    </div>

                </Card>

                <Card style={rewardAboutStyle}>
                    <h1 className="reward-card-title">Mahogany Special Edition</h1>
                    <h2 className="reward-card-sub">Pledge $200 or more</h2>

                    <p className="card-text">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You&apos;ll be added to our Backer member list. Shipping is included.</p>

                    <div className="reward-interaction-box">
                        <p className="card-text"><span className="reward-unit">0</span> left</p>
                        <button className="main-btn">Out of Stock</button>
                    </div>
                </Card>
            </div>
        </Card>
    )
}