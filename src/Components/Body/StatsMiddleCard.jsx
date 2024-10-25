import Card from "../Card"
import { LinearProgress } from '@mui/material';

export default function StatsMiddleCard() {


    return (
        <Card >
            <div id="stats-card">

                <h1 className="card-title">$89,914</h1>
                <p className="card-text">of $100,000 backed</p>
                <hr className="line-break" />

                <h1 className="card-title">5,007</h1>
                <p className="card-text">total backers</p>
                <hr className="line-break" />

                <h1 className="card-title">56</h1>
                <p className="card-text">days left</p>
                <hr className="line-break" />
            </div>

            {/* Progress Bar for the amount of money backed */}
            
            {/* <progress value={0.8} /> */}
            <LinearProgress className="progress-bar" variant="determinate"  />
        </Card>
    )
}