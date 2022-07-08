import { useState } from "react";

const Add = (props) => {
  let emptyLocator = {
    name: "",
    price: 0,
    image: "",
  };

  const [locator, setLocator] = useState(emptyLocator);

  const handleChange = (event) => {
    setLocator({ ...locator, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(locator);
    setLocator(emptyLocator);
  };

  return (
    <>
      <details className="add">
        <summary>Add New Formula</summary>
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
            Subject:
            <input
              type="number"
              name="price"
              value={locator.price}
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="image">
            Category:
            <input
              type="text"
              name="image"
              value={locator.image}
              onChange={handleChange}
            />{" "}
          </label>
          <br />
          <label>
            <input className="submit-btn" type="submit" value="Submit" />
          </label>
        </form>
      </details>
    </>
  );
};

export default Add;
