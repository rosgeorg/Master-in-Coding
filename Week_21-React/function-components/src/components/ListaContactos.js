import React, { useState } from "react";

function ListaContactos() {
  const [contactos, setContactos] = useState([
    { name: "Mario", lastName: "Bros" },
    { name: "Luigi", lastName: "Bros" },
  ]);

  const renderContacts = () => {
    const h1DeContactos = contactos.map((contacto) => <h1>{contacto.name}</h1>);
    return h1DeContactos;
  };
  return (
    <div>
      <h1>Esta es la lista de contactos</h1>
      {renderContacts()}
    </div>
  );
}

export default ListaContactos;
