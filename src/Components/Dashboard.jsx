import React, { useEffect, useState } from "react";
import Card from "./Card";
import { axiosService } from "../Utilities/Apiservices";
const Dashboard = () => {
  let [user, setUser] = useState([]);
  let getData = async () => {
    try {
      let res = await axiosService.get("/users");
      if (res.status == 200) {
        setUser(res.data);
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
     {user.map((data)=>(<Card data={data}/>))}
    </div>
  );
};
export default Dashboard;
