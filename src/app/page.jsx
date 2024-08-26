import DisplayUserInfo from "@/components/DisplayUserInfo";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <h2 className="text-3xl text-center mt-3">List of 10 Users</h2>
        <DisplayUserInfo />
      </div>
    </>
  );
};

export default Home;
