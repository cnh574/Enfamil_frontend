import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Products from "./pages/products";
import Locator from "./pages/locator";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [locator, setLocator] = useState([]);

  // CRUD  FUNCTION
  const getLocator = () => {
    axios.get(process.env.REACT_APP_BACKEND_URL).then((response) => {
      setLocator(response.data);
    });
  };

  const handleCreate = (addLocator) => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL, addLocator)
      .then((response) => {
        getLocator();
      });
  };

  const handleDelete = (event, deletedLocator) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}${event.target.value}`)
      .then((response) => {
        setLocator(
          locator.filter((locator) => locator.id !== deletedLocator.id)
        );
      });
  };

  const handleUpdate = (editLocator) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}${editLocator.id}`, editLocator)
      .then((response) => {
        getLocator();
      });
  };

  useEffect(() => {
    getLocator();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/locator" element={<Locator />} />
      </Routes>
    </>
  );
}

export default App;
