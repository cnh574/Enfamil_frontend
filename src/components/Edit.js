import { useState } from "react";
import { UserAddIcon } from "@heroicons/react/solid";

const Edit = (props) => {
  let emptyLocator = { name: "", price: 0, image: "" };
  const [locator, setLocator] = useState({ ...props.locator });

  const handleChange = (event) => {
    setLocator({ ...locator, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUpdate(locator);
  };

  return (
    <div className="edit">
      <UserAddIcon className="h- w-5 text-black-500 "></UserAddIcon>
      <summary>Edit</summary>
      <form className="main-edit-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={locator.title}
            onChange={handleChange}
          />{" "}
        </label>
        <br />
        <label htmlFor="price">
          Price:
          <input
            type="text"
            name="number"
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
        <input className="submit-btn" type="submit" value="Save Changes" />
      </form>
      <br />
      <button
        className="submit-btn"
        onClick={(event) => {
          props.handleDelete(event, locator);
        }}
        value={locator.id}
      >
        Remove
      </button>
    </div>
  );
};

export default Edit;
