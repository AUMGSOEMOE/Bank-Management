import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { finish } from "../stores/slices/UserSlice";
import { api } from "../stores/services/baseUrl";

const shopComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = async () => {
      try {
        const res = await api.get("/users");
        const userList = res.data;
        console.log(userList); // <-- Log the full response
        dispatch(finish(userList));
        return userList;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    user();
  }, []);

  //state//

  return <div>shopComponent</div>;
};

export default shopComponent;
