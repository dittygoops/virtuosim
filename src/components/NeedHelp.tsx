"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import {
  CheckIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export function NeedHelp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-4 right-4 ">
      <Transition
        show={open}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setOpen(false)}>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogBackdrop
            transition
            className="fixed inset-0 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 flex items-end justify-end pr-7 pb-[4.3rem]">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in w-64 h-96">
              <div className="text-center">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold text-gray-900 pt-16">
                  Need Help?
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You can talk to our AI powered chatbot for instant help, or
                    reach out to the Subject Area Expert.
                  </p>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Talk to Chatbot
                </button>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2">
                  Reach out to Expert
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>

      <button
        className="text-white rounded-full px-4 py-2.5 font-semibold shadow-2xl bg-purple-500"
        onClick={() => setOpen(!open)}>
        {open ? "X" : "Need Help?"}
      </button>
    </div>
  );
}
