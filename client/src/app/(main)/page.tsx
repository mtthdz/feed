'use client';

import { AuthContext } from '@/features/auth/context/authProvider';
import { TUser } from '@/features/auth/types/user';
import React from 'react';

export default function Home() {
	const { user, signIn } = React.useContext(AuthContext);

	const handleSignIn = () => {
		const user: TUser = {
			id: '1',
			username: 'mtthdz',
			email: 'matt@mtthdz.com',
		};

		signIn(user);
	};

	return (
		<section>
			<p>feed</p>
			{user ? (
				<div>
					<p>Welcome, {user.username}</p>
				</div>
			) : (
				<div>
					<p>Please sign in to see your profile.</p>
					<button onClick={() => handleSignIn()}>Sign In</button>
				</div>
			)}
		</section>
	);
}
