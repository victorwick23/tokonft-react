import Pages from "./pages";
import {Header, Footer} from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <div className="text-base">
          <Header/>
          <Pages/>
          <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
