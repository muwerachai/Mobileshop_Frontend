import React, { useRef } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Dragbutton from "./Dragbutton";
import Clientinfo from "../Utils/Clientinfo";
import ModalAny from "../../../commonUtils/ModalAuth";

function Topheader({ clicksidebar }) {
  const inputEmodal = useRef();
  return (
    <div className="navbar flex flex-row justify-start h-1/2">
      <ModalAny inputEmodal={inputEmodal} />
      <Dragbutton clicksidebar={clicksidebar} />
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Wera Shop</a>
        <Searchbar />
        {1 ? (
          <button
            className="hover:border-blue-600/40 border-2 rounded-full btn-sm h-10 w-28"
            onClick={() => inputEmodal.current.click()}
          >
            Sign In
          </button>
        ) : (
          <Clientinfo />
        )}

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                <span className="badge badge-sm indicator-item">9</span>
              </div>
            </label>
            <div
              tabindex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">9 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
