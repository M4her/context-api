import React, { useContext } from "react";
import { counterContext } from "../../context/CounterContext";
import { authContext } from "../../context/AuthContext";

const AboutIndex = () => {
  const { count, setCount, username } = useContext(counterContext);
  const { userInfo } = useContext(authContext);

  return (
    <main className="min-h-[calc(100vh-8rem)] bg-gradient-to-b from-slate-50 to-white px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-lg">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-8">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              About
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Profile details from context and a shared counter.
            </p>
          </div>

          <dl className="divide-y divide-slate-100 px-6">
            <div className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
              <dt className="text-sm font-medium text-slate-500">Address</dt>
              <dd className="text-sm font-semibold text-slate-900">
                {userInfo.address}
              </dd>
            </div>
            <div className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
              <dt className="text-sm font-medium text-slate-500">Username From counter Context</dt>
              <dd className="text-sm font-semibold text-slate-900">
                {username || "—"}
              </dd>
            </div>
          </dl>

          <div className="space-y-6 border-t border-slate-100 px-6 py-8">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Shared count (±5)
              </p>
              <p className="mt-2 text-4xl font-bold tabular-nums text-indigo-600">
                {count}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setCount((prev) => prev - 5)}
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-none sm:min-w-[8rem]"
              >
                Decrease
              </button>
              <button
                type="button"
                onClick={() => setCount((prev) => prev + 5)}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-none sm:min-w-[8rem]"
              >
                Increase
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutIndex;
