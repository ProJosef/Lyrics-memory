import { useState } from "react";
import { ActionType } from "../types/types";

type Props = {
  id: string;
  text: string;
  dispatch: React.Dispatch<ActionType>;
};

export default function LyricsColumn({ id, text, dispatch }: Props) {
  const [show, setShow] = useState(true);

  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-2xl">{id}</h2>
        <div className="flex items-center gap-2">
          <label htmlFor={`${id}-toggle`}>Hide</label>
          <input
            id={`${id}-toggle`}
            type="checkbox"
            onChange={() => setShow(!show)}
          />
        </div>
      </div>
      <textarea
        value={text}
        onChange={(e) => dispatch({ type: id, payload: e.target.value })}
        className={`bg-gray-500 p-4 w-full min-h-[400px] rounded ${
          show ? "block" : "hidden"
        }`}
      />
    </section>
  );
}
