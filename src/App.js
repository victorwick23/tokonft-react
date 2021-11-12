import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import {Header, Footer} from "./components";

function App() {
  
  return (
      <BrowserRouter className="">
      <div className="text-base">
          <Header/>
          <Pages/>
          <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
