import { Outlet } from "react-router-dom"
import Rootlayout from "./Rootlayout/Rootlayout"

function App() {
  return (
    <div>
      <Rootlayout>
        <Outlet />
      </Rootlayout>
    </div>
  );
}

export default App;
