"use client";
import { useState } from "react";
import { auth } from "../../firebase/AuthFirebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      alert("Registro exitoso");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar");
    }
  };

  return (
    <div className="flex h-[80vh]  flex-col items-center justify-center bg-gray-900 ">
      <h1 className="mb-4 text-3xl font-bold text-indigo-400">Registrarse</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
            Correo electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="focus:shadow-outline rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block font-bold text-indigo-100"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="focus:shadow-outline rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block font-bold text-indigo-100"
          >
            Confirmar contraseña:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="focus:shadow-outline rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
