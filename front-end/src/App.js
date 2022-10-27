import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Random from "./components/Random";
import { Routes, Route } from "react-router-dom";



function App() {
  // const [tweets, setTweets] = useState([])

  // useEffect(() => {
  //   axios.get("/api/tweets").then((response) => setTweets(response));
  // }, []);

  // console.log(tweets)
  
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Search" element={<Search />}></Route>
      <Route path="/Random" element={<Random />}></Route>
    </Routes>
  );
}

export default App;

