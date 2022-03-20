import { useState } from "react";
import { useFetchPost } from "../../hooks/useFetchPost";

const Form = () => {
  const [formValidated, setFormValidated] = useState(null);
  const [formValues, setFormValues] = useState({
    name: null,
    size: null,
    type: "Electronic",
  });
  const { submitData, loading } = useFetchPost(formValues);

  const isValidated = () => {
    return Object.values(formValues).every((value) => !!value === true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValidated(isValidated());
    isValidated() && submitData();
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
      <button type="submit" disabled={loading}>
        Submit {JSON.stringify(loading)}
      </button>
      {formValidated === false && <h2>all fields are requireds</h2>}
      {formValidated === true && <h2>Product Stored</h2>}
    </form>
  );
};

export { Form };
