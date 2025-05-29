import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/authorization";
import {
  AccountList,
  Dashboard,
  Deposit,
  Report,
  StateList,
  TownshipList,
  Transfer,
  UserList,
  Withdraw,
} from "./pages/dashboard";

const App = () => {
  return (
    <div className=" h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* general */}
          <Route path="/dashboard/general/statelist" element={<StateList />} />
          <Route
            path="/dashboard/general/townshiplist"
            element={<TownshipList />}
          />
          {/* user&Account */}
          <Route
            path="/dashboard/user&Account/userList"
            element={<UserList />}
          />
          <Route
            path="/dashboard/user&Account/accountList"
            element={<AccountList />}
          />

          <Route path="/dashboard/Report" element={<Report />} />
          {/* Transation */}
          <Route path="/dashboard/Transation/deposit" element={<Deposit />} />
          <Route path="/dashboard/Transation/withdraw" element={<Withdraw />} />
          <Route path="/dashboard/Transation/transfer" element={<Transfer />} />

          <Route />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
