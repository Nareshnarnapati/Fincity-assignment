import Header from "../Header";
import { useNavigate } from 'react-router-dom'; 
import "./index.css";

const Home = () => {
    const navigate = useNavigate(); 

    const goToProjects = () => {
        navigate("/projects"); 
    };

    return (
        <div>
            <Header />
            <div className="flex-con">
                <div className="container">
                    <h2 className="heading2">
                        UI/UX DEVELOPER
                    </h2>
                    <h1 className="heading1">
                        Hello, my name
                        <br />
                        is Madelyn Torff
                    </h1>
                    <p className="text">
                        Short text with details about you, what you
                        <br />
                        do or your professional career. You can add
                        <br />
                        more information on the about page.
                    </p>
                    <button className="button" onClick={goToProjects}>
                        Projects
                    </button>
                    <button className="button2">
                        Linkedin
                    </button>
                </div>

                <div>
                    <img src="https://res.cloudinary.com/do6jds4io/image/upload/v1704389690/udyplzcmezvknmgpk0kl.png" alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Home;
