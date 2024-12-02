import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, googleAuthProvider } from '../db/firebase/firebase';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(auth.currentUser);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsub;
    }, [auth]);

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((credentials) => setUser(credentials.user))
            .catch(error => console.error(error));
    };

    const handleEmailLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((credentials) => setUser(credentials.user))
            .catch(error => console.error("Login error:", error));
    };

    const handleRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((credentials) => setUser(credentials.user))
            .catch(error => console.error("Registration error:", error));
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => setUser(null))
            .catch(error => console.error("Logout error:", error));
    };

    if (!user) {
        return (
            <div>
                <h1>Authentication Required</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleEmailLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
                <button onClick={handleGoogleLogin}>Login with Google</button>
            </div>
        );
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p>Welcome, {user.displayName || "User"}!</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
            {children}
        </div>
    );
};

export default AuthProvider;
