"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { MessageSquare, Send, User } from "lucide-react";

export function NeedHelp() {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("");

  return (
    <div className="absolute bottom-4 right-4">
      <Transition
        show={open}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => {
          setOpen(false);
          setSelection("");
        }}>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogBackdrop
            transition
            className="fixed inset-0 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
          />

          <div className="fixed inset-0 flex items-end justify-end pr-7 pb-[4.3rem]">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in w-[400px] h-[700px]">
              <div className="text-center">
                {selection === "expert" ? (
                  <ExpertScreen setSelection={setSelection} />
                ) : selection === "chatbot" ? (
                  <ChatBotScreen setSelection={setSelection} />
                ) : (
                  <DefaultScreen setSelection={setSelection} />
                )}
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

function DefaultScreen(props: { setSelection: (selection: string) => void }) {
  return (
    <>
      <DialogTitle
        as="h3"
        className="text-base font-semibold text-gray-900 pt-16">
        Need Help?
      </DialogTitle>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          You can talk to our AI powered chatbot for instant help, or reach out
          to the Subject Area Expert.
        </p>
      </div>
      <div className="mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => props.setSelection("chatbot")}>
          Talk to Chatbot
        </button>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
          onClick={() => props.setSelection("expert")}>
          Reach out to Expert
        </button>
      </div>
    </>
  );
}

function ExpertScreen(props: { setSelection: (selection: string) => void }) {
  return (
    <div className="h-full">
      <DialogTitle
        as="h3"
        className="flex text-base font-semibold text-gray-900 items-center">
        <button
          onClick={() => {
            props.setSelection("");
          }}>
          <ArrowUturnLeftIcon className="h-4 w-4 align-left" />
        </button>
        <span className="pl-[6rem]">Subject Area Expert</span>
      </DialogTitle>
      <div className="flex flex-col h-full items-center">
        <img
          src="/shantanu.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mt-4"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Shantanu Thatte</h3>
          <p className="text-sm text-gray-500">Engineering Director</p>
          <p className="text-sm text-gray-500">
            Expertise: HTF7000 Aircraft Engine
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Email: shantanu.thatte@honeywell.com
          </p>
          <p className="text-sm text-gray-500">Teams: @shantanu.thatte</p>
          <p className="text-sm text-gray-500">Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}

function ChatBotScreen(props: { setSelection: (selection: string) => void }) {
  return (
    <div className="h-full">
      <DialogTitle
        as="h3"
        className="flex text-base font-semibold text-gray-900 items-center">
        <button
          onClick={() => {
            props.setSelection("");
          }}>
          <ArrowUturnLeftIcon className="h-4 w-4 align-left" />
        </button>
        <span className="pl-[9rem]">Chatbot</span>
      </DialogTitle>
      <div className="flex flex-col h-full">
        <ChatStream />
      </div>
    </div>
  );
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const ChatStream = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentStreamingText, setCurrentStreamingText] = useState("");

  const mockResponse =
    "Artificial Intelligence (AI) is a broad field of computer science focused on creating intelligent machines that can perform tasks typically requiring human intelligence. These tasks include visual perception, speech recognition, decision-making, language translation, and problem-solving. Machine learning, a subset of AI, enables systems to learn and improve from experience without being explicitly programmed.";

  const simulateStreaming = async (text: string) => {
    setIsTyping(true);
    let currentText = "";

    for (let i = 0; i < text.length; i++) {
      currentText += text[i];
      setCurrentStreamingText(currentText);
      // Random delay between 10ms and 50ms
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 10 + 10),
      );
    }

    setIsTyping(false);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: currentText },
    ]);
    setCurrentStreamingText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: currentInput }]);
    setCurrentInput("");

    // Simulate delay before assistant starts typing
    setTimeout(() => {
      simulateStreaming(mockResponse);
    }, 500);
  };

  return (
    <div className="w-full h-[650px] bg-white rounded-lg flex flex-col">
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 ${
              message.role === "user" ? "justify-end" : ""
            }`}>
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-lg p-2 text-left ${
                message.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}>
              {message.content}
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="max-w-[80%] rounded-lg p-2 text-left bg-gray-100">
              {currentStreamingText}
              <span className="inline-block animate-pulse">▋</span>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="relative">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};
