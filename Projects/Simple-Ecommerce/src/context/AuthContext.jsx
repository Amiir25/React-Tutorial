import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

    const currentEmail = localStorage.getItem("currentEmail")
    const [user, setUser] = useState(
        currentEmail ? { email: currentEmail } : null
    );

    // Sign Up
    const signup = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.find(u => u.email === email)) {
            return { success: false, error: "Email already exists" }
        }

        const newUser = {email, password};
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentEmail", email);

        setUser({email});

        return { success: true };
    }

    // Login
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === email);

        if (!user) return { success: false, error: "User not found" }
        if (user.password !== password) return { success: false, error: "Incorrect password" };

        localStorage.setItem("currentEmail", email);
        setUser({ email });

        return { success: true };
    }

    // Logout
    const logout = () => {
        localStorage.removeItem("currentEmail");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{signup, user, logout, login}}>
            {children}
        </AuthContext.Provider>
    )
}