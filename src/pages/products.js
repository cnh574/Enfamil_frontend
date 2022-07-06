import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// import { Enfamils } from "./enfamils";

const Products = () => {
  const [locator, setLocator] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getLocator = () => {
    axios.get("http://localhost:8000/api/products").then((response) => {
      setLocator(response.data);
    });
  };

  let emptyFormula = {
    name: "",
    price: 0,
    image: "",
  };

  const [formula, setFormula] = useState(emptyFormula);

  const handleChange = (event) => {
    setFormula({ ...formula, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formula.handleCreate(formula);
    setLocator(emptyFormula);
  };

  useEffect(() => {
    getLocator();
  }, []);

  return (
    <>
      <h1 className="text-yellow-500  text-center mt-10 mb-10  font-bold text-5xl">
        {" "}
        Enfamil Formula's
      </h1>
      <div className="flex flex wrap content-center flex-wrap mt-10  h-10">
        <input
          type="text"
          placeholder="Search..."
          // value={locator}
          className="p-10px text-lg  box-border content-center h-10 w-50 p-4 border-2 border-gray-400 bg-gray-200"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-10 hover:grid-cols-6 mt-20">
        {/* "grid grid-rows-10 grid-flow-col gap-4 h-screen mt-20 "> */}
        {/* <ul className="p-0 list-none text-blue-600  "> */}
        {locator
          .filter((locator) => {
            if (searchTerm == "") {
              return locator;
            } else if (
              locator.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return locator;
            }
          })
          .map((locator) => (
            <section className="container">
              {/* <div className="flex flex-row "> */}
              <div className=" items-center w-60 p-2 bg-white rounded-x1 transform transition all hover: translate-y-2 duration-300 shadow-lg hover:shadow:2x1">
                <div
                  key={locator.id}
                  className="bg-blue-200 rounded overflow-hidden shadow-md text-black-500 font-bold "
                >
                  {locator.name}
                  <img
                    className="h-40 object-cover rounded x1"
                    src={locator.image}
                  />
                  <span> Price:${locator.price}</span>
                  <div className="m-2">
                    <a
                      role="button"
                      href="#"
                      className="text-white
                  bg-blue-600
                  px-3
                  py-1
                  rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ."
                    >
                      Learn more
                    </a>
                  </div>
                  <details className="add">
                    <summary>Add Formula</summary>
                    <form className="main-add-form" onSubmit={handleSubmit}>
                      <label htmlFor="name">
                        Name:
                        <input
                          type="text"
                          name="Name"
                          value={locator.name}
                          onChange={handleChange}
                        />{" "}
                      </label>
                      <br />
                      <label htmlFor="price">
                        Price:
                        <input
                          type="number"
                          name="price"
                          value={locator.price}
                          onChange={handleChange}
                        />
                      </label>
                      <br />
                      <label htmlFor="image">
                        Image:
                        <input
                          type="text"
                          name="image"
                          value={locator.image}
                          onChange={handleChange}
                        />{" "}
                      </label>
                      <br />
                      <label>
                        <input className="submit-btn" type="submit" />
                      </label>
                    </form>
                  </details>
                </div>
              </div>
            </section>
          ))}
      </div>
    </>
  );
};

export default Products;
