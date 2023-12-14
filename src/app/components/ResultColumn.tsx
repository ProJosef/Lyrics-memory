import type { InitStateType } from "../types/types";
import { useState } from "react";

type Props = { state: InitStateType };

export default function ResultColumn({ state }: Props) {
  const [show, setShow] = useState(true);

  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-2xl">RESULTS</h2>
        <div className="flex items-center gap-2">
          <label htmlFor="Result-toggle">Hide</label>
          <input
            id="Result-toggle"
            type="checkbox"
            onChange={() => setShow(!show)}
          />
        </div>
      </div>
      <div
        className={`bg-gray-500 p-4 w-full min-h-[400px] rounded ${
          show ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-wrap gap-1">
          {state.learnerArr.map((word, i) => {
            if (i >= state.learnerArr.length - 1) return;
            return (
              <span
                key={i.toString()}
                className={`${
                  word === state.origArr[i] ? "bg-green-500" : "bg-red-500"
                } p-2 leading-4 border rounded`}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
