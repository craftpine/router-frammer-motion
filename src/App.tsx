import Layout from "./layout/Layout";
import { BrowserRouter as Router} from "react-router-dom";

import AnimatedRoute from "./components/AnimatedRoute";

function App() {
  return (
    <Router>
      <Layout>
       <AnimatedRoute/>
      </Layout>
    </Router>
  );
}

export default App;
