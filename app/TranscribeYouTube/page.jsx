"use client";

import { useState } from "react";

function TranscribeYouTube() {
  const [url, setUrl] = useState("");
  const [transcription, setTranscription] = useState("");

  const handleSubmit = async (event) => {
    try {
      const response = await fetch("http://localhost:8000/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
        }),
      });

      if (response.ok) {
        alert("¡Transcripción realizada!");
      } else {
        alert("¡Error al transcribir el video!");
      }

      const data = await response.json();
      console.log(data);
      setTranscription(data.transcription);
    } catch (error) {
      console.error("Error while submitting contact form:", error);
    }
  };

  return (
    <div className="h-[80vh] bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-red lg:text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Transcribe el audio de</span>{" "}
            <span className="block text-indigo-400 xl:inline">YouTube</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Introduce la URL del video de YouTube que deseas transcribir.
          </p>
        </div>
        <div className="mt-10 sm:mx-auto sm:max-w-lg md:mt-16 lg:col-start-2 lg:mx-0 lg:mt-0 lg:max-w-none">
          <div className="rounded-lg bg-white sm:p-10">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="url" className="sr-only">
                  URL del video de YouTube
                </label>
                <input
                  type="text"
                  name="url"
                  id="url"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Introduce la URL del video de YouTube"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Transcribir
                </button>
              </div>
            </form>
            {transcription && (
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Transcripción del audio:
                </h2>
                <p className="mt-1 text-sm text-gray-500">{transcription}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TranscribeYouTube;
