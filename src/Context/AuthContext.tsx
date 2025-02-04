import { createContext, useContext, useEffect, useState } from "react";

// Context Type
interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

// Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to check if token is valid
const checkAuth = (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT
        return payload.exp * 1000 > Date.now();
    } catch {
        return false;
    }
};

// Provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // ✅ Initialize authentication state with checkAuth()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(checkAuth());

    // ✅ Ensure state updates on changes (optional, but useful if token is removed)
    useEffect(() => {
        const syncAuth = () => setIsAuthenticated(checkAuth());
        window.addEventListener("storage", syncAuth); // Listen for token changes in localStorage
        return () => window.removeEventListener("storage", syncAuth);
    }, []);

    // Login
    const login = (token: string) => {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
    };

    // Logout
    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
