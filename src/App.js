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
    axios.get("http://localhost:8000/api/products").then((response) => {
      setLocator(response.data);
    });
  };

  const handleCreate = (addLocator) => {
    axios
      .post("http://localhost:8000/api/products", addLocator)
      .then((response) => {
        // axios;
        // .post("https://diyfrontend.herokuapp.com/guides", addGuide)
        // .then((response) => {
        getLocator();
      });
  };

  const handleDelete = (event, deletedLocator) => {
    axios
      .delete(`http://localhost:8000/api/products/${event.target.value}`)
      .then((response) => {
        // axios
        //   .delete(`https://diyfrontend.herokuapp.com//guides/${event.target.value}`)
        // .then((response) => {
        setLocator(
          locator.filter((locator) => locator.id !== deletedLocator.id)
        );
      });
  };

  const handleUpdate = (editLocator) => {
    axios
      .put(`http://localhost:8000/api/products/${editLocator.id}`, editLocator)
      .then((response) => {
        // axios
        //   .put(
        //     `https://diyfrontend.herokuapp.com/Locator/${editLocator.id}`,
        //     editLocator
        //   )
        //   .then((response) => {
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
