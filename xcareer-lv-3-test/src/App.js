import "./styles.css";

import { Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoListHeader from "./components/TodoListHeader";
import Form from "./components/Form";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList />
        <Form />
      </div>
      <Footer />
    </div>
  );
};
