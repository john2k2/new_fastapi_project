"use client";

import Link from "next/link";
import { auth, googleAuthProvider } from "../../firebase/AuthFirebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const handleGoogleSignIn = async (event) => {
    event.preventDefault();

    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      alert("Inicio de sesión exitoso");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      console.error("Error completo:", error.response);
      alert("Error al iniciar sesión con Google");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailSignIn = async (event) => {
    event.preventDefault();

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const user = result.user;
      alert("Inicio de sesión exitoso");
    } catch (error) {
      console.error("Error al iniciar sesión con correo electrónico:", error);
      console.error("Error completo:", error.response);
      alert("Error al iniciar sesión con correo electrónico");
    }
  };

  return (
    <div className="flex h-[80vh] flex-col items-center justify-center bg-gray-900">
      <h1 className="mb-4 text-3xl font-bold text-indigo-400">
        Iniciar sesión
      </h1>
      <form
        onSubmit={handleEmailSignIn}
        className="flex min-w-[30%] flex-col items-center"
      >
        <div className="mb-4 w-[100%]">
          <label
            htmlFor="email"
            className="mb-2 block font-bold text-indigo-100"
          >
            Correo electrónico:
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="focus:shadow-outline w-[100%] rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          />
        </div>
        <div className="mb-4 w-[100%]">
          <label
            htmlFor="password"
            className="mb-2 block font-bold text-indigo-100"
          >
            Contraseña:
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="focus:shadow-outline w-[100%] rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
          />
        </div>
        <div>
          <button
            type="submit"
            className="focus:shadow-outline mr-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            Iniciar sesión
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
          >
            Iniciar sesión con Google
          </button>
        </div>
        <button
          className="mt-4 font-bold  
          capitalize text-white
        "
        >
          registrate aqui{" "}
          <Link
            href="/register"
            className=" 
          focus:shadow-outline font-bold text-indigo-400 hover:text-indigo-600  focus:underline  focus:outline-none  
          "
          >
            Registrate
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
