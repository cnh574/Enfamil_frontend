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
    <details className="edit">
      <UserAddIcon className="h- w-5 text-black-500 "></UserAddIcon>
      //{" "}
      {/* <summary>
        <img
          id="edit-icon"
          src="https://img.icons8.com/ios/50/undefined/edit--v1.png"
        />
      </summary> */}
      <form className="main-edit-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Title:
          <input
            type="text"
            name="name"
            value={locator.title}
            onChange={handleChange}
          />{" "}
        </label>
        <br />
        <label htmlFor="price">
          Subject:
          <input
            type="text"
            name="number"
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
    </details>
  );
};

export default Edit;
