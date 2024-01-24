import { createRoot } from "react-dom/client";
import { Navigation } from "./Components/Navigation";
import { Login } from "./Components/Login";
// import { DummyFunc } from "./App";

createRoot(document.getElementById("root")).render(
    <div>
        {/* <Navigation /> */}
        <Login />
    </div>
)
