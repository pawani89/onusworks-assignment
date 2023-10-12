import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SetCredentials = () => {
    const { initialUsername, initailPassword } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('username', initialUsername || "");
        localStorage.setItem('password', initailPassword || "");
        navigate('/login')
    }, [initailPassword, initialUsername]);

    return (
        <></>
    )
}
export default SetCredentials;