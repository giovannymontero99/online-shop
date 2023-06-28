import { Spinner } from "react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Snipper = () => {
    return (
        <div style={{position: "relative"}} className="spinner-section" >
            <div style={{position: "absolute", width: "200%", textAlign: "center" }} className="snipper-div" >
                <Spinner variant="dark" animation="border" role="status" />
            </div>
        </div>
    );
}

export default Snipper;