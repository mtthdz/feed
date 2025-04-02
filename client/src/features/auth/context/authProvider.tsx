'use client';

import React from 'react';
import { createContext, useState, ReactNode } from 'react';
import { TUser } from '../types/user';

type TAuthContext = {
	user: TUser | null;
	signIn: (user: TUser) => void;
	signOut: () => void;
};

export const AuthContext = createContext<TAuthContext>({
	user: null,
	signIn: () => {},
	signOut: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<TUser | null>(null);

	const signIn = (user: TUser) => {
		setUser(user);
	};

	const signOut = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
