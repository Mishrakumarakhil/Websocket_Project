import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import UnderLying from "./components/UnderLying";
import Derivatives from "./components/Derivatives";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route exact path="/underlyings" element={<UnderLying />}></Route>
                    <Route exact path="/derivatives/:id" element={<Derivatives />}></Route>
                    <Route index element={<Navigate to="/underlyings" />}></Route>
                </Routes>
            </div>
            ;
        </>
    );
}

export default App;
