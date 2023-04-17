"use client";

import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        alert("¡Mensaje enviado!");
      } else {
        alert("¡Error al enviar el mensaje!");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error while submitting contact form:", error);
    }
  };

  return (
    <div className="flex h-[80vh] min-w-[30%] flex-col items-center justify-center bg-gray-900 ">
      <h1 className="mb-4 text-3xl font-bold text-indigo-400">Contacto</h1>
      <p
        className="mb-4
      text-indigo-100
      "
      >
        Esta es la página de Contacto.
      </p>
      <form
        className="flex min-w-[70%] flex-col items-center
      "
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-bold text-gray-200">
            Nombre:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus:shadow-outline w-[400px] rounded border px-3 py-2
          leading-tight text-gray-700 focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-bold text-gray-200">
            Correo electrónico:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:shadow-outline w-[400px] rounded border px-3 py-2
          leading-tight text-gray-700 focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="mb-2 block font-bold text-gray-200 "
          >
            Mensaje:
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="focus:shadow-outline w-[400px] rounded border px-3 py-2
          leading-tight text-gray-700 focus:outline-none "
          ></textarea>
        </div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 px-10 py-3 font-bold uppercase text-white hover:bg-blue-700 focus:outline-none"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
