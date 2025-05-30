import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../../../stores/services/baseUrl";

const UserList = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((store) => store.user);
  useEffect(() => {
    const user = async () => {
      try {
        const res = await api.get("/users");
        const users = res.data;
        dispatch(finish(users));
        console.log(users);
        return users;
      } catch (error) {}
    };
    user();
  });
  const onClickHandler = () => {
    console.log(data);
  };
  return (
    <div>
      <button onClick={onClickHandler}>click</button>
    </div>
  );
};

export default UserList;
