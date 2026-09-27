import React, { useContext } from "react";
import { counterContext } from "../../context//CounterContext";
import { authContext } from "../../context/AuthContext";

const HomeIndex = () => {
  const { count, setCount } = useContext(counterContext);
  const { userInfo } = useContext(authContext);

  const handleIncrement = () => {
    setCount((prev) => prev + 3);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 3);
  };

  return (
    <main className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-slate-50 to-white px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-lg">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-indigo-600 px-6 py-8 text-white">
            <p className="text-sm font-medium text-indigo-100">Welcome back</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              {userInfo.name}
            </h1>
          </div>

          <div className="space-y-8 px-6 py-8">
            <div>
              <p className="text-sm font-medium text-slate-500">Counter (±3)</p>
              <p className="mt-2 text-5xl font-bold tabular-nums text-slate-900">
                {count}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleDecrement}
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-none sm:min-w-[8rem]"
              >
                Decrement
              </button>
              <button
                type="button"
                onClick={handleIncrement}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-none sm:min-w-[8rem]"
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeIndex;
