import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableComponent = ({
  data: { index, FullName, UserName, Email, MobileNo, Address, UserCode },
}) => {
  return (
    //user table
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>UserCode</TableHead>
          <TableHead>USER NAME</TableHead>
          <TableHead>CUSTOMER ID</TableHead>
          <TableHead>FULL NAME</TableHead>
          <TableHead>MOBILE NO</TableHead>
          <TableHead>EMAIL</TableHead>
          <TableHead>ADDRESS</TableHead>
          <TableHead>STATE CODE</TableHead>
          <TableHead>TOWNSHIP CODE</TableHead>
          <TableHead>ACTIONS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{}</TableCell>
          <TableCell>{UserCode}</TableCell>
          <TableCell>{UserName}</TableCell>
          <TableCell>{}</TableCell>
          <TableCell>{FullName}</TableCell>
          <TableCell>{MobileNo}</TableCell>
          <TableCell>{Email}</TableCell>
          <TableCell>{Address}</TableCell>
          <TableCell>{}</TableCell>
          <TableCell>{}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    //user table

    //state table
  );
};

export default TableComponent;
