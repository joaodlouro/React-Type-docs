"use client";
//input basico
// //sempre lembrar dos import
// // (event: FormEvent<HTMLFormElement>) expecificando de onde vem

import "./globals.css";
import { FormEvent } from "react";

const Page = () => {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("opa, aqui 1");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-6">
      <h1 className="text-5xl">Form login</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
        <input type="text" className="p-2 border border-gray-300 rounded" />
        <input
          type="submit"
          value="Enviar"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        />
      </form>
    </div>
  );
};

export default Page;
