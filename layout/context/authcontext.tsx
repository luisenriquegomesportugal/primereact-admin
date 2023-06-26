import { GoogleAuthProvider, User, browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../configs/auth';
import { AuthContextProps } from '../../types/auth';
import { ChildContainerProps } from '../../types/types';

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: ChildContainerProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribeAuthStateChanged = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return unsubscribeAuthStateChanged;
    }, []);

    const login = () => {
        const provider = new GoogleAuthProvider();

        setPersistence(auth, browserLocalPersistence)
            .then(() => signInWithPopup(auth, provider))
            .catch((error) => {
                const errorMessage = error.message;
                alert(`Erro ao realiza o Login. ${errorMessage}`);
            });

    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                location.reload();
            })
            .catch((error) => {
                alert(`Erro ao realizar o Logout.`);
            });
    }

    const isLogged = () => user != null

    const value: AuthContextProps = {
        user,
        login,
        logout,
        isAuthenticated: user != null
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
