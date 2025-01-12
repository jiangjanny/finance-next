// app/some-page/page.js
'use client'; // 標記為 Client Component，這是 Next.js 13+ 的用法

import { useAuth } from '~/context/AuthContext';

const SomePage = () => {
    const { authToken, login, logout } = useAuth();

    return (
        <div>
            {authToken ? (
                <div>
                    <p>Logged in with token: {authToken}</p>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => login('new_token')}>Login</button>
                </div>
            )}
        </div>
    );
};

export default SomePage;
