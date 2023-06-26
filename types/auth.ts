import { User } from 'firebase/auth';

export interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}
