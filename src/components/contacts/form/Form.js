import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({ full_name: "", phone_number: "" });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.full_name === "" || form.phone_number === "") return;

    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="full_name"
          placeholder="Full Name"
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={changeHandler}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;
