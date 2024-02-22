import { Container } from "react-bootstrap";
import Select from "./components/Select";
import ListContainer from "./components/ListContainer";


function App() {
   

    return (
        <>
            <Container>
                <div className="wrapper">
                  <Select />
                  <ListContainer />
                </div>
            </Container>
        </>
    );
}

export default App;
