import {
  
  Routes,
  Route,

} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeDetail from "./pages/RecipeDetail";

// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }
function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
