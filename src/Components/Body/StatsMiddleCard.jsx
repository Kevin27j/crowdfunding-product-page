import Card from "../Card"
import { Box } from '@mui/material';
// import { LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { useTheme } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// MUI PROGRESS BAR CUSTOM-STYLED
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    width: '280px',
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

export default function StatsMiddleCard() {
    // const theme = useTheme();
    return (
        <Card>
            <div id="stats-card">

                <h1 className="card-title">$89,914</h1>
                <p className="card-text">of $100,000 backed</p>
                <hr className="line-break" />

                <h1 className="card-title">5,007</h1>
                <p className="card-text">total backers</p>
                <hr className="line-break" />

                <h1 className="card-title">56</h1>
                <p className="card-text">days left</p>

                <Box className="progress-box">
                    <BorderLinearProgress variant="determinate" value={75} />
                </Box>

            </div>

        </Card>
    )
}