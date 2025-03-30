import { useState } from "react";
import Card from "../Card"
import { Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


export default function StatsMiddleCard() {

    // progress bar media query
    const progressBarMobile = useMediaQuery('(max-width: 1024px)');

    // Progress Stats data
    const goalAmount = 100000;
    const [moneyRaised, setMoneyRaised] = useState(89914);
    const [backers, setBackers] = useState(5007);
    const [daysLeft, setDaysLeft] = useState(56);

    const progressBarVal = Math.min((moneyRaised / goalAmount) * 100, 100);

    const updateBar = () => {
        setMoneyRaised((prev) => Math.min(prev + 1000, goalAmount));
    }

    // MUI PROGRESS BAR CUSTOM-STYLED
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        width: (progressBarMobile ? '264px' : '600px'),
        margin: '0 auto',
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette.grey[800],
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.main,
            ...theme.applyStyles('dark', {
                backgroundColor: '#308fe8',
            }),
        },
    }));


    return (
        <Card>
            <div id="stats-card">
                <div className="stats-card-container">

                    <div className="stats-card-text">
                        <h1 className="card-title">${moneyRaised.toLocaleString('en-US')}</h1>
                        <p className="card-text">of $100,000 backed</p>
                    </div>

                    <hr className="line-break" />

                    <div className="stats-card-text">
                        <h1 className="card-title">{backers.toLocaleString('en-US')}</h1>
                        <p className="card-text">total backers</p>
                    </div>

                    <hr className="line-break" />

                    <div className="stats-card-text">
                        <h1 className="card-title">{daysLeft}</h1>
                        <p className="card-text">days left</p>
                    </div>
                </div>

                <Box className="progress-box">
                    <BorderLinearProgress
                        variant="determinate"
                        value={progressBarVal}
                        onClick={updateBar}
                        className="progress-bar"
                    />
                </Box>

            </div>

        </Card>
    )
}