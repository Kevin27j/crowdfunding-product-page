import Card from "../Card"

export default function AboutBottomCard () {
    
    return (
        <Card>
            <h1>About this project</h1>
            <br/>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
            <br/>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            <br/>
            <Card style={{'width': '300px'}}>
                <h1>Bamboo Stand</h1>
                <h2>Pledge $25 or more</h2>
                <br/>
                <p>You get an ergonomic stand made of natural bamboo. You&apos;ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                <br/>
                <span>101 left</span>
                <button>Select Reward</button>
            </Card>
            
            <Card style={{'width': '300px'}}>
                <h1>Black Edition Stand</h1>
                <h2>Pledge $75 or more</h2>
                <br/>
                <p>You get a Black Special Edition computer stand and a personal thank you. You&apos;ll be added to our Backer member list. Shipping is included.</p>
                <br/>
                <span>64 left</span>
                <button>Select Reward</button>
            </Card>

            <Card style={{'width': '300px'}}>
                <h1>Mahogany Special Edition</h1>
                <h2>Pledge $200 or more</h2>
                <br/>
                <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You&apos;ll be added to our Backer member list. Shipping is included.</p>
                <br/>
                <span>0 left</span>
                <button>Out of Stock</button>
            </Card>
            
        </Card>
    )
}