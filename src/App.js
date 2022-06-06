import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";
import Sidebar from "./components/Sidebar";
import "./styles.css"

function App() {
  return (
    <div className='styles'>
      <Reviews/>
      <AverageRating/>
      <Analysis/>
      <Visitors/>
      <Sidebar/>
    </div>
  );
}

export default App;
