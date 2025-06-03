import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TableComponent from "../../../../components/Table.component";

const UserList = () => {
  const { data, error, loading } = useSelector((store) => store.user);

  return (
    <div>
      {data?.map((user) => (
        <TableComponent key={user.UserCode} data={user} />
      ))}
    </div>
  );
};

export default UserList;
