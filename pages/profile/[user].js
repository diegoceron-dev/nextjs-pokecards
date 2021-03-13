import React from 'react'
import {useRouter} from 'next/router';

export const Profile = () => {
    const {
        query: { user },
    } = useRouter();
    return (
        <div>
        <h1>Bienvenido {user}</h1>
        </div>
    );
};

export default Profile