import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateApi } from "../stores/services/StateUrl";
import { ready } from "../stores/slices/StateSlice";

const PaginationComponent = () => {
  const listPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [allState, setAllState] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await stateApi.get("/state");
        const states = res.data;
        setAllState(states);
        console.log(states); // <-- Log the full response

        return states;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (() => {
      const lastIndex = listPerPage * currentPage;
      const firstIndex = lastIndex - listPerPage;
      const stateList = allState?.slice(firstIndex, lastIndex);
      console.log(stateList);
      dispatch(ready(stateList));
      return stateList;
    })();
  }, [currentPage, allState]);

  const handleAdd = (currentPage) => {
    if (currentPage < Math.ceil(allState.length / listPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = (currentPage) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" ">
      <button
        className="rounded-full w-7 h-7 hover:bg-slate-200"
        onClick={handlePrev.bind(null, currentPage)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left-icon lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        className="rounded-full w-7 h-7 hover:bg-slate-200"
        onClick={handleAdd.bind(null, currentPage)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right-icon lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default PaginationComponent;
