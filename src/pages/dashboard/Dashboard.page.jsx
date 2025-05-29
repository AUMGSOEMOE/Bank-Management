import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className=" bg-mask flex flex-col col-span-2 ">
        <div className="flex justify-center gap-1 ">
          <div className=" flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5714285714285716"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-letter lucide lucide-venetian-mask-icon lucide-venetian-mask"
            >
              <path d="M18 11c-1.5 0-2.5.5-3 2" />
              <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
              <path d="M6 11c1.5 0 2.5.5 3 2" />
            </svg>
          </div>
          <div className=" text-btn">
            <div>
              <h1 className="font-bold text-4xl">MAS</h1>
            </div>
            <div className=" font-bold">
              <p className="text-sm">Bank Management System</p>
            </div>
          </div>
        </div>

        <div className="text-btn flex flex-col justify-center content-center">
          <div className=" text-">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h4 className="text-base">General Setup</h4>
                </AccordionTrigger>
                <ul className="  flex justify-center items-center ">
                  <div className=" flex flex-col   ">
                    <li className=" ">
                      <AccordionContent>
                        <Link to={"/dashboard/general/statelist"}>
                          <button className="">State List</button>
                        </Link>
                      </AccordionContent>
                    </li>
                    <li>
                      <AccordionContent>
                        <Link to={"/dashboard/general/townshiplist"}>
                          <button>Township List</button>
                        </Link>
                      </AccordionContent>
                    </li>
                  </div>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
          <div className=" ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h4 className="text-base">Users&Accounts</h4>
                </AccordionTrigger>
                <ul className="  flex justify-center items-center ">
                  <div className=" flex flex-col   ">
                    <li>
                      <AccordionContent>
                        <Link to={"/dashboard/user&Account/userList"}>
                          <button>User List</button>
                        </Link>
                      </AccordionContent>
                    </li>
                    <li>
                      <AccordionContent>
                        <Link to={"/dashboard/user&Account/accountList"}>
                          <button>Account List</button>
                        </Link>
                      </AccordionContent>
                    </li>
                  </div>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
          <div className=" text-">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h4 className="text-base">Report</h4>
                </AccordionTrigger>
                <ul className="  flex justify-center items-center ">
                  <div className=" flex flex-col   ">
                    <li>
                      <AccordionContent>
                        <Link to={"/dashboard/report"}>
                          <button>Transation History</button>
                        </Link>
                      </AccordionContent>
                    </li>
                  </div>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
          <div className=" text-">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h4 className="text-base">Transation</h4>
                </AccordionTrigger>
                <ul className="  flex justify-center items-center ">
                  <div className=" flex flex-col   ">
                    <li>
                      <AccordionContent>
                        <Link to={"/dashboard/transation/transfer"}>
                          <button>Transfer</button>
                        </Link>
                      </AccordionContent>
                    </li>
                    <li>
                      <AccordionContent>
                        <Link to={"/dashboard/transation/withdraw"}>
                          <button>Withdraw</button>
                        </Link>
                      </AccordionContent>
                    </li>
                    <li>
                      <AccordionContent>
                        <Link to={"/dashboard/transation/deposit"}>
                          <button>Deposit</button>
                        </Link>
                      </AccordionContent>
                    </li>
                  </div>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className=" bg-amber-100 col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
