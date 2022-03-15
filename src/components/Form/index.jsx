import { useState } from "react";

const Form = () => {
  const [formValidated, setFormValidated] = useState(null);
  const [formValues, setFormValues] = useState({
    name: null,
    size: null,
    type: "Electronic",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidated = Object.values(formValues).every(
      (value) => !!value === true
    );
    setFormValidated(isValidated);
  };
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Product</h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="size"
        name="size"
        onChange={handleChange}
      />
      <label htmlFor="type">Type</label>
      <select
        name="type"
        id="type"
        defaultValue="Electronic"
        onChange={handleChange}
      >
        <option value="Electronic">Electronic</option>
        <option value="Furnite">Furnite</option>
        <option value="Clothing">Clothing</option>
      </select>
      <button type="submit">Submit</button>
      {formValidated === false && <h2>all fields are requireds</h2>}
    </form>
  );
};

export { Form };
