import React, { useContext, useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, googleAuthProvider } from "../../db/firebase/firebase";
import { AuthContext } from "../auth";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegisterPage from "../registration/RegisterPage";
import { Mail } from "lucide-react";

const LoginPage = () => {
    const auth = getAuth(app);
    const { setUser } = useContext(AuthContext)!;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((credentials) => setUser(credentials.user))
            .catch((error) => console.error(error));
    };

    const handleEmailLogin = (e: React.FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((credentials) => setUser(credentials.user))
            .catch((error) => console.error("Login error:", error));
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                                <div className="text-center mb-8">
                                    <h1 className="text-2xl font-bold text-gray-900">Вхід в систему</h1>
                                    <p className="text-gray-600 mt-2">Введіть ваші дані для входу</p>
                                </div>

                                <form onSubmit={handleEmailLogin} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Електронна пошта
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="name@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                                        <div className="relative">
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Увійти
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleGoogleLogin}
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Увійти через Google
                                    </button>

                                    <div className="text-center mt-4">
                                        <Link
                                            to="/register"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Зареєструватися
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                />

                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default LoginPage;
