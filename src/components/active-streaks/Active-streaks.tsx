import './Active-streaks.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';


interface ActiveStreaksProps {
    data: {
        name: string;
        count: string;
    }
}

function ActiveStreaks({ data }: ActiveStreaksProps) {
    const openWindow = () => {
        console.log('active-streaks page is click');

    }


    return (
        <>
            <div className='active-streak' onClick={openWindow}>
                <Box sx={{
                    minWidth: 275,
                    borderRadius: 3,
                    overflow: 'hidden'
                }}>
                    <Card variant="outlined">
                        <h3 className='activity-title'>{data.name}</h3>
                        <h2 className='count'>{data.count}</h2>
                    </Card>
                </Box>

            </div >
        </>
    )
}

export default ActiveStreaks
