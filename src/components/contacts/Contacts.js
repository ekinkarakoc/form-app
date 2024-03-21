import React, { useEffect, useState } from "react";
import List from "./list/List";
import Form from "./form/Form";
import "./Contacts.css";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  });
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
