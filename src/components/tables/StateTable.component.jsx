import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateApi } from "../../stores/services/StateUrl";
import { ready } from "../../stores/slices/StateSlice";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "..";

const StateTableComponent = () => {
  const { data, error, loading } = useSelector((store) => store.state);

  return (
    <div>
      <div>
        <h1 className=" opacity-25 text-4xl p-5 pl-2">StateList</h1>
      </div>
      <div className="bg-white shadow-2xl  rounded-2xl">
        <Table>
          <TableHeader>
            <TableRow className="text-lg font-light opacity-60">
              <TableHead className=" pl-5">#</TableHead>
              <TableHead>StateCode</TableHead>
              <TableHead>StateName</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            {data?.map((i, index) => (
              <TableRow className="opacity-45  " key={i.Id}>
                <TableCell className=" p-5">{index + 1}</TableCell>
                <TableCell>{i.StateCode}</TableCell>
                <TableCell>{i.StateName}</TableCell>
                <TableCell>{}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className=" flex justify-center ">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default StateTableComponent;
