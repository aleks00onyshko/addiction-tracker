import './header.css'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';


function Header() {
    const mailClick = () => {
        console.log('im mail');

    }

    const notification = () => {
        console.log('notification click');

    }

    const emergency = () => {
        console.log('emergency click');

    }

    return (
        <>
            <div className='header'>
                <h2>Recovery Tracker</h2>
                <div className='navigation'>
                    <IconButton onClick={mailClick} className='notification-btn'>
                        <Badge badgeContent={100} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>

                    <Avatar onClick={notification} className='avatar-btn' />
                    <Chip onClick={emergency} sx={{
                        backgroundColor: '#d72c2c',
                        height: '2.5rem',
                        borderRadius: '10px',
                        color: '#fff',
                    }} icon={<MdPhone />} label="Emergency Help" />
                </div>
            </div>
        </>
    )
}

export default Header
