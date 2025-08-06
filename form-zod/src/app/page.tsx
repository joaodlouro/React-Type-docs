"use client";

import { useState, useEffect } from "react";

const Page = () => {
  const [firstName, setFirstName] = useState("João");
  const [lastName, setLastName] = useState("Silva");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-2">My Name</h1>
      <p className="text-lg mb-4">{fullName}</p>

      <hr/>

      <div className="flex gap-4">
        <button
          className="border border-red-500 px-4 py-2 rounded hover:bg-red-100"
          onClick={() => setFirstName("Vitor")}>
          Set to Vitor
        </button>

        <button className="border border-red-500 px-4 py-2 rounded hover:bg-red-100"onClick={() => setFirstName("Pedro")}>
          Set to Pedro
        </button>
      </div>
    </div>
  );
};

export default Page;
