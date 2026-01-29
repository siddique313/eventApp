import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AUTH_USER_KEY = "@eventapp_user";
const USERS_KEY = "@eventapp_users";

export type User = { email: string; name: string };

type StoredUser = { email: string; name: string; password: string };

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (
    name: string,
    email: string,
    password: string,
  ) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStoredUser = useCallback(async () => {
    try {
      const stored = await AsyncStorage.getItem(AUTH_USER_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStoredUser();
  }, [loadStoredUser]);

  const login = useCallback(
    async (email: string, password: string): Promise<{ error?: string }> => {
      try {
        const usersJson = await AsyncStorage.getItem(USERS_KEY);
        const users: StoredUser[] = usersJson ? JSON.parse(usersJson) : [];
        const found = users.find(
          (u) =>
            u.email.toLowerCase() === email.toLowerCase() &&
            u.password === password,
        );
        if (!found) return { error: "Invalid email or password" };
        const userData: User = { email: found.email, name: found.name };
        setUser(userData);
        await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(userData));
        return {};
      } catch {
        return { error: "Something went wrong" };
      }
    },
    [],
  );

  const signUp = useCallback(
    async (
      name: string,
      email: string,
      password: string,
    ): Promise<{ error?: string }> => {
      try {
        const usersJson = await AsyncStorage.getItem(USERS_KEY);
        const users: StoredUser[] = usersJson ? JSON.parse(usersJson) : [];
        if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
          return { error: "An account with this email already exists" };
        }
        if (password.length < 6)
          return { error: "Password must be at least 6 characters" };
        const newUser: StoredUser = {
          name: name.trim(),
          email: email.trim(),
          password,
        };
        users.push(newUser);
        await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
        const userData: User = { email: newUser.email, name: newUser.name };
        setUser(userData);
        await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(userData));
        return {};
      } catch {
        return { error: "Something went wrong" };
      }
    },
    [],
  );

  const logout = useCallback(async () => {
    setUser(null);
    await AsyncStorage.removeItem(AUTH_USER_KEY);
  }, []);

  const value: AuthContextValue = { user, loading, login, signUp, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
