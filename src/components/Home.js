import { useNavigate } from "react-router-dom";



const Home = () => {
    
    const navigate = useNavigate();

    return (
        <>
            <h1> Home Page </h1>
            <button onClick={()=> navigate('/order-placed', {replace: true})}> Place Order </button>
        </>
    );
};

export default Home;