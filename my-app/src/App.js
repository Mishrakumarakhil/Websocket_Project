import { Provider } from "react-redux";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import UnderLying from "./components/UnderLying";
import Derivatives from "./components/Derivatives";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Routes>
                    <Route exact path="/underlyings" element={<UnderLying />}></Route>
                    <Route exact path="/derivatives/:id" element={<Derivatives />}></Route>
                    <Route index element={<Navigate to="/underlyings" />}></Route>
                </Routes>
            </div>
            ;
        </Provider>
    );
}

export default App;
