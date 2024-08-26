"use client";
import React, { useEffect, useState } from "react";

const DisplayUserInfo = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 p-8">
      {users.map((user) => (
        <div className="border border-black max-w-fit">
          <p className="p-2">
            <strong>ID:</strong> {user.id}
          </p>
          <p className="p-2">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="p-2">
            <strong>UserName:</strong> {user.username}
          </p>
          <p className="p-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="p-2">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="p-2">
            <strong>Website:</strong> {user.website}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayUserInfo;
