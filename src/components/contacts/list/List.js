import React, { useState } from "react";

function List(props) {
  const { contacts } = props;
  const [filterText, setFilterText] = useState("");

  const filteredList = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  return (
    <div>
      <input
        placeholder="Filter"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filteredList.map((contact, i) => (
          <li key={i}>
            <div className="listDiv">
              <p>Name:</p>
              <p>{contact.full_name}</p>
            </div>
            <div className="listDiv">
              <p>Phone Number:</p>
              <p>{contact.phone_number}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Contacts: {filteredList.length}</p>
    </div>
  );
}

export default List;
