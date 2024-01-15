import React from "react";

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        Welcome to my User Authentication App!
      </h1>
      <p className="mb-4 text-slate-700 ">
        This web application is developed using the MERN (MongoDB, Express,
        React, Node.js) stack, encompassing authentication functionalities.
        Users can seamlessly register, log in, and log out, with exclusive
        access granted to protected routes accessible only to authenticated
        individuals.
      </p>
      <p className="mb-4 text-slate-700 ">
        Utilizing React for the front-end and employing React Router for
        client-side routing, this application offers a seamless user interface.
        On the back-end, Node.js and Express work together, with MongoDB serving
        as the database foundation. The implementation of authentication is
        executed through the utilization of JSON Web Tokens (JWT), ensuring
        secure and efficient user validation.
      </p>
      <p className="mb-4 text-slate-800  font-bold">
        Feel free to have a look around!
      </p>
    </div>
  );
}
