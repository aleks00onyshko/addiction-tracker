import './Active-streaks.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';


interface ActiveStreaksProps {
    title: string;
    data: {
        name: string;
        count: string;
    }
}

function ActiveStreaks({ title, data }: ActiveStreaksProps) {
    const openWindow = () => {
        console.log('active-streaks page is click');

    }


    return (
        <>
            <div className='active-streaks' onClick={openWindow}>
                <Box sx={{
                    minWidth: 275,
                    borderRadius: 3,
                    overflow: 'hidden'
                }}>
                    <Card variant="outlined">
                        <h3>{data.name}</h3>
                        <h2 className='count'>{data.count}</h2>
                    </Card>
                </Box>

            </div >
        </>
    )
}

export default ActiveStreaks
