"use client";

import Link from "next/link";

function Hero() {
  return (
    <div className="relative h-[80vh] bg-gray-900">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gray-900"
          style={{ mixBlendMode: "multiply" }}
        ></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Bienvenido a Transcribe{" "}
          <span
            className="
            text-indigo-400
          "
          >
            YouTube
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Transcribe YouTube es una aplicación web que te permite transcribir
          automáticamente los videos de{" "}
          <span className=" text-indigo-400 ">Youtube</span>. ¡Prueba nuestra
          aplicación hoy mismo!
        </p>
        <div className="mt-10">
          <Link
            href="/login"
            className="uppercasev rounded-md bg-indigo-500 px-6 py-3
            text-base font-medium capitalize text-white hover:bg-indigo-700"
          >
            comienza ahora
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
