import axios from "axios";
import { useEffect, useState } from "react";

type ApiCallingProps = {
    apiUrl: string;
};

const ApiCalling = ({ apiUrl }: ApiCallingProps) => {
    const [users, setUsers] = useState<any[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(apiUrl);
                console.log(res.data);
                setUsers(res.data);
            } catch (e: any) {
                setError(e.message);
            }
        };

        fetchUsers();
    }, [apiUrl]);

    return (
        <>
            <h1>Api calling</h1>
            {error && <p>Error: {error}</p>}

            <ul>
                {users.map((user, index) => (
                    <li key={user.id} data-testid={`users-${index}`}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

export default ApiCalling;
