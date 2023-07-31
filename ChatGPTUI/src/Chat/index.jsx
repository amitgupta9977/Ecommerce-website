import React from "react";

function Chat() {
  const examples = [
    "how to use tailwind css",
    "how to use tailwind css wit react",
    "how to use tailwind css with js",
    "how to use tailwind css with vue js",
    "how to use tailwind css with angular",
    "how to use tailwind css with svelte",
  ];
  return (
    <div className="h-screen w-screen flex bg-[#050509]">
      <div className="w-[20%] h-screen bg-[#0c0c15] text-white p-4">
        <div className="h-[5%]">
          <button className="w-full h-[50px] border rounded hover:bg-slate-600">
            + New Chat
          </button>
        </div>
        <div className="h-[70%] overflow-scroll shadow-lg hide-scroll-bar mb-4">
          {[1, 2, 3, 4, 5, 7, 8, 9].map((item, index) => (
            <div className="py-3  text-center rounded mt-4 text-lg font-light flex  items-center hover:bg-slate-600">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-message-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 9h8"></path>
                  <path d="M8 13h6"></path>
                  <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path>
                </svg>
              </span>
              My Chat History
            </div>
          ))}
        </div>
        <div className="h-[20%] overflow-scroll shadow-lg hide-scroll-bar border-t">
          {[1, 2, 3].map((item, index) => (
            <div className="py-3  text-center rounded mt-4 text-lg font-light flex  items-center  hover:bg-slate-600">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-settings-code"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11.482 20.924a1.666 1.666 0 0 1 -1.157 -1.241a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312 .318 1.644 1.794 .995 2.697"></path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M20 21l2 -2l-2 -2"></path>
                  <path d="M17 17l-2 2l2 2"></path>
                </svg>
              </span>
              Settings
            </div>
          ))}
        </div>
      </div>
      <div className="w-[80%]">
        <div className="h-[80%]  flex flex-col justify-center items center text-white">
          <div className="text-4xl font-bold">APP GPT</div>
          <div className="flex flex-wrap justify-around mb-8 max-w-[900px]">
            {examples.map((item, index) => (
              <div className="text-lg font-light mt-4 p-4 border rounded cursor-pointer min-w-[400px] hover:bg-slate-800 ">
                {" "}
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[20%]">
          <div className="flex flex-col items-center justify-center w-full h-full text-white">
            <div className="w-[60%] flex justify-center relative">
              <input
                type="text"
                className=" w-full bg-slate-800 text-white rounded-lg p-4 pr-16"
                placeholder="type something here...."
              />
              <span className="absolute right-4 top-4 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-send"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 14l11 -11"></path>
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
              </span>
            </div>

            <small className="text-slate-500 mt-2">
              AI can generate incorrect information.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
