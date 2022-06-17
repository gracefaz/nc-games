import "./App.css";
import { Header } from "./components/Header";
import { ReviewList } from "./components/ReviewList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleReview } from "./components/SingleReview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/review/:review_id" element={<SingleReview />} />
          <Route path="/categories/:category_id" element={<ReviewList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
