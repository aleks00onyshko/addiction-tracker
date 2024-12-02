import './Active-streaks.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';


function ActiveStreaks() {
    const openWindow = () => {
        console.log('active-streaks page is click');

    }
    const name: string = 'active-streaks'
    const count: string = '3/4'

    return (
        <>
            <div className='active-streaks' onClick={openWindow}>
                <Box sx={{
                    minWidth: 275,
                    borderRadius: 3,
                    overflow: 'hidden'
                }}>
                    <Card variant="outlined">
                        <h3>{name}</h3>
                        <h2 className='count'>{count}</h2>
                    </Card>
                </Box>

            </div >
        </>
    )
}

export default ActiveStreaks
