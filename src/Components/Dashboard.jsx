import React, { useEffect, useState } from "react";
import Card from "./Card";
import { axiosService } from "../Utilities/Apiservices";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  let [user, setUser] = useState([]);
  let getData = async () => {
    try {
      let res = await axiosService.get("/users");
      if (res.status == 200) {
        setUser(res.data);
        setLoading(false);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="row py-4 mx-2 justify-center">
      {loading ? (
        <>
          <img className="w-52 justify-center flex"  src="https://cdn.dribbble.com/users/1238723/screenshots/4794365/loading.gif"/>
          <h1 className="justify-center flex font-bold text-lg">Loading ...!</h1>
        </>
      ) : (
        user.map((data) => <Card data={data} getData={getData} />)
      )}
    </div>
  );
};
export default Dashboard;
