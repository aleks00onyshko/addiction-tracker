
import { Camera, Key, Close } from '@mui/icons-material';
import './User-profile.css'
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../db/firebase/firebase';
import profileImage from '../../assets/img/225-default-avatar.png';






const UserProfile = ({ onClose }) => {
    const auth = getAuth(app);

    const handleClickOutside = (e) => {
        if (e.target.classList.contains('profile-backdrop')) {
            onClose();
        }
    };


    const handleLogout = () => {
        signOut(auth)

            .catch(error => console.error("Logout error:", error));
    };

    return (
        <div className="profile-backdrop" onClick={handleClickOutside}>
            <div className="profile-modal">
                <div className='profile-modal-header'>
                    <button onClick={onClose} className="close-btn">
                        <Close />
                    </button>
                </div>

                <div className="profile-photo-section">
                    <div className="profile-photo">
                        <img src={profileImage} alt="Profile" />

                        <button className="change-photo-btn">
                            <Camera />
                        </button>
                    </div>
                </div>

                <div className="profile-info">
                    <div className="info-field">
                        <label>Full Name</label>
                        <p>John Robert Smith</p>
                    </div>

                    <div className="info-field">
                        <label>Email</label>
                        <p>john.smith@example.com</p>
                    </div>

                    <div className="info-field">
                        <label>Phone Number</label>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>

                <div className="profile-actions">
                    <button className="change-password-btn">
                        <Key />
                        Change Password
                    </button>
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile