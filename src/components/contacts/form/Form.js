import React, { useEffect, useState } from "react";
const initialFormValues = { full_name: "", phone_number: "" };

function Form(props) {
  const { setContacts, contacts } = props;

  const [form, setForm] = useState(initialFormValues);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.full_name === "" || form.phone_number === "") return;

    setContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
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
