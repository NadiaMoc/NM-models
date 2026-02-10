import { useState, useEffect } from "react";

const useUserData = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    setUsers([]); 
    setLoading(false);
}, []);

return { users, loading };
};

export default useUserData;